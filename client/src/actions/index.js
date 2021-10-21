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
export const deleteSongFromUser = (songId) => {
    return {
        type: "DELETE_SONG_FROM_USER",
        payload: songId
    }
}
export const deletePlaylistFromUser = (playlistId) => {
    return {
        type: "DELETE_PLAYLIST_FROM_USER",
        payload: playlistId
    }
}
export const addSongToUser = (songId) => {
    return {
        type: "ADD_SONG_TO_USER",
        payload: songId
    }
}
export const addPlaylistToUser = (playlistId) => {
    return {
        type: "ADD_PLAYLIST_TO_USER",
        payload: playlistId
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
export const clearSongs = () => {
    return {
        type: "CLEAR_SONGS"
    }
}
export const setIndex = (index) => {
    return {
        type: "SET_CURRENT_INDEX",
        payload: index
    }
}
export const updateSong = (song) => {
    return {
        type: "UPDATE_SONG",
        payload: song
    }
}
export const likeSong = (userId) => {
    return {
        type: "LIKE_SONG",
        payload: userId
    }
}
export const unlikeSong = (userId) => {
    return {
        type: "UNLIKE_SONG",
        payload: userId
    }
}
export const loader = () => {
    return {
        type: "LOAD"
    }
}
export const showAlert = (msg) => {
    return {
        type: "SHOW_MESSAGE",
        payload: msg
    }
}
export const clearAlert = () => {
    return {
        type: "CLEAR_MESSAGE",
    }
}