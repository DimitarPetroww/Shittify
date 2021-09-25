const API_URL = process.env.REACT_APP_API_URL

const endpoints = {
    register: `${API_URL}/user/register`,
    login: `${API_URL}/user/login`,
    logout: `${API_URL}/user/logout`,
    uploadProfilePic: `${API_URL}/user/upload`,
    rename: `${API_URL}/user/rename`,
    getSongs: `${API_URL}/songs`,
    createSong: `${API_URL}/songs/create`,
    getPlaylists: `${API_URL}/playlists`,
    createPlaylist: `${API_URL}/playlists/create`
}

export default endpoints