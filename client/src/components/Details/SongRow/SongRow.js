import { useState } from "react"
import { useDispatch } from "react-redux"
import { setIndex, showAlert } from "../../../actions"

import { ReactComponent as Can } from "../../../svg/can.svg"
import { ReactComponent as Play } from "../../../svg/play.svg"

import * as playlistService from "../../../services/playlist"
import "./SongRow.css"
const SongRow = ({ song, index, canDelete, playlistId, setData, setLocalSongs, localSongs, playedSongId, start }) => {
    const dispatch = useDispatch()
    const [duration, setDuration] = useState(0)

    const deleteSongHandler = () => {
        if (playedSongId === song._id) {
            dispatch(setIndex(index => localSongs.length ? 0 : index))
        }
        playlistService.removeSongFromPlaylist(playlistId, song._id)
            .then(res => {
                setData(res)
                setLocalSongs(state => {
                    let index = state.findIndex(x => x._id === song._id)
                    return [...state.slice(0, index), ...state.slice(index + 1)]
                })
            })
            .catch(e => {
                dispatch(showAlert(e.message))
            })
    }
    return (
        <div className="grid center">
            <audio src={song.audio} onLoadedMetadata={(e) => {
                const minutes = Math.floor(e.target.duration / 60)
                const seconds = Math.floor(e.target.duration % 60)
                setDuration(`${minutes}:${seconds}`)
            }}></audio>
            <div className="index song-index">{index}</div>
            <div className="play" onClick={() => { dispatch(setIndex(index - 1)); start() }}><Play /></div>
            <div className="title song-text">
                <img src={song.image} />
                <div>
                    <p>{song.name}</p>
                    <p>{song.artist}</p>
                </div>
            </div>
            <div className="time song-time">{duration}</div>
            {canDelete ? <div className="delete" onClick={deleteSongHandler}><Can /></div> : ""}
        </div>
    )
}

export default SongRow