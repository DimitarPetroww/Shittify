import "./Details.css"
import { ReactComponent as Like } from "../../svg/like.svg"
import { ReactComponent as Liked } from "../../svg/liked.svg"
import { ReactComponent as Time } from "../../svg/time.svg"
import { ReactComponent as Play } from "../../svg/play.svg"
import { ReactComponent as Stop } from "../../svg/stop.svg"
import { ReactComponent as Cross } from "../../svg/cross.svg"
import { ReactComponent as Pen } from "../../svg/pen.svg"
import { ReactComponent as Search } from "../../svg/bold_search.svg"
import { ReactComponent as EditLink } from "../../svg/edit.svg"
import SongRow from "./SongRow/SongRow"
import Edit from "./Edit/Edit"
import Delete from "./Delete/Delete"
import SearchSongItem from "./SearchSongItem/SearchSongItem"

import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { setSongs, showAlert } from "../../actions"

import * as playlistService from "../../services/playlist"
import * as songService from "../../services/song"


const requestMapper = {
    "playlist": playlistService.getOne,
    "song": songService.getOne
}

const Details = ({ setIsPlaying, match, history, isPlaying }) => {
    const user = useSelector(state => state.auth)
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
            .then((data) => {
                setData(data)
                setIsOwner(data.owner === user._id)
                if (category === "playlist") {
                    return setLocalSongs(data.songs)
                }
                setLocalSongs([data])
            })
            .catch(e => {
                dispatch(showAlert(e.message))
            })
    }, [])
    const setSongsHandler = () => {
        if (isPlaying === false) {
            setIsPlaying(true)
            dispatch(setSongs(localSongs))
        } else {
            setIsPlaying(false)
        }
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
                                    <span className="song-delete-btn" onClick={() => setIsDelete(!isEdit)}><Cross /></span>
                                </>
                                : ""}
                        </div>
                        <p className="song-author">{data.artist}</p>
                    </article>
                </div>
                <div className="details-content">
                    <article className="content-header">
                        <button className="play-btn" onClick={setSongsHandler}>{!isPlaying ? <Play /> : <Stop />}</button>
                        <button className="like-btn"><Like /></button>
                        {/* <button className="unlike-btn"><Liked /></button> */}
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
                                {localSongs.map((x, i) => <SongRow key={x._id} song={x} index={i + 1} />)}
                            </div>
                        </article> : ""}
                </div>
                {isOwner && match.params.category === "playlist" ?
                    <article className="add-songs">
                        <div className="add-header">
                            <h1>Lets find something for your playlist</h1>
                            <div className="add-search-header">
                                <Search className="add-search-icon" />
                                <input type="text" placeholder="Search for songs..." />
                            </div>
                        </div>
                        <div className="add-main">
                            <SearchSongItem />
                            <SearchSongItem />
                            <SearchSongItem />
                            <SearchSongItem />
                            <SearchSongItem />
                            <SearchSongItem />
                            <SearchSongItem />
                            <SearchSongItem />
                        </div>
                    </article>
                    : ""}
            </section>
            {isEdit ? <Edit close={() => setIsEdit(false)} name={data.name} /> : ""}
            {isDelete ? <Delete close={() => setIsDelete(false)} name={data.name} /> : ""}
        </>
    )
}
export default Details