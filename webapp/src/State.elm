module State exposing (..)

import Http
import Json.Decode exposing (..)
import Types exposing (..)
import Types.Box.Decoder exposing (..)
import Types.Box.Types exposing (..)


init : () -> ( Model, Cmd Msg )
init _ =
    ( initialModel "-1", Cmd.none )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NewGame ->
            ( initialModel "-1", getModel )

        GetBoard result ->
            case result of
                Ok newModel ->
                    ( updateModel newModel, Cmd.none )

                Err _ ->
                    ( addErrorModel model "Can not find board", Cmd.none )


initialModel : String -> Model
initialModel gameID =
    { gameId = gameID
    , boxes = nullBoxes
    , edges = nullEdges
    , error = ""
    , gameState = "-1"
    }


getModel : Cmd Msg
getModel =
    Http.get
        { url = "http://localhost:3000/new/torung"
        , expect = Http.expectJson GetBoard jsonDecoder
        }


jsonDecoder : Decoder Model
jsonDecoder =
    field "game" modelDecoder


modelDecoder : Decoder Model
modelDecoder =
    map5 Model
        (field "gameId" string)
        (field "boxes" boxesDecoder)
        (field "edges" edgesDecoder)
        (field "error" string)
        (field "gameState" string)


updateModel : Model -> Model
updateModel newModel =
    { gameId = newModel.gameId
    , boxes = newModel.boxes
    , edges = newModel.edges
    , error = newModel.error
    , gameState = newModel.gameState
    }


addErrorModel : Model -> String -> Model
addErrorModel model err =
    { gameId = model.gameId
    , boxes = model.boxes
    , edges = model.edges
    , error = err
    , gameState = model.gameState
    }


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none
