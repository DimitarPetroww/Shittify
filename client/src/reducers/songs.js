const songsReducer = (state = { songs: [], currentSongIndex: 0, nextSongIndex: 1, id: "" }, action) => {
    switch (action.type) {
        case "ADD_SONG":
            return { ...state, songs: [...state.songs, action.payload] }
        case "SET_SONGS":
            return { ...state, songs: action.payload.songs, id: action.payload.id }
        case "CLEAR_SONGS":
            return { songs: [], currentSongIndex: 0, nextSongIndex: 1 };
        case "SET_CURRENT_INDEX":
            return { ...state, currentSongIndex: action.payload, nextSongIndex: action.payload + 1 }
        case "UPDATE_SONG":
            let newSongs = [...state.songs]
            newSongs[state.currentSongIndex] = action.payload
            return { ...state, songs: newSongs }
        case "LIKE_SONG":
            let temp = [...state.songs]
            temp[state.currentSongIndex].usersLiked.push(action.payload)

            return { ...state, songs: temp }
        default:
            return state
    }
}
export default songsReducer