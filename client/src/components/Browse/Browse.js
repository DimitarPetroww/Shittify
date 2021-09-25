import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loader, showAlert } from "../../actions";

import * as songService from "../../services/song"
import "./Browse.css"
import Container from "./Container/Container"
const Wrapper = ({ match, location }) => {
    const dispatch = useDispatch()
    const [category, setCategory] = useState()
    const [data, setData] = useState([])

    useEffect(() => {
        dispatch(loader())
        let param = match.params.category
        const search = new URLSearchParams(location.search).get("search") || ""
        param.includes("songs") ? setCategory("songs") : setCategory("playlists")
        songService.getSongs(search)
        .then((songs) => {
            setData(songs)
            dispatch(loader())
        })
        .catch((e) => {
            dispatch(showAlert(e.message))
            dispatch(loader())
        })
    }, [match.params.category, location.search])
    return (
        <section className="wrapper">
            {data.map(x => <Container key={x._id} category={category} data={x}/>)}
        </section>
    )
}

export default Wrapper