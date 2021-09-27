import { ReactComponent as Audio } from "../../svg/audio.svg"

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
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
        <>
            {data.length !== 0
                ?
                <section className="wrapper">
                    {data.map(x => <Container key={x._id} category={category} data={x} />)}
                </section>
                :
                <section className="no-data">
                    <Audio className="no-data-logo"/>
                    <h1 className="no-data-title">No results found</h1>
                    <div className="no-data-links">
                        <NavLink to="#">Create Song</NavLink>
                        <NavLink to="#">Create Playlist</NavLink>
                    </div>
                </section>}
        </>
    )
}

export default Wrapper