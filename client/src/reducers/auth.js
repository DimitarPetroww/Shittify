const authReducer = (state = null, action) => {
    switch(action.type) {
        case "SIGN_IN":
            return action.payload
        case "SIGN_OUT":
            return null
        case "SET_PHOTO":
            return {...state, photoUrl: action.payload}
        case "CHANGE_NAME":
            return {...state, username: action.payload}
        case "DELETE_SONG_FROM_USER":
            let songs = [...state.ownedSongs]
            const index = songs.findIndex(x => x === action.payload)
            songs.splice(index, 1)

            return { ...state, ownedSongs: songs }
        default:
            return state
    }
}
export default authReducer