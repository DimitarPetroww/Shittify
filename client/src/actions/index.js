export const login = () => {
    return {
        type: "SIGN_IN"
    }
}
export const logout = () => {
    return {
        type: "SIGN_OUT"
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