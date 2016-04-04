module Player(..) where

type Player = PlayerX | PlayerO

otherPlayer player = 
  case player of
       PlayerX -> PlayerO
       PlayerO -> PlayerX
