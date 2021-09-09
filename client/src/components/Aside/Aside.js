import "./Aside.css"
import MyPlaylistLink from "./MyPlaylistLink/MyPlaylistLink";
import { NavLink } from "react-router-dom"


const Aside = ({ isOpen, click }) => {
    const classes = ["aside"]
    if (isOpen) {
        classes.push("open")
    }
    return (
        <aside className={classes.join(" ")}>
            <nav className="aside-nav">
                <ul className="aside-nav-list" onClick={click}>
                    <li className="aside-nav-list-link">
                        <NavLink to="/" exact>
                            <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M 256.274 60.84 L 84.324 166.237 L 84.324 443.063 L 193.27 443.063 L 193.27 293.73 L 320.228 293.73 L 320.228 443.063 L 428.222 443.063 L 428.222 165.476 L 256.274 60.84 Z M 256.274 35.95 L 448.452 149.145 L 448.452 464.395 L 300 464.395 L 300 315.062 L 213.499 315.062 L 213.499 464.395 L 64.095 464.395 L 64.095 150.161 L 256.274 35.95 Z" fill="currentColor"></path></svg>
                            <span>
                                Home
                            </span>
                        </NavLink>
                    </li>
                    <li className="aside-nav-list-link">
                        <NavLink to="/search/songs" isActive={(match, location) => {
                            return location.pathname.startsWith("/search/")
                        }}>
                            <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z" fill="currentColor" fillRule="evenodd"></path></svg>
                            <span>Search</span>
                        </NavLink>
                    </li>
                    <li className="aside-nav-list-link" >
                        <NavLink to="/library/my-playlists" isActive={(match, location) => {
                            return location.pathname.startsWith("/library/")
                        }}>
                            <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z" fill="currentColor"></path></svg>
                            <span>Library</span>
                        </NavLink>
                    </li>
                    <li className="aside-nav-list-link">
                        <NavLink to="/create">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z" fill="currentColor" /></svg>
                            <span>Create Song</span>
                        </NavLink>
                    </li>
                    <li className="aside-nav-list-link">
                        <NavLink to="/asdadasda">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M20 15h4.071v2h-4.071v4.071h-2v-4.071h-4.071v-2h4.071v-4.071h2v4.071zm-8 6h-12v-2h12v2zm0-4.024h-12v-2h12v2zm0-3.976h-12v-2h12v2zm12-4h-24v-2h24v2zm0-4h-24v-2h24v2z" fill="currentColor" /></svg>
                            <span>Create Playlist</span>
                        </NavLink>
                    </li>
                    <hr className="aside-nav-list-border" />
                    <MyPlaylistLink />
                    <MyPlaylistLink />
                    <MyPlaylistLink />
                    <MyPlaylistLink />
                    <MyPlaylistLink />
                </ul>
            </nav>
        </aside>
    );
}

export default Aside