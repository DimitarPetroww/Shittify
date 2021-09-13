import "./Details.css"

import { ReactComponent as Like } from "../../svg/like.svg"
import { ReactComponent as Liked } from "../../svg/liked.svg"
import { ReactComponent as Time } from "../../svg/time.svg"
import { ReactComponent as Play } from "../../svg/play.svg"
import { ReactComponent as Cross } from "../../svg/cross.svg"
import { ReactComponent as Pen } from "../../svg/pen.svg"
import { ReactComponent as EditLink } from "../../svg/edit.svg"
import { useState } from "react"
import SongRow from "./SongRow/SongRow"
import Edit from "./Edit/Edit"
import Delete from "./Delete/Delete"

const Details = () => {
    const [isOwner] = useState(true)
    const [isEdit, setIsEdit] = useState(false)
    const [isDelete, setIsDelete] = useState(false)

    return (
        <>
            <section className="details-wrapper">
                <div className="song-info">
                    <article className="song-picture-container">
                        <label className="song-picture" htmlFor="picture">
                            <img src="https://res.cloudinary.com/douwa5b0u/image/upload/v1631438255/HotFlix/fyre_wofwkf.jpg" className={isOwner ? "can-change" : ""} />
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
                        <button className="play-btn"><Play /></button>
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
            </section>
            {isEdit ? <Edit close={() => setIsEdit(false)} /> : ""}
            {isDelete ? <Delete close={() => setIsDelete(false)} /> : ""}
        </>
    )
}
export default Details