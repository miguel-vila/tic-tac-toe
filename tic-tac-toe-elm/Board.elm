module Board where

import Html exposing (..)
import Player exposing (Player(..))
import Html.Events as Events
import StartApp.Simple 
import Html.Attributes exposing (..)
import Tile
import Maybe
import Array exposing (Array)

type alias Row   = Array Tile.Model
type alias Model = Array Row

initialModel : Model
initialModel = 
  let row = Array.repeat 3 Tile.initialModel
  in Array.repeat 3 row

type Action = TileAction Int Int Tile.Action

update : Action -> Model -> Model
update action model = 
  case action of
    TileAction x y tileAction -> 
      let maybeRow     = Array.get x model
          maybeTile    = Maybe.andThen maybeRow (Array.get y)
          maybeUpdated = Maybe.map (Tile.update tileAction) maybeTile
      in case (maybeRow, maybeUpdated) of
           (Just row, Just updated) -> 
             let updatedRow = Array.set y updated row
             in Array.set x updatedRow model
           _ -> model

rowView : Signal.Address Action -> Int -> Row -> Html
rowView address rowIndex row =
  let forwardedAddress y = Signal.forwardTo address (TileAction rowIndex y)
  in div [ class "row" ] 
       (row 
       |> Array.indexedMap (forwardedAddress >> Tile.view)
       |> Array.toList)

view : Signal.Address Action -> Model -> Html
view address model = 
  div [ class "board" ]
      (model
      |> Array.indexedMap (rowView address) 
      |> Array.toList)

main = StartApp.Simple.start { model = initialModel , update = update, view = view }
