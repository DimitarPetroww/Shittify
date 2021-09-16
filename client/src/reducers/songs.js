const songsReducer = (state = {songs: [], currentSongIndex: 0, nextSongIndex: 1}, action) => {
    switch(action.type) {
        case "ADD_SONG":
            return {...state, songs: [...state.songs, action.payload] }
        case "SET_SONGS":
            return {...state, songs: action.payload}
        case "SET_CURRENT_INDEX":
            return {...state, currentSongIndex: action.payload, nextSongIndex: action.payload + 1}
        default: 
            return state
    }
}
export default songsReducer