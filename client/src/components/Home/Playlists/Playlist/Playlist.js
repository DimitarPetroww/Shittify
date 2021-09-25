import "./Playlist.css"

import PlayButton from "../../../PlayButton/PlayButton";
const Playlist = () => {
    return (
        <article className="playlist">
            <div className="playlist-img">
                <img src="https://i.ytimg.com/vi/Og5lDcadRtU/maxresdefault.jpg" alt="" />
            </div>
            <div className="playlist-content">
                <h3 className="playlist-content-title">Пиян 2005</h3>
                <p className="playlist-content-author">Борис Дали</p>
            </div>
            <PlayButton category="playlist"/>
        </article>
    );
}
export default Playlist