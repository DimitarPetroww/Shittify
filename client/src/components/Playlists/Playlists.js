import Playlist from "./Playlist/Playlist"
import "./Playlists.css"


import { NavLink } from "react-router-dom";

const Playlists = () => {
    return (
        <article className="playlists">
            <div className="playlists-header">
                <h2 className="playlists-header-title">
                    Most Liked Playlists
                </h2>
                <NavLink to="/search/playlists">Check All</NavLink>
            </div>
            <div className="playlists-container">
                <Playlist />
                <Playlist />
                <Playlist />
                <Playlist />
                <Playlist />
            </div>
        </article>
    );
}
export default Playlists