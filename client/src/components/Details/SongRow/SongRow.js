import { useEffect } from "react"
import { useState } from "react"

import { ReactComponent as Can } from "../../../svg/can.svg"
import { ReactComponent as Play } from "../../../svg/play.svg"
import "./SongRow.css"
const SongRow = ({ song, index }) => {
    const [duration, setDuration] = useState(0)
    
    return (
        <div className="grid center">
            <audio src={song.audio} onLoadedMetadata={(e) => {
                const minutes = Math.floor(e.target.duration / 60)
                const seconds = Math.floor(e.target.duration % 60)
                setDuration(`${minutes}:${seconds}`)
            }}></audio>
            <div className="index song-index">{index}</div>
            <div className="play"><Play /></div>
            <div className="title song-text">
                <img src={song.image} />
                <div>
                    <p>{song.name}</p>
                    <p>{song.artist}</p>
                </div>
            </div>
            <div className="time song-time">{duration}</div>
            <div className="delete"><Can /></div>
        </div>
    )
}

export default SongRow