import "./NowPlaying.css"

const NowPlaying = ({ song }) => {
    return (
        <article className="player-now-playing">
            <img src={song.img_src} alt="" />
            <div className="player-now-playing-info">
                <h4 className="player-now-playing-info-title">{song.name}</h4>
                <p className="player-now-playing-info-author">{song.artist}</p>
            </div>
            <i className="far fa-heart"></i>
            {/* <i class="fas fa-heart" id="liked"></i> */}
        </article>
    );
}
export default NowPlaying