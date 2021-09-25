import { useDispatch } from "react-redux"
import { addSong } from "../../../actions"
import "./SearchSongItem.css"
const SearchSongItem = () => {
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
                <img src="https://res.cloudinary.com/douwa5b0u/image/upload/v1631438255/HotFlix/fyre_wofwkf.jpg" alt="asd"/>
                <div>
                    <p>Aромат на барут</p>
                    <p>Pamela X Fyre</p>
                </div>
            </div>
            <button className="search-item-add" onClick={addSongHandler}>Add</button>
        </div>
    )
}

export default SearchSongItem