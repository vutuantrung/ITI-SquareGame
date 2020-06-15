module Main exposing (main)

import Browser
import State exposing (init, subscriptions, update)
import View exposing (..)


main =
    Browser.element
        { init = init
        , update = update
        , subscriptions = subscriptions
        , view = view
        }
