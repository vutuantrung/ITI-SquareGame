module Types.Game.Types exposing(..)

import Types.Box.Types exposing (..)
import Types.Box.Decoder exposing (..)

type alias Game =
    { idGame : String
    , boxes : Boxes
    , edges : Edges
    }

nullGame : Game
nullGame =
    { idGame = "-1"
    , boxes = nullBoxes
    , edges = nullEdges
    }