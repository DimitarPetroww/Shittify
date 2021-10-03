import PlayButton from "../../../PlayButton/PlayButton";
import "./Song.css"

const Song = ({ song }) => {
    return (
        <article className="song">
            <div className="song-img">
                <img src={song.image} alt="" />
            </div>
            <div className="song-content">
                <h3 className="song-content-title">{song.name}</h3>
                <p className="song-content-author">{song.artist}</p>
            </div>
            <PlayButton category="song" id={song._id} />
        </article>
    );
}

export default Song