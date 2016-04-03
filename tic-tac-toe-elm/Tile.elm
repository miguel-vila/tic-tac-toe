module Tile(..) where

import Html exposing (..)
import Player exposing (Player(..))
import Html.Events as Events
import StartApp.Simple 
import Html.Attributes exposing (..)

type Model = Empty Bool
           | Occupied Player

initialModel : Model
initialModel = Empty False
  
type Action = Click Player
            | Block
            | Unblock

update : Action -> Model -> Model
update action model =
  case (action, model) of
    (Click player, Empty False) -> Occupied player
    (Block       , Empty _    ) -> Empty True
    (Unblock     , Empty _    ) -> Empty False
    _                           -> model

playerClass : Player -> String
playerClass player =
  case player of
    PlayerX -> "playerX"
    PlayerO -> "playerO"

playerText : Player -> String
playerText player = 
  case player of
    PlayerX -> "X"
    PlayerO -> "O"

view : Signal.Address Action -> Model -> Html
view address model =
  case model of
    Empty blocked -> div [ classList [("blocked-tile", blocked), ("tile", not blocked)], Events.onClick address (Click PlayerO) ] []
    Occupied player -> div [ class <| "blocked-tile" ++ " " ++ playerClass player ] [ text <| playerText player ]

main = StartApp.Simple.start { model = initialModel , update = update, view = view }
