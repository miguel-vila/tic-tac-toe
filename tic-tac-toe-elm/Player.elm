module Player(..) where

import Json.Decode exposing (..)

type Player = PlayerX | PlayerO

otherPlayer player = 
  case player of
       PlayerX -> PlayerO
       PlayerO -> PlayerX

playerDecoder : Decoder Player
playerDecoder = 
  let matchStr str = 
        if str == "X" 
        then succeed PlayerX 
        else if str == "O"
        then succeed PlayerO
        else fail "Expecting 'X' or 'O'"
  in andThen string matchStr
