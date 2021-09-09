import "./LibraryNavigation.css"
import Link from "../Link/Link"

const LibraryNavigation = () => {
    return (
        <nav className="library-navigation">
            <ul className="library-navigation-list">
                <Link url="/library/my-playlists">My Playlists</Link>
                <Link url="/library/liked-playlists">Liked Playlists</Link>
                <Link url="/library/my-songs">My Songs</Link>
                <Link url="/library/liked-songs">Liked Songs</Link>
            </ul>
        </nav>
    )
}
export default LibraryNavigation