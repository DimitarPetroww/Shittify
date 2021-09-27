import { request } from "../api";
import endpoints from "../api/constants";

const getSongs = (query = "") => {
    if(query !== "") {
        return request(`${endpoints.getSongs}?search=${query}`)
    }
    return request(endpoints.getSongs)
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
export {
    createSong,
    getSongs,
    getMySongs,
    getLikedSongs
}