import "./NowPlaying.css"
import { ReactComponent as Like } from "../../../svg/like.svg";
import { ReactComponent as Liked } from "../../../svg/liked.svg";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { likeSong, showAlert, unlikeSong } from "../../../actions";

import * as songService from "../../../services/song"

const NowPlaying = ({ song }) => {
    const user = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const likeSongHandler = () => {
        songService.likeSong(song._id)
            .then((_) => {
                dispatch(likeSong(user._id))
            })
            .catch(e => {
                dispatch(showAlert(e.message))
            })
    }
    const unlikeSongHandler = () => {
        songService.unlikeSong(song._id)
            .then((_) => {
                dispatch(unlikeSong(user._id))
            })
            .catch(e => {
                dispatch(showAlert(e.message))
            })
    }
    return (
        <article className="player-now-playing">
            <img src={song?.image} alt="" />
            <div className="player-now-playing-info">
                <h4 className="player-now-playing-info-title">{song?.name}</h4>
                <p className="player-now-playing-info-author">{song?.artist}</p>
            </div>
            {!song?.usersLiked.includes(user._id) ? <div onClick={likeSongHandler}><Like /></div> : <div className="liked" onClick={unlikeSongHandler}><Liked /></div>}
        </article>
    );
}
export default NowPlaying