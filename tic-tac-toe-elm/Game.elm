module Game where

import Html exposing (..)
import Player exposing (Player(..), otherPlayer, playerDecoder)
import Html.Events as Events
import StartApp.Simple 
import StartApp
import Signal exposing (Address, Signal, Mailbox, mailbox, send)
import Effects exposing (Effects, Never)
import Html.Attributes exposing (..)
import Task exposing (Task)
import Board
import Maybe
import Json.Encode exposing (Value)
import Json.Decode exposing (succeed, fail,object2, (:=), andThen, string, int, Decoder)

positionDecoder : Decoder Position
positionDecoder = object2 (\x y -> { x = x , y = y })
                  ("x" := int)
                  ("y" := int)

serverMessagesDecoder : Decoder Action
serverMessagesDecoder = 
  let matchResponseType responseType = 
        case responseType of
          "Connected"          -> succeed Connected
          "NoPlayersAvailable" -> succeed NoOp
          "GameStarted" -> 
            object2 (\userPlayer whoStarts -> GameStarted { userPlayer = userPlayer, whoStarts = whoStarts }) 
                      ("youArePlayer" := playerDecoder) 
                      ("whoStarts" := playerDecoder)
          "PlayerPutAMarkInPosition" -> object2 (\player pos -> PlayerClick { player = player , position = pos })
                                        ("player" := playerDecoder)
                                        ("position" := positionDecoder)
          "Draw" -> succeed GameDraw
          "GameWon" -> Json.Decode.map GameWon ("winner" := playerDecoder)
          "UserDisconnected" -> succeed OtherPlayerDisconnected
          other -> fail ("Unrecognized response type: " ++ other)
  in andThen ("responseType" := string) matchResponseType

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
           | PlayerDisconnected

getBoard : Model -> Maybe Board.Model
getBoard model = 
  case model of
    StartedGame startedGame -> Just startedGame.board
    WonGame wownGame        -> Just wownGame.board
    DrawnGame drawnGame     -> Just drawnGame.board
    _                       -> Nothing

initialModel : Model
initialModel = NotStarted

type alias NewGameInfo = { userPlayer : Player
                         , whoStarts  : Player
                         }

type alias Position = { x : Int
                      , y : Int 
                      }

type alias PlayerMovement = { player   : Player
                            , position : Position
                            }

type Action = Connected
            | StartGame
            | GameStarted NewGameInfo
            | PlayerClick PlayerMovement
            | GameWon Player
            | GameDraw
            | OtherPlayerDisconnected
            | NoOp

sendMessage : UserMessage -> Effects Action
sendMessage message = Signal.send userMessagesMailbox.address message
                    |> Effects.task
                    |> Effects.map (\_ -> NoOp)

update : Action -> Model -> (Model, Effects Action)
update action model =
  case (action,model) of
    (Connected, NotConnected) -> 
      (NotStarted, Effects.none)
    (StartGame, NotStarted) ->
      (WaitingOtherPlayer, sendMessage JoinGame)
    (GameStarted gameStarted, NotStarted) -> 
      (StartedGame { userPlayer = gameStarted.userPlayer 
                  , currentPlayer = gameStarted.whoStarts
                  , board = Board.initialModel (gameStarted.userPlayer /= gameStarted.whoStarts)
                  }
      , Effects.none
      )
    (PlayerClick mov, StartedGame startedGame) ->
      if mov.player == startedGame.currentPlayer then
         let pos = mov.position
             isUserMove = mov.player == startedGame.userPlayer
             effects = if isUserMove then sendMessage (UserMovement pos) else Effects.none
             blockAction = if isUserMove then Board.BlockBoard else Board.UnblockBoard
             board' = Board.update (Board.BoardClick pos.x pos.y mov.player) startedGame.board
         in (StartedGame { startedGame 
                          | board = Board.update blockAction board'
                          , currentPlayer = Player.otherPlayer startedGame.currentPlayer }
            , effects
            )
      else (model, Effects.none)
    (GameWon winner, StartedGame startedGame) ->
      (WonGame { userPlayer = startedGame.userPlayer, winner = winner, board = startedGame.board }
      , Effects.none
      )
    (GameDraw, StartedGame startedGame) ->
      (DrawnGame { board = startedGame.board }
      , Effects.none
      )
    (OtherPlayerDisconnected, StartedGame _) ->
      (PlayerDisconnected
      , Effects.none
      )
    _ ->
      (model, Effects.none)

gameText msg = h2 [class "centered-text"] [ text msg ]

gameStatusView : Signal.Address Action -> Model -> Html
gameStatusView address model =
  div [ class "game-status" ]
      [case model of
        NotConnected -> gameText "Connecting..."
        NotStarted -> button [ Events.onClick address StartGame ] [ gameText "Join game" ]
        WaitingOtherPlayer -> gameText "Waiting other player to join"
        StartedGame startedGame -> 
          if startedGame.currentPlayer == startedGame.userPlayer 
          then gameText "Make your move"
          else gameText "Waiting other player's move"  
        WonGame wonGame ->
          if wonGame.userPlayer == wonGame.winner
          then gameText "You win!"
          else gameText "You lose!"
        DrawnGame _ ->
          gameText "Draw!"
        PlayerDisconnected ->
          gameText "The other user has disconnected!"
      ]

fromBoardAction : Board.Action -> Action
fromBoardAction boardAction =
  case boardAction of
    Board.BoardClick x y player -> PlayerClick { player = player , position = { x = x , y = y } }
    _                           -> NoOp

boardView : Signal.Address Action -> Model -> List Html
boardView address model =
  case getBoard model of
    Nothing -> []
    Just board -> [Board.view (Signal.forwardTo address fromBoardAction) board]
    
view : Signal.Address Action -> Model -> Html
view address model =
  div [class "game"]
      ([ h1 [] [text "Tic Tac Toe"]
      , gameStatusView address model 
      ] ++ (boardView address model))

type UserMessage = JoinGame
                 | UserMovement Position
                 | NoMessage

userMessagesMailbox : Mailbox UserMessage
userMessagesMailbox = mailbox NoMessage

(=>) = (,)

encodeMessage : UserMessage -> Value
encodeMessage  message = 
  case message of
    JoinGame -> Json.Encode.object ["command" => Json.Encode.string "StartGame"]
    UserMovement position -> Json.Encode.object 
                             [ "command"  => Json.Encode.string "PlayAtPosition"
                             , "position" => Json.Encode.object [ "x" => Json.Encode.int position.x
                                                                , "y" => Json.Encode.int position.y]
                             ]
    NoMessage -> Json.Encode.null

port userMessages : Signal Value
port userMessages = Signal.map encodeMessage userMessagesMailbox.signal
        
--main = StartApp.Simple.start { model = initialModel, update = update, view = view }

app = StartApp.start { init = (initialModel, Effects.none), update = update, view = view, inputs = [] }

main = app.html

-- "Materializa" side effects, por ej userMessages (por que es necesario?)
port tasks : Signal (Task Never ())
port tasks = app.tasks
