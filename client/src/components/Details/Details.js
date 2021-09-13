import "./Details.css"

import { ReactComponent as Time } from "./time.svg"
import { ReactComponent as Play } from "./play.svg"
import { ReactComponent as Heart } from "./heart.svg"
import { ReactComponent as Cross } from "./cross.svg"
import { ReactComponent as Pen } from "./pen.svg"
import { NavLink } from "react-router-dom"
import { useState } from "react"
import SongRow from "./SongRow/SongRow"

const Details = () => {
    const [isOwner] = useState(true)

    return (
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
                                <span className="song-edit-btn"><Pen /></span>
                                <span className="song-delete-btn"><Cross /></span>
                            </>
                            : ""}
                    </div>
                    <p className="song-author">Fyre X Pamela</p>
                </article>
            </div>
            <div className="details-content">
                <article className="content-header">
                    <button className="play-btn"><Play /></button>
                    <button className="like-btn"><Heart /></button>
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
    )
}
export default Details