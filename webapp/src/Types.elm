module Types exposing(..)

import Http
import Types.Box.Types exposing (Boxes)
import Types.Box.Types exposing (Edges)

type alias Model =
  { gameId : String
  , boxes : Boxes
  , edges : Edges
  , error : String
  , gameState : String
  }

type Msg
  = GetBoard(Result Http.Error Model)
  | NewGame
