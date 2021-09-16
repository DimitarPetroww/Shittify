import "./Aside.css"
import { NavLink } from "react-router-dom"
import { ReactComponent as Home } from "../../svg/home.svg"
import { ReactComponent as Search } from "../../svg/search.svg"
import { ReactComponent as Library } from "../../svg/library.svg"
import { ReactComponent as CreatePlaylist } from "../../svg/createPlaylist.svg"
import { ReactComponent as CreateSong } from "../../svg/createSong.svg"


const Aside = ({ isOpen, click }) => {
    const classes = ["aside"]
    if (isOpen) {
        classes.push("open")
    }
    return (
        <aside className={classes.join(" ")}>
            <nav className="aside-nav">
                <hr className="aside-nav-list-border" />
                <ul className="aside-nav-list" onClick={click}>
                    <li className="aside-nav-list-link">
                        <NavLink to="/" exact>
                            <Home />
                            <span>
                                Home
                            </span>
                        </NavLink>
                    </li>
                    <li className="aside-nav-list-link">
                        <NavLink to="/search/songs" isActive={(match, location) => {
                            return location.pathname.startsWith("/search/")
                        }}>
                            <Search />
                            <span>Search</span>
                        </NavLink>
                    </li>
                    <li className="aside-nav-list-link" >
                        <NavLink to="/library/my-playlists" isActive={(match, location) => {
                            return location.pathname.startsWith("/library/")
                        }}>
                            <Library />
                            <span>Library</span>
                        </NavLink>
                    </li>
                    <li className="aside-nav-list-link">
                        <NavLink to="/create/song">
                            <CreateSong />
                            <span>Create Song</span>
                        </NavLink>
                    </li>
                    <li className="aside-nav-list-link">
                        <NavLink to="/create/playlist">
                            <CreatePlaylist />
                            <span>Create Playlist</span>
                        </NavLink>
                    </li>
                    <hr className="aside-nav-list-border" />
                </ul>
            </nav>
        </aside>
    );
}

export default Aside