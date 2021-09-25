import Playlists from "./Playlists/Playlists"
import Songs from "./Songs/Songs"
import "./Home.css"
import * as playlistService from "../../services/playlist"
import * as songService from "../../services/song"
import { loader, showAlert } from "../../actions"
import { useEffect } from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"



const Home = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState([])

    useEffect(() => {
        dispatch(loader())
        Promise.all([
            songService.getSongs(),
            playlistService.getPlaylists()
        ])
        .then((res) => {
            dispatch(loader())
            setData(res.map(x => x.sort((a, b) => a.usersLiked.length - b.usersLiked.length).slice(0, 5)))
        })
        .catch(e => {
            dispatch(loader())
            dispatch(showAlert(e.message))
        })
    }, [])

    return (
        <section className="home-container">
            {data.length > 0 ? <><Songs songs={data[0]} />
                <Playlists playlists={data[1]} /></> : ""}
        </section>
    );
}
export default Home