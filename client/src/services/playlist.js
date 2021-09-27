import { request } from "../api";
import endpoints from "../api/constants";

const getPlaylists = (query = "") => {
    if (query !== "") {
        return request(`${endpoints.getPlaylists}?search=${query}`)
    }
    return request(endpoints.getPlaylists)
}
const getMyPlaylists = () => {
    return request(endpoints.getMyPlaylists)
}
const getLikedPlaylists = () => {
    return request(endpoints.getLikedPlaylists)
}
const createPlaylist = (formData) => {
    return request(endpoints.createPlaylist, {
        method: "POST",
        body: formData
    })
}
export {
    createPlaylist,
    getPlaylists,
    getMyPlaylists,
    getLikedPlaylists
}