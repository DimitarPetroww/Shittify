import "./SearchNavigation.css"
import Link from "../Link/Link"
import { ReactComponent as Search } from "../../../svg/search.svg";
let timeout;

const SearchNavigation = ({ location, history }) => {
    return (
        <>
            <div className="search-container">
                <span className="search-icon"><Search /></span>
                <input type="text" className="search-input" placeholder="Search..." onKeyUp={(e => { //After user stops typing
                    clearTimeout(timeout)

                    timeout = setTimeout(function () {
                        history.push(`${location.pathname}?${e.target.value}`);
                    }, 500);
                })} />
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