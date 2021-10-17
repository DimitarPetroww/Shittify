import "./Details.css"
import { ReactComponent as Like } from "../../svg/like.svg"
import { ReactComponent as Liked } from "../../svg/liked.svg"
import { ReactComponent as Time } from "../../svg/time.svg"
import { ReactComponent as Play } from "../../svg/play.svg"
import { ReactComponent as Stop } from "../../svg/stop.svg"
import { ReactComponent as Cross } from "../../svg/cross.svg"
import { ReactComponent as Pen } from "../../svg/pen.svg"
import { ReactComponent as EditLink } from "../../svg/edit.svg"
import SongRow from "./SongRow/SongRow"
import Edit from "./Edit/Edit"
import Delete from "./Delete/Delete"

import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect, useRef } from "react"
import { setSongs, showAlert, updateSong } from "../../actions"

import * as playlistService from "../../services/playlist"
import * as songService from "../../services/song"
import AddSongs from "./AddSongs/AddSongs"


const requestMapper = {
    "playlist": playlistService.getOne,
    "song": songService.getOne
}

const Details = ({ setIsPlaying, match, history, isPlaying }) => {
    const user = useSelector(state => state.auth)
    const playingSongs = useSelector(state => state.songs)
    const dispatch = useDispatch()
    const [isOwner, setIsOwner] = useState(true)
    const [data, setData] = useState({})
    const [localSongs, setLocalSongs] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    const [isDelete, setIsDelete] = useState(false)

    useEffect(() => {
        const { category, id } = match.params
        const request = requestMapper[category]
        if (!request) {
            history.push("/404")
        }
        request(id)
            .then((res) => {
                setIsOwner(res.owner === user._id)
                if (category === "playlist") {
                    setLocalSongs(res.songs)
                    res.artist = res.songs.length > 0 ? [...new Set(res.songs.slice(0, 3).map(x => x.artist))].join(", ") + " and others" : ""
                } else {
                    setLocalSongs([res])
                }
                setData(res)
            })
            .catch(e => {
                dispatch(showAlert(e.message))
            })
    }, [])
    useEffect(() => {
        if(isPlaying) {
            start()
        }if(localSongs.length === 0) {
            setIsPlaying(false)
        }
    }, [localSongs])
    
    const setSongsHandler = () => {
        if ((isPlaying === false || playingSongs.id !== match.params.id) && localSongs.length !== 0) {
            start()
        } else if (isPlaying === true && playingSongs.id === match.params.id  && localSongs.length !== 0) {
            setIsPlaying(false)
        }
    }
    const likePlaylist = () => {
        playlistService.likePlaylist(data._id)
            .then(setData)
            .catch(e => {
                dispatch(showAlert(e.message))
            })
    }
    const unlikePlaylist = () => {
        playlistService.unlikePlaylist(data._id)
            .then(setData)
            .catch(e => {
                dispatch(showAlert(e.message))
            })
    }
    const start = () => {
        setIsPlaying(true)
        dispatch(setSongs({ songs: localSongs, id: match.params.id }))
    }


    return (
        <>
            <section className="details-wrapper">
                <div className="song-info">
                    <article className="song-picture-container">
                        <label className="song-picture" htmlFor="picture">
                            <img src={data.image} className={isOwner ? "can-change" : ""} alt="" />
                            {isOwner ? <div className="edit-img" style={{ "--image": `url(${data.image})` }}>
                                <Pen />
                                <span>Choose an image</span>
                            </div> : ""}
                        </label>
                        {isOwner ? <input type="file" id="picture" /> : ""}
                    </article>
                    <article className="song-data">
                        <h4 className="song-heading">{match.params.category[0].toUpperCase() + match.params.category.slice(1)}</h4>
                        <div>
                            <h1 className="song-name">{data.name}</h1>
                            {isOwner
                                ?
                                <>
                                    <span className="song-edit-btn" onClick={() => setIsEdit(!isEdit)}><EditLink /></span>
                                    <span className="song-delete-btn" onClick={() => setIsDelete(!isDelete)}><Cross /></span>
                                </>
                                : ""}
                        </div>
                        {data.artist ? <p className="song-author">{data.artist}</p> : ""}
                    </article>
                </div>
                <div className="details-content">
                    <article className="content-header">
                        <button className="play-btn" onClick={setSongsHandler}>{!isPlaying || playingSongs.id !== match.params.id ? <Play /> : <Stop />}</button>
                        {
                            match.params.category === "playlist" ? <>{!data?.usersLiked?.includes(user._id) ? <button className="like-btn" onClick={likePlaylist}><Like /></button> : <button className="unlike-btn" onClick={unlikePlaylist}><Liked /></button>}</> : ""
                        }
                    </article>
                    {localSongs.length > 0 ?
                        <article className="content-main">
                            <div className="grid thead">
                                <p className="index">
                                    #
                                </p>
                                <p className="title">
                                    Title
                                </p>
                                <p className="time">
                                    <Time />
                                </p>
                            </div>
                            <div className="tbody">
                                {localSongs.map((x, i) => <SongRow playedSongId={playingSongs.id} localSongs={localSongs} start={start} key={x._id} song={x} index={i + 1} canDelete={match.params.category === "playlist"} playlistId={data._id} setData={setData} setLocalSongs={setLocalSongs} />)}
                            </div>
                        </article> : ""}
                </div>
                {isOwner && match.params.category === "playlist"
                    ? <AddSongs containedSongs={localSongs} playlistId={data._id} setData={setData} setLocalSongs={setLocalSongs} />
                    : ""
                }
            </section>
            {isEdit ? <Edit close={() => setIsEdit(false)} name={data.name} /> : ""}
            {isDelete ? <Delete close={() => setIsDelete(false)} name={data.name} /> : ""}
        </>
    )
}
export default Details