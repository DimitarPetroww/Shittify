export const signIn = (user) => {
    return {
        type: "SIGN_IN",
        payload: user
    }
}
export const logout = () => {
    return {
        type: "SIGN_OUT"
    }
}
export const updateProfilePic = (photoUrl) => {
    return {
        type: "SET_PHOTO",
        payload: photoUrl
    }
}
export const rename = (username) => {
    return {
        type: "CHANGE_NAME",
        payload: username
    }
}
export const setSongs = (songs) => {
    return {
        type: "SET_SONGS",
        payload: songs
    }
}
export const setIndex = (index) => {
    return {
        type: "SET_CURRENT_INDEX",
        payload: index
    }
}
export const addSong = (song) => {
    return {
        type: "ADD_SONG",
        payload: song
    }
}