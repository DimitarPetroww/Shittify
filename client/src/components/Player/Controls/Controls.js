import "./Controls.css"

const Controls = ({
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
                        <i className="fas fa-step-backward"></i>
                    </li>
                    {isPlaying
                        ? <li className="player-stop" onClick={() => setIsPlaying(false)}>
                            <button className="player-stop-button">
                                <i className="fas fa-pause"></i>
                            </button>
                        </li>
                        : <li className="player-start" onClick={() => setIsPlaying(true)}>
                            <button className="player-start-button">
                                <i className="fas fa-play"></i>
                            </button>
                        </li>}
                    <li className="player-forward" onClick={forwardSong}>
                        <i className="fas fa-step-forward"></i>
                    </li>
                </ul>
                <div className="player-controls-progress">
                    <p>{currentTime}</p>
                    <input ref={progress} className="progress-bar" type="range" defaultValue="0" onChange={onProgressChange} />
                    <p>{duration}</p>
                </div>
            </article>
            <article className="player-audio">
                {isMuted ? <i className="fas fa-volume-mute" onClick={unmute}></i> : <i className="fas fa-volume-up" onClick={mute}></i>}

                <input className="audio-bar" type="range" defaultValue="100" ref={volume} onChange={onVolumeChange} />
            </article>
        </>
    );
}
export default Controls