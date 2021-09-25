import "./Playlist.css"

import PlayButton from "../../../PlayButton/PlayButton";
const Playlist = ({ playlist }) => {
    return (
        <article className="playlist">
            <div className="playlist-img">
                <img src={playlist.image} alt="" />
            </div>
            <div className="playlist-content">
                <h3 className="playlist-content-title">{playlist.name}</h3>
                <p className="playlist-content-author">{playlist.artist}</p>
            </div>
            <PlayButton category="playlist" />
        </article>
    );
}
export default Playlist