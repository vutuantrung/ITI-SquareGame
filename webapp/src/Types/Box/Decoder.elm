module Types.Box.Decoder exposing (..)

import Json.Decode as JD exposing (..)
import Types.Box.Types exposing (..) 


boxesDecoder : Decoder Boxes
boxesDecoder =
    JD.list boxDecoder

boxDecoder : Decoder Box
boxDecoder =
    JD.map5 Box
    (field "state" int)
    (field "top" int)
    (field "bottom" int)
    (field "left" int)
    (field "right" int)

edgesDecoder : Decoder Edges
edgesDecoder =
    JD.list edgeDecoder

edgeDecoder : Decoder Edge
edgeDecoder =
    JD.map Edge
    (field "state" int)