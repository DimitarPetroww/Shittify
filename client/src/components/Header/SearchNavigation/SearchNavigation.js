import "./SearchNavigation.css"
import Link from "../Link/Link"
import { ReactComponent as Search } from "../../../svg/search.svg";
import { ReactComponent as Close } from "../../../svg/close.svg";

import { useEffect } from "react";
import { useRef } from "react";
let timeout;

const SearchNavigation = ({ location, history }) => {
    const searchInput = useRef()
    useEffect(() => {
        searchInput.current.value = ""
    }, [location])

    return (
        <>
            <div className="search-container">
                <span className="search-icon"><Search /></span>
                <input type="text" className="search-input" ref={searchInput} placeholder="Search..." onKeyUp={(e => { //After user stops typing
                    clearTimeout(timeout)
                    timeout = setTimeout(function () {
                        e.target.value !== "" ? history.push(`${location.pathname}?search=${e.target.value}`) : history.push(location.pathname)
                    }, 500);
                })} />
                <span className="clear-icon" onClick={() => history.push(location.pathname)}><Close /></span>
            </div>
            <nav className="navigation">
                <ul className="navigation-list">
                    <Link url="/search/songs">Songs</Link>
                    <Link url="/search/playlists">Playlists</Link>
                </ul>
            </nav>
        </>
    )
}
export default SearchNavigation