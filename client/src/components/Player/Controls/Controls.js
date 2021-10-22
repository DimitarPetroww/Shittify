import "./Controls.css"
import { ReactComponent as Volume } from "../../../svg/volume.svg"
import { ReactComponent as Mute } from "../../../svg/mute.svg"
import { ReactComponent as Forward } from "../../../svg/forward.svg"
import { ReactComponent as Backward } from "../../../svg/backward.svg"
import { ReactComponent as Stop } from "../../../svg/stop.svg"
import { ReactComponent as Play } from "../../..//svg/play.svg"

const Controls = ({
    canChangeDuration,
    isMuted,
    unmute,
    mute,
    progress,
    onProgressChange,
    volume,
    onVolumeChange,
    currentTime,
    duration,
    isPlaying,
    setIsPlaying,
    forwardSong,
    backwardSong
}) => {
    return (
        <>
            <article className="player-controls">
                <ul className="player-controls-controller">
                    <li className="player-backward" onClick={backwardSong}>
                        <Backward />
                    </li>
                    {isPlaying
                        ? <li className="player-stop" onClick={() => setIsPlaying(false)}>
                            <button className="player-stop-button">
                                <Stop />
                            </button>
                        </li>
                        : <li className="player-start" onClick={() => setIsPlaying(true)}>
                            <button className="player-start-button">
                                <Play />
                            </button>
                        </li>}
                    <li className="player-forward" onClick={forwardSong}>
                        <Forward />
                    </li>
                </ul>
                <div className="player-controls-progress">
                    <p>{currentTime}</p>
                    <input ref={progress} className="progress-bar" type="range" defaultValue="0" onChange={canChangeDuration ? onProgressChange : ""} />
                    <p>{duration}</p>
                </div>
            </article>
            <article className="player-audio">
                {isMuted ? <div onClick={unmute}><Mute /></div> : <div onClick={mute}><Volume /></div>}
                <input className="audio-bar" type="range" defaultValue="100" ref={volume} onChange={onVolumeChange} />
            </article>
        </>
    );
}
export default Controls