module Position(..) where

import Json.Decode exposing (object2, Decoder, int, (:=))

positionDecoder : Decoder Position
positionDecoder = object2 (\x y -> { x = x , y = y })
                  ("x" := int)
                  ("y" := int)

type alias Position = { x : Int
                      , y : Int 
                      }

