import { request } from "../api";
import endpoints from "../api/constants";

const getPlaylists = (query = "") => {
    if (query !== "") {
        return request(`${endpoints.getPlaylists}?search=${query}`)
    }
    return request(endpoints.getPlaylists)
}
const createPlaylist = (formData) => {
    return request(endpoints.createPlaylist, {
        method: "POST",
        body: formData
    })
}
export {
    createPlaylist,
    getPlaylists
}