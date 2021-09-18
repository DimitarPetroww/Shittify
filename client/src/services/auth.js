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
export {
    register
}