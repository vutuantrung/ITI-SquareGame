module Types.Box.Types exposing (..)

type alias Boxes =
    List Box

type alias Box =
  { state : Int
  , top : Int
  , bottom : Int
  , left : Int
  , right : Int
  }

type alias Edges =
    List Edge

type alias Edge =
    { state : Int }

nullBoxes : Boxes
nullBoxes =
    []

nullEdges : Edges
nullEdges =
    []