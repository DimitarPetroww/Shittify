import "./AddSongs.css"
import { ReactComponent as Search } from "../../../svg/bold_search.svg"

import SearchSongItem from "../SearchSongItem/SearchSongItem"

import * as songService from "../../../services/song"
import { showAlert } from "../../../actions"

import { useEffect, useState } from "react"

import { useDispatch } from "react-redux"
function AddSongs() {
    const dispatch = useDispatch()
    const [songs, setSongs] = useState()

    useEffect(() => {
        songService.getSongs()
            .then(setSongs)
            .catch((e) => {
                dispatch(showAlert(e.message))
            })
    }, [])

    return (
        <article className="add-songs">
            <div className="add-header">
                <h1>Lets find something for your playlist</h1>
                <div className="add-search-header">
                    <Search className="add-search-icon" />
                    <input type="text" placeholder="Search for songs..." />
                </div>
            </div>
            <div className="add-main">
                {songs?.map(x => <SearchSongItem data={x} key={x._id} />)}
            </div>
        </article>
    )
}

export default AddSongs
