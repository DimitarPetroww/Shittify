import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { showAlert } from "../../actions";
import * as playlistService from "../../services/playlist";
import * as songService from "../../services/song"
import "./Browse.css"
import Container from "./Container/Container"

const requestMapper = {
    "songs": songService.getSongs,
    "playlists": playlistService.getPlaylists,
    "my-playlists": playlistService.getMyPlaylists,
    "my-songs": songService.getMySongs,
    "liked-playlists": playlistService.getLikedPlaylists,
    "liked-songs": songService.getLikedSongs
}
const Wrapper = ({ match, location, history }) => {
    const dispatch = useDispatch()
    const [category, setCategory] = useState()
    const [data, setData] = useState([])

    useEffect(() => {
        const request = requestMapper[match.params.category]
        if (!request) { //404 NOT FOUND
            return history.push("/")
        }

        const search = new URLSearchParams(location.search).get("search") || ""
        match.params.category.includes("songs") ? setCategory("songs") : setCategory("playlists")

        request(search)
            .then(setData)
            .catch((e) => {
                dispatch(showAlert(e.message))
            })
    }, [match.params.category, location.search])
    return (
        <section className="wrapper">
            {data.length !== 0 ? data.map(x => <Container key={x._id} category={category} data={x} />) : <h1>No songs yet...</h1>}
        </section>
    )
}

export default Wrapper