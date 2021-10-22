import { request } from "../api";
import endpoints from "../api/constants";

const getSongs = (query = "") => {
    if (query !== "") {
        return request(`${endpoints.songs}?search=${query}`)
    }
    return request(endpoints.songs)
}
const getMySongs = () => {
    return request(endpoints.getMySongs)
}
const getLikedSongs = () => {
    return request(endpoints.getLikedSongs)
}
const createSong = (formData) => {
    return request(endpoints.createSong, {
        method: "POST",
        body: formData
    })
}
const getOne = (id) => {
    return request(`${endpoints.songs}/${id}`)
}
const likeSong = (id) => {
    return request(`${endpoints.songs}/${id}/like`, {
        method: "PUT",
    })
}
const unlikeSong = (id) => {
    return request(`${endpoints.songs}/${id}/unlike`, {
        method: "PUT",
    })
}
const deleteSong = (songId) => {
    return request(`${endpoints.songs}/${songId}`, {
        method: "DELETE",
    })
}
const changeImage = (songId, formData) => {
    return request(`${endpoints.songs}/${songId}/change-image`, {
        method: "PATCH",
        body: formData
    })
}
const editName = (songId, name) => {
    return request(`${endpoints.songs}/${songId}/edit-name`, {
        method: "PATCH",
        body: JSON.stringify({ name })
    })
}
export {
    createSong,
    getSongs,
    getMySongs,
    getLikedSongs,
    getOne,
    likeSong,
    unlikeSong,
    deleteSong,
    changeImage,
    editName
}