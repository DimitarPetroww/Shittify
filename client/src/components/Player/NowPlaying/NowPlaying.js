import "./NowPlaying.css"
import { ReactComponent as Like } from "../../../svg/like.svg";
import { ReactComponent as Liked } from "../../../svg/liked.svg";

const NowPlaying = ({ song }) => {
    return (
        <article className="player-now-playing">
            <img src={song.image} alt="" />
            <div className="player-now-playing-info">
                <h4 className="player-now-playing-info-title">{song.name}</h4>
                <p className="player-now-playing-info-author">{song.artist}</p>
            </div>
            <div><Like /></div>
            {/* <div className="liked"><Liked /></div> */}
        </article>
    );
}
export default NowPlaying