const API_URL = process.env.REACT_APP_API_URL

const endpoints = {
    register: `${API_URL}/user/register`,
    login: `${API_URL}/user/login`,
    uploadProfilePic: `${API_URL}/user/upload`
}

export default endpoints