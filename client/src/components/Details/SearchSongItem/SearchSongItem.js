import { useDispatch } from "react-redux"
import { addSong, showAlert } from "../../../actions"
import * as playlistService from "../../../services/playlist"
import "./SearchSongItem.css"
const SearchSongItem = ({ data, playlistId, setLocalSongs, setData }) => {
    const dispatch = useDispatch()

    const addSongHandler = () => {
        playlistService.addSongToPlaylist(playlistId, data)
            .then(data => {
                setData(data)
                setLocalSongs(data.songs)
            })
            .catch(e => {
                dispatch(showAlert(e.message))
            })
    }

    return (
        <div className="search-item">
            <div className="search-item-content">
                <img src={data.image} alt={data.name} />
                <div>
                    <p>{data.name}</p>
                    <p>{data.artist}</p>
                </div>
            </div>
            <button className="search-item-add" onClick={addSongHandler}>Add</button>
        </div>
    )
}

export default SearchSongItem