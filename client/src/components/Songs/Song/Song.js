import PlayButton from "../../PlayButton/PlayButton";
import "./Song.css"

const Song = () => {
    return (
        <article className="song">
            <div className="song-img">
                <img src="https://i.ytimg.com/vi/Og5lDcadRtU/maxresdefault.jpg" alt="" />
            </div>
            <div className="song-content">
                <h3 className="song-content-title">Пиян 2005</h3>
                <p className="song-content-author">Борис Дали</p>
            </div>
            <PlayButton />
        </article>
    );
}

export default Song