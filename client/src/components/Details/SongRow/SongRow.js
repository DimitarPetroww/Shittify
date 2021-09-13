import { ReactComponent as Can } from "./can.svg"
import "./SongRow.css"
const SongRow = () => {
    return (
        <div className="grid">
            <div className="index song-index">5</div>
            <div className="play"><svg height="20" role="img" width="20" viewBox="0 0 24 24" aria-hidden="true"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor"></polygon></svg></div>
            <div className="title song-text">
                <p>Aромат на барут</p>
                <p>Pamela X Fyre</p>
            </div>
            <div className="time song-time">4:20</div>
            <div className="delete"><Can /></div>
        </div>
    )
}

export default SongRow  