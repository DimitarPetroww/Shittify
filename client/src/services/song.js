import { request } from "../api";
import endpoints from "../api/constants";

const createSong = (formData) => {
    return request(endpoints.createSong, {
        method: "POST",
        body: formData
    })
}
export {
    createSong
}