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
const unlikePlaylist = (id) => {
    return request(`${endpoints.playlists}/${id}/unlike`, {
        method: "PUT",
    })
}
const addSongToPlaylist = (playlistId, data) => {
    return request(`${endpoints.playlists}/${playlistId}/add-song`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
}
const removeSongFromPlaylist = (playlistId, songId) => {
    return request(`${endpoints.playlists}/${playlistId}/remove-song`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({songId})
    })
}
const deletePlaylist = (playlistId) => {
    return request(`${endpoints.playlists}/${playlistId}`, {
        method: "DELETE",
    })
}
const changeImage = (playlistId, formData) => {
    return request(`${endpoints.playlists}/${playlistId}/change-image`, {
        method: "PATCH",
        body: formData
    })
}
const editName = (playlistId, name) => {
    return request(`${endpoints.playlists}/${playlistId}/edit-name`, {
        method: "PATCH",
        body: JSON.stringify({ name })
    })
}
export {
    createPlaylist,
    getPlaylists,
    getMyPlaylists,
    getLikedPlaylists,
    getOne,
    likePlaylist,
    unlikePlaylist,
    addSongToPlaylist,
    removeSongFromPlaylist,
    deletePlaylist,
    changeImage,
    editName
}