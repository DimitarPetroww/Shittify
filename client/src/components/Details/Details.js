import "./Details.css"
import { ReactComponent as Like } from "../../svg/like.svg"
import { ReactComponent as Liked } from "../../svg/liked.svg"
import { ReactComponent as Time } from "../../svg/time.svg"
import { ReactComponent as Play } from "../../svg/play.svg"
import { ReactComponent as Cross } from "../../svg/cross.svg"
import { ReactComponent as Pen } from "../../svg/pen.svg"
import { ReactComponent as Search } from "../../svg/bold_search.svg"
import { ReactComponent as EditLink } from "../../svg/edit.svg"

import { useDispatch } from "react-redux"
import { useState } from "react"
import { setSongs } from "../../actions"

import SongRow from "./SongRow/SongRow"
import Edit from "./Edit/Edit"
import Delete from "./Delete/Delete"
import SearchSongItem from "./SearchSongItem/SearchSongItem"

const Details = ({ setIsPlaying }) => {
    const dispatch = useDispatch()
    const [isOwner] = useState(true)
    const [isEdit, setIsEdit] = useState(false)
    const [isDelete, setIsDelete] = useState(false)

    const setSongsHandler = () => {
        dispatch(setSongs([
            {
                name: "Hugh Hefner",
                artist: "MILIONI",
                img_src: "https://res.cloudinary.com/douwa5b0u/image/upload/v1631438255/HotFlix/hugh_kxjhje.jpg",
                src: "https://res.cloudinary.com/douwa5b0u/video/upload/v1631438228/HotFlix/MILIONI_-_HUGH_HEFNER_Official_Music_Video_Prod._by_ev1ltw_zq6jlo.mp3"
            },
            {
                name: "Аромат на барут",
                artist: "PAMELA X FYRE",
                img_src: "https://res.cloudinary.com/douwa5b0u/image/upload/v1631438255/HotFlix/fyre_wofwkf.jpg",
                src: "https://res.cloudinary.com/douwa5b0u/video/upload/v1631438226/HotFlix/PAMELA_X_FYRE_-_%D0%90%D0%A0%D0%9E%D0%9C%D0%90%D0%A2_%D0%9D%D0%90_%D0%91%D0%90%D0%A0%D0%A3%D0%A2_Official_Music_Video_Prod._by_ev1ltw_lxjsj6.mp3"
            },
            {
                name: "Dolna kifla",
                artist: "Spens",
                img_src: "https://res.cloudinary.com/douwa5b0u/image/upload/v1631438254/HotFlix/spens_ds7ofn.jpg",
                src: "https://res.cloudinary.com/douwa5b0u/video/upload/v1631438229/HotFlix/SPENS_-_%D0%94%D0%9E%D0%9B%D0%9D%D0%90_%D0%9A%D0%98%D0%A4%D0%9B%D0%90_Official_HD_Video_w2tccq.mp3"
            },
            {
                name: "Black Cotton",
                artist: "2pac",
                img_src: "https://res.cloudinary.com/douwa5b0u/image/upload/v1631438254/HotFlix/2pac_huquxo.jpg",
                src: "https://res.cloudinary.com/douwa5b0u/video/upload/v1631438231/HotFlix/Black_Cotton_oudw2u.mp3"
            }
        ]))
        setIsPlaying(true)
    }

    return (
        <>
            <section className="details-wrapper">
                <div className="song-info">
                    <article className="song-picture-container">
                        <label className="song-picture" htmlFor="picture">
                            <img src="https://res.cloudinary.com/douwa5b0u/image/upload/v1631438255/HotFlix/fyre_wofwkf.jpg" className={isOwner ? "can-change" : ""} alt=""/>
                            {isOwner ? <div className="edit-img" style={{ "--image": "url('https://res.cloudinary.com/douwa5b0u/image/upload/v1631438255/HotFlix/fyre_wofwkf.jpg')" }}>
                                <Pen />
                                <span>Choose an image</span>
                            </div> : ""}
                        </label>
                        {isOwner ? <input type="file" id="picture" /> : ""}
                    </article>
                    <article className="song-data">
                        <h4 className="song-heading">Song / Playlist</h4>
                        <div>
                            <h1 className="song-name">Аромат на барут</h1>
                            {isOwner
                                ?
                                <>
                                    <span className="song-edit-btn" onClick={() => setIsEdit(!isEdit)}><EditLink /></span>
                                    <span className="song-delete-btn" onClick={() => setIsDelete(!isEdit)}><Cross /></span>
                                </>
                                : ""}
                        </div>
                        <p className="song-author">Fyre X Pamela</p>
                    </article>
                </div>
                <div className="details-content">
                    <article className="content-header">
                        <button className="play-btn" onClick={setSongsHandler}><Play /></button>
                        <button className="like-btn"><Like /></button>
                        {/* <button className="unlike-btn"><Liked /></button> */}
                    </article>
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
                            <SongRow />
                            <SongRow />
                            <SongRow />
                            <SongRow />
                            <SongRow />
                            <SongRow />
                        </div>
                    </article>
                </div>
                {isOwner ?
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
            {isEdit ? <Edit close={() => setIsEdit(false)} /> : ""}
            {isDelete ? <Delete close={() => setIsDelete(false)} /> : ""}
        </>
    )
}
export default Details