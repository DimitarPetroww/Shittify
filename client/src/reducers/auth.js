const authReducer = (state = null, action) => {
    switch (action.type) {
        case "SIGN_IN":
            return action.payload
        case "SIGN_OUT":
            return null
        case "SET_PHOTO":
            return { ...state, photoUrl: action.payload }
        case "CHANGE_NAME":
            return { ...state, username: action.payload }
        case "DELETE_SONG_FROM_USER":
            let songs = [...state.ownedSongs]
            const index = songs.findIndex(x => x === action.payload)
            songs.splice(index, 1)

            return { ...state, ownedSongs: songs }
        case "DELETE_PLAYLIST_FROM_USER":
            let playlists = [...state.ownedPlaylists]
            const i = playlists.findIndex(x => x === action.payload)
            playlists.splice(i, 1)

            return { ...state, ownedPlaylists: playlists }
        case "ADD_SONG_TO_USER":
            return { ...state, ownedSongs: [...state.ownedSongs, action.payload] }
        case "ADD_PLAYLIST_TO_USER":
            return { ...state, ownedPlaylists: [...state.ownedPlaylists, action.payload] }
        default:
            return state
    }
}
export default authReducer