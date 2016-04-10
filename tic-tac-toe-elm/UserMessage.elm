module UserMessage(UserMessage(..), encodeMessage) where

import Position exposing (Position)
import Json.Encode exposing (Value, int, string, object, null)

type UserMessage = JoinGame
                 | UserMovement Position
                 | NoMessage

(=>) = (,)

encodeMessage : UserMessage -> Value
encodeMessage  message = 
  case message of
    JoinGame -> object ["command" => string "StartGame"]
    UserMovement position -> object 
                             [ "command"  => string "PlayAtPosition"
                             , "position" => object [ "x" => int position.x
                                                    , "y" => int position.y]
                             ]
    NoMessage -> null