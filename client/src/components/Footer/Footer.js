import Player from "../Player/Player"
import "./Footer.css"

import { useDispatch, useSelector } from "react-redux";
import { setIndex, setSongs } from "../../actions";

const Footer = () => {
    const dispatch = useDispatch()
    const songs = useSelector(state => state.songs.songs)
    const currentSongIndex = useSelector(state => state.songs.currentSongIndex)
    const nextSongIndex = useSelector(state => state.songs.nextSongIndex)

    return (
        <footer className="footer">
            {songs.length > 0 ? <Player
                currentSongIndex={currentSongIndex}
                setCurrentSongIndex={(index) => dispatch(setIndex(index))}
                nextSongIndex={nextSongIndex}
                songs={songs} /> : <h1>No songs still..</h1>}
        </footer>
    );
}
export default Footer