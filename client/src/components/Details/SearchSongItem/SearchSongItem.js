import { useDispatch } from "react-redux"
import { addSong } from "../../../actions"
import "./SearchSongItem.css"
const SearchSongItem = ({ data }) => {
    const dispatch = useDispatch()

    const addSongHandler = () => {
        dispatch(addSong({
            name: "Hail Mary",
            artist: "2PAC",
            img_src: "https://res.cloudinary.com/douwa5b0u/image/upload/v1631801782/HotFlix/hail_mary_yafguf.jpg",
            src: "https://res.cloudinary.com/douwa5b0u/video/upload/v1631801784/HotFlix/Tupac_-_Hail_Mary_yntzio.mp4"
        }))
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