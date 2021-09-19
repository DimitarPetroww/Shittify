import Player from "../Player/Player"
import "./Footer.css"

import { useDispatch, useSelector } from "react-redux";
import { setIndex } from "../../actions";

const Footer = ({ isPlaying, setIsPlaying }) => {
    const dispatch = useDispatch()
    const songs = useSelector(state => state.songs.songs)
    const currentSongIndex = useSelector(state => state.songs.currentSongIndex)
    const nextSongIndex = useSelector(state => state.songs.nextSongIndex)

    return (
        <footer className="footer">
            <Player
                currentSongIndex={currentSongIndex}
                setCurrentSongIndex={(index) => dispatch(setIndex(index))}
                nextSongIndex={nextSongIndex}
                songs={songs}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying} 
            />
        </footer>
    );
}
export default Footer