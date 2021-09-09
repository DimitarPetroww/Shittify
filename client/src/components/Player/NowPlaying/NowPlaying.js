import "./NowPlaying.css"

const NowPlaying = () => {
    return (
        <article className="player-now-playing">
            <img src="https://i.ytimg.com/vi/Og5lDcadRtU/maxresdefault.jpg" alt="" />
            <div className="player-now-playing-info">
                <h4 className="player-now-playing-info-title">Пиян 2005</h4>
                <p className="player-now-playing-info-author">Борис Дали</p>
            </div>
            <i className="far fa-heart"></i>
            {/* <i class="fas fa-heart" id="liked"></i> */}
        </article>
    );
}
export default NowPlaying