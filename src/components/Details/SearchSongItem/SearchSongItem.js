import "./SearchSongItem.css"
const SearchSongItem = () => {
    return (
        <div className="search-item">
            <div className="search-item-content">
                <img src="https://res.cloudinary.com/douwa5b0u/image/upload/v1631438255/HotFlix/fyre_wofwkf.jpg" />
                <div>
                    <p>Aромат на барут</p>
                    <p>Pamela X Fyre</p>
                </div>
            </div>
            <button className="search-item-add">Add</button>
        </div>
    )
}

export default SearchSongItem