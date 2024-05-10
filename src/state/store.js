import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {authReducer} from "./Authentification/Reducer"
import { thunk } from "redux-thunk";

const rooteRducer=combineReducers({
    auth:authReducer,
})

export const store = legacy_createStore(rooteRducer,applyMiddleware(thunk))
