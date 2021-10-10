import { useDispatch } from "react-redux"
import { addSong } from "../../../actions"
import "./SearchSongItem.css"
const SearchSongItem = ({ data }) => {
    const dispatch = useDispatch()

    const addSongHandler = () => {
       
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