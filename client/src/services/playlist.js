import { request } from "../api";
import endpoints from "../api/constants";

const getPlaylists = (query = "") => {
    if (query !== "") {
        return request(`${endpoints.playlists}?search=${query}`)
    }
    return request(endpoints.playlists)
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
const getOne = (id) => {
    return request(`${endpoints.playlists}/${id}`)
}
const likePlaylist = (id) => {
    return request(`${endpoints.playlists}/${id}/like`, {
        method: "PUT",
    })
}
export {
    createPlaylist,
    getPlaylists,
    getMyPlaylists,
    getLikedPlaylists,
    getOne,
    likePlaylist
}