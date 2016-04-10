module GameAction(..) where

import Position exposing (Position, positionDecoder)
import Player exposing (Player, playerDecoder)
import Json.Decode exposing (succeed, fail,object2, (:=), andThen, string, int, Decoder, at)

type alias NewGameInfo = { userPlayer : Player
                         , whoStarts  : Player
                         }

type alias PlayerMovement = { player   : Player
                            , position : Position
                            }

type GameAction = Connected
            | StartGame
            | GameStarted NewGameInfo
            | PlayerClick PlayerMovement
            | GameWon Player
            | GameDraw
            | OtherPlayerDisconnected
            | NoOp
            | ErrorResponse String

serverMessagesDecoder : Decoder GameAction
serverMessagesDecoder = 
  let matchResponseType responseType = 
        case responseType of
          "NoOp"               -> succeed NoOp
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
          "GameWon" -> Json.Decode.map GameWon (at ["winner" , "player"] playerDecoder)
          "UserDisconnected" -> succeed OtherPlayerDisconnected
          other -> fail ("Unrecognized response type: " ++ other)
  in andThen ("responseType" := string) matchResponseType