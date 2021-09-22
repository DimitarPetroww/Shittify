const API_URL = process.env.REACT_APP_API_URL

const endpoints = {
    register: `${API_URL}/user/register`,
    login: `${API_URL}/user/login`,
    logout: `${API_URL}/user/logout`,
    uploadProfilePic: `${API_URL}/user/upload`,
    rename: `${API_URL}/user/rename`
}

export default endpoints