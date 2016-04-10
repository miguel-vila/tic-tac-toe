module Tile(..) where

import Html exposing (..)
import Player exposing (Player(..))
import Html.Events as Events
import Html.Attributes exposing (..)

type alias EmptyTile = { blocked    : Bool
                       , userPlayer : Player
                       }

type Model = Empty EmptyTile
           | Occupied Player

initialModel : Bool -> Player -> Model
initialModel blocked player = Empty { blocked       = blocked 
                                    , userPlayer = player  
                                    }

type Action = Click Player
            | Block
            | Unblock

update : Action -> Model -> Model
update action model =
  case (action, model) of
    (Click player , Empty empty) -> 
      if not empty.blocked || empty.userPlayer /= player
      then Occupied player
      else model
    (Block        , Empty empty) -> 
      Empty { empty | blocked = True  }
    (Unblock      , Empty empty) -> 
      Empty { empty | blocked = False }
    _                            ->
      model

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
    Empty empty -> 
      let blocked = empty.blocked
      in div [ classList [("blocked-tile", blocked), ("tile", not blocked)], Events.onClick address (Click empty.userPlayer) ] []
    Occupied player ->
      div [ class <| "blocked-tile" ++ " " ++ playerClass player ] [ text <| playerText player ]