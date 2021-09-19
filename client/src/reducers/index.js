import authReducer from "./auth"
import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import songsReducer from "./songs"
import loadReducer from "./load"

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth"]
}

const allReducers = combineReducers({ auth: authReducer, songs: songsReducer, load: loadReducer })

export default persistReducer(persistConfig, allReducers)