import "./Create.css"
import CreateSong from "./CreateSong/CreateSong"
import CreatePlaylist from "./CreatePlaylist/CreatePlaylist"

const Create = ({ match, history, location }) => {
    if (match.params.category === "song") {
        return <CreateSong history={history} />
    } else if (match.params.category === "playlist") {
        return <CreatePlaylist history={history} />
    }

}
export default Create