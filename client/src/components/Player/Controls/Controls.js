import "./Controls.css"

const Controls = () => {
    return (
        <>
            <article className="player-controls">
                <ul className="player-controls-controller">
                    <li className="player-backward">
                        <i className="fas fa-step-backward"></i>
                    </li>
                    <li className="player-start">
                        <button className="player-start-button">
                            <i className="fas fa-play"></i>
                        </button>
                    </li>
                    {/* <li className="player-stop">
                    <button className="player-stop-button">
                        <i class="fas fa-pause"></i>
                    </button>
                </li> */}
                    <li className="player-forward">
                        <i className="fas fa-step-forward"></i>
                    </li>
                </ul>
                <div className="player-controls-progress">
                    <p>0:00</p>
                    <div className="progress-bar" style={{ "--width": 70 }}></div>
                    <p>3:00</p>
                </div>
            </article>
            <article className="player-audio">
                <i className="fas fa-volume-up"></i>
                {/* <i class="fas fa-volume-mute"></i> */}
                <div className="audio-bar" style={{ "--width": 100 }}></div>
            </article>
        </>
    );
}
export default Controls