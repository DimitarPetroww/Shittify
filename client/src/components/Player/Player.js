import "./Player.css"
import NowPlaying from "./NowPlaying/NowPlaying"
import Controls from "./Controls/Controls"

const Player = () => {
    return (
        <section className="player">
            <NowPlaying />
            <Controls />
        </section>
    );
}

export default Player