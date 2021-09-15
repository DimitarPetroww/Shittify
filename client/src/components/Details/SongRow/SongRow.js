import { ReactComponent as Can } from "../../../svg/can.svg"
import { ReactComponent as Play } from "../../../svg/play.svg"
import "./SongRow.css"
const SongRow = () => {
    return (
        <div className="grid center">
            <div className="index song-index">5</div>
            <div className="play"><Play /></div>
            <div className="title song-text">
                <img src="https://res.cloudinary.com/douwa5b0u/image/upload/v1631438255/HotFlix/fyre_wofwkf.jpg" />
                <div>
                    <p>Aромат на барут</p>
                    <p>Pamela X Fyre</p>
                </div>
            </div>
            <div className="time song-time">4:20</div>
            <div className="delete"><Can /></div>
        </div>
    )
}

export default SongRow