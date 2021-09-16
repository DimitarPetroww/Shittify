import authReducer from "./auth"
import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import songsReducer from "./songs"

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth", "songs"]
}

const allReducers = combineReducers({ auth: authReducer, songs: songsReducer })

export default persistReducer(persistConfig, allReducers)