import Song from "./Song/Song"
import "./Songs.css"

import { NavLink  } from "react-router-dom";

const Songs = () => {
    return (
        <article className="songs">
            <div className="songs-header">
                <h2 className="songs-header-title">
                    Most Liked songs
                </h2>
                <NavLink to="/search/songs">Check All</NavLink>
            </div>
            <div className="songs-container">
                <Song />
                <Song />
                <Song />
                <Song />
                <Song />
            </div>
        </article>
    );
}

export default Songs