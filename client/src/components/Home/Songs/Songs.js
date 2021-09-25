import Song from "./Song/Song"
import "./Songs.css"

import { NavLink } from "react-router-dom";

const Songs = ({ songs }) => {
    return (
        <article className="songs">
            <div className="songs-header">
                <h2 className="songs-header-title">
                    Most Liked songs
                </h2>
                <NavLink to="/search/songs">Check All</NavLink>
            </div>
            <div className="songs-container">
                {songs.map(x => <Song song={x} key={x._id} />)}
            </div>
        </article>
    );
}

export default Songs