import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { showAlert } from "../../actions";
import * as playlistService from "../../services/playlist";

import * as songService from "../../services/song"
import "./Browse.css"
import Container from "./Container/Container"
const Wrapper = ({ match, location }) => {
    const dispatch = useDispatch()
    const [category, setCategory] = useState()
    const [data, setData] = useState([])

    useEffect(() => {
        let param = match.params.category
        let request;
        const search = new URLSearchParams(location.search).get("search") || ""
        param.includes("songs") ? setCategory("songs") : setCategory("playlists")
        switch (param) {
            case "songs":
                request = songService.getSongs
            break;
            case "playlists":
                request = playlistService.getPlaylists
            break;
        }
        request(search)
        .then((res) => {
            setData(res)
        })
        .catch((e) => {
            dispatch(showAlert(e.message))
        })
    }, [match.params.category, location.search])
    return (
        <section className="wrapper">
            {data.map(x => <Container key={x._id} category={category} data={x} />)}
        </section>
    )
}

export default Wrapper