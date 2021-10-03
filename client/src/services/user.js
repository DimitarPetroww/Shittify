import { request } from "../api";
import endpoints from "../api/constants";

const getUser = () => {
    return request(endpoints.getUser)
}
const register = (data) => {
    return request(endpoints.register, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
}
const login = (data) => {
    return request(endpoints.login, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
}
const logout = () => {
    return request(endpoints.logout, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        }
    })
}
const upload = (formData) => {
    return request(endpoints.uploadProfilePic, {
        method: "POST",
        body: formData
    })
}
const rename = (username) => {
    return request(endpoints.rename, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username })
    })
}
export {
    register,
    login,
    upload,
    rename,
    logout,
    getUser
}