import { ReactComponent as Can } from "../../../svg/can.svg"
import { ReactComponent as Play } from "../../../svg/play.svg"
import "./SongRow.css"
const SongRow = () => {
    return (
        <div className="grid">
            <div className="index song-index">5</div>
            <div className="play"><Play /></div>
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