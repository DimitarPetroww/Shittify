import { request } from "../api";
import endpoints from "../api/constants";

const getSongs = (query = "") => {
    console.log(query);
    if(query !== "") {
        return request(`${endpoints.getSongs}?search=${query}`)
    }
    return request(endpoints.getSongs)
}
const createSong = (formData) => {
    return request(endpoints.createSong, {
        method: "POST",
        body: formData
    })
}
export {
    createSong,
    getSongs
}