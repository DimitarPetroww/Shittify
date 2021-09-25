import Playlist from "./Playlist/Playlist"
import "./Playlists.css"


import { NavLink } from "react-router-dom";

const Playlists = ({ playlists }) => {
    return (
        <article className="playlists">
            <div className="playlists-header">
                <h2 className="playlists-header-title">
                    Most Liked Playlists
                </h2>
                <NavLink to="/search/playlists">Check All</NavLink>
            </div>
            <div className="playlists-container">
               {playlists.map(x=> <Playlist key={x._id} playlist={x}/>)}
            </div>
        </article>
    );
}
export default Playlists