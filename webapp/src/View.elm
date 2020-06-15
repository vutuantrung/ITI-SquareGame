module View exposing (..)

import Html exposing (..)
import Html.Attributes exposing (class)
import Html.Events exposing (onClick)
import Types exposing (..)


view : Model -> Html Msg
view model =
    div []
        [ h2 [] [ text "New game" ]
        , viewTime model
        ]


viewTime : Model -> Html Msg
viewTime model =
    div []
        [ div [ class "error" ] [ text model.error ]
        , div [ class "message" ] [ text ("Game id: " ++ model.gameId) ]
        , button
            [ class "button"
            , onClick NewGame
            ]
            [ text "New Game" ]
        ]
