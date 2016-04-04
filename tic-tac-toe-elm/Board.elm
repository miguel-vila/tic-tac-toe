module Board(Model, initialModel, Action(..), update, view) where

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

initialModel : Bool -> Model
initialModel blocked = 
  let row = Array.repeat 3 (Tile.initialModel blocked)
  in Array.repeat 3 row

type Action = BoardClick Int Int Player
            | BlockBoard
            | UnblockBoard

toTileAction : Action -> Tile.Action
toTileAction action = 
  case action of
    BoardClick _ _ player -> Tile.Click player
    BlockBoard            -> Tile.Block
    UnblockBoard          -> Tile.Unblock

fromTileAction : Int -> Int -> Tile.Action -> Action
fromTileAction x y tileAction =
  case tileAction of
    Tile.Click player -> BoardClick x y player
    Tile.Block        -> BlockBoard
    Tile.Unblock      -> UnblockBoard

updateTile: Int -> Int -> Action -> Model -> Model
updateTile x y action model =
  let maybeRow     = Array.get x model
      maybeTile    = Maybe.andThen maybeRow (Array.get y)
      maybeUpdated = Maybe.map (Tile.update <| toTileAction action) maybeTile
  in 
    case (maybeRow, maybeUpdated) of
      (Just row, Just updated) -> 
        let updatedRow = Array.set y updated row
        in Array.set x updatedRow model
      _ -> model

updateBoard : Action -> Model -> Model
updateBoard action model =
  let tileAction = toTileAction action
  in Array.map (Array.map (Tile.update tileAction)) model

update : Action -> Model -> Model
update action model = 
  case action of
    BoardClick x y _ -> updateTile x y action model
    BlockBoard       -> updateBoard action model
    UnblockBoard     -> updateBoard action model

rowView : Signal.Address Action -> Int -> Row -> Html
rowView address rowIndex row =
  let forwardedAddress y = Signal.forwardTo address (fromTileAction rowIndex y)
  in div [ class "row" ] 
       (row 
       |> Array.indexedMap (forwardedAddress >> Tile.view)
       |> Array.toList)

view : Signal.Address Action -> Model -> Html
view address model = 
  div [] 
        [
         div [ class "board" ]
           (model
           |> Array.indexedMap (rowView address) 
           |> Array.toList)
        ,  button [Events.onClick address BlockBoard] [text "block"] 
        ,  button [Events.onClick address UnblockBoard] [text "unblock"] 
        ]

main = StartApp.Simple.start { model = initialModel False, update = update, view = view }
