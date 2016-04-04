module Game where

import Html exposing (..)
import Player exposing (Player(..), otherPlayer)
import Html.Events as Events
import StartApp.Simple 
import Html.Attributes exposing (..)
import Board
import Maybe

type alias Board = Board.Model

type alias Started = { userPlayer : Player
                     , currentPlayer: Player
                     , board : Board
                     }

type alias Won = { userPlayer : Player
                 , winner : Player
                 , board : Board
                 }

type alias Drawn = { board : Board }

type Model = NotConnected
           | NotStarted
           | WaitingOtherPlayer
           | StartedGame Started
           | WonGame Won
           | DrawnGame Drawn

getBoard : Model -> Maybe Board.Model
getBoard model = 
  case model of
    StartedGame startedGame -> Just startedGame.board
    WonGame wownGame        -> Just wownGame.board
    DrawnGame drawnGame     -> Just drawnGame.board
    _                       -> Nothing

initialModel : Model
initialModel = NotConnected

type alias NewGameInfo = { userPlayer : Player
                         , currentPlayer : Player
                         }

type Action = Connected
            | StartGame
            | GameStarted NewGameInfo
            | PlayerClick Int Int Player
            | GameWon Player
            | GameDraw
            | NoOp

update : Action -> Model -> Model
update action model =
  case (action,model) of
    (Connected, NotConnected) -> 
      NotStarted
    (GameStarted gameStarted, NotStarted) -> 
      StartedGame { userPlayer = gameStarted.userPlayer 
                  , currentPlayer = gameStarted.currentPlayer
                  , board = Board.initialModel (gameStarted.userPlayer /= gameStarted.currentPlayer)
                  }
    (PlayerClick x y player, StartedGame startedGame) ->
      if player == startedGame.currentPlayer then
         let shouldBlock = player == startedGame.userPlayer
             blockAction = if shouldBlock then Board.BlockBoard else Board.UnblockBoard
             board' = Board.update (Board.BoardClick x y player) startedGame.board
         in StartedGame { startedGame 
                          | board = Board.update blockAction board'
                          , currentPlayer = Player.otherPlayer startedGame.currentPlayer }
      else model
    (GameWon winner, StartedGame startedGame) ->
      WonGame { userPlayer = startedGame.userPlayer, winner = winner, board = startedGame.board }
    (GameDraw, StartedGame startedGame) ->
      DrawnGame { board = startedGame.board }
    _ ->
      model

gameStatusView : Signal.Address Action -> Model -> Html
gameStatusView address model =
  div [ class "game-status" ]
      [case model of
        NotConnected -> text "Connecting ..."
        NotStarted -> button [ Events.onClick address StartGame ] [ text "Join game"]
        WaitingOtherPlayer -> text "Waiting other player to join"
        StartedGame startedGame -> 
          if startedGame.currentPlayer == startedGame.userPlayer 
          then text "Make your move" 
          else text "Waiting other player's move"  
        WonGame wonGame ->
          if wonGame.userPlayer == wonGame.winner
          then text "You win!"
          else text "You lose!"
        DrawnGame _ ->
          text "Draw!"
      ]

fromBoardAction : Board.Action -> Action
fromBoardAction boardAction =
  case boardAction of
    Board.BoardClick x y player -> PlayerClick x y player
    _                           -> NoOp

boardView : Signal.Address Action -> Model -> List Html
boardView address model =
  case getBoard model of
    Nothing -> []
    Just board -> [Board.view (Signal.forwardTo address fromBoardAction) board]
    
view : Signal.Address Action -> Model -> Html
view address model =
  div []
      ([ h1 [] [text "Tic Tac Toe"]
      , gameStatusView address model 
      ] ++ (boardView address model))
        
main = StartApp.Simple.start { model = initialModel, update = update, view = view }
