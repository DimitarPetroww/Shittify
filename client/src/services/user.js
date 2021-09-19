import { request } from "../api";
import endpoints from "../api/constants";

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
const upload = (formData) => {
    return request(endpoints.uploadProfilePic, {
        method: "POST",
        body: formData
    })
}
export {
    register,
    login,
    upload
}