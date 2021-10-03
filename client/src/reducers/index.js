import { combineReducers } from "redux"

import authReducer from "./auth"
import songsReducer from "./songs"
import loadReducer from "./load"
import alertReducer from "./alert"

export default combineReducers({ auth: authReducer, songs: songsReducer, load: loadReducer, alert: alertReducer })