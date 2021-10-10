import "./AddSongs.css"
import { ReactComponent as Search } from "../../../svg/bold_search.svg"

import SearchSongItem from "../SearchSongItem/SearchSongItem"

import * as songService from "../../../services/song"
import { showAlert } from "../../../actions"

import { useEffect, useState } from "react"

import { useDispatch } from "react-redux"
let timeout;
function AddSongs({ containedSongs, playlistId, setLocalSongs, setData }) {
    const dispatch = useDispatch()
    const [songs, setSongs] = useState()
    const [filtered, setFiltered] = useState()

    useEffect(() => {
        songService.getSongs()
            .then((res) => {
                setSongs(res.filter(x => !containedSongs.some(y=> y._id === x._id)))
                setFiltered(res.filter(x => !containedSongs.some(y=> y._id === x._id)))
            })
            .catch((e) => {
                dispatch(showAlert(e.message))
            })
    }, [])

    const searchHandler = (e) => {
        clearTimeout(timeout)
        timeout = setTimeout(function () {
            const value = e.target.value.toLowerCase()
            setFiltered(() => songs.filter(x=> x.name.toLowerCase().includes(value) || x.artist.toLowerCase().includes(value)))
        }, 300);
    }
    return (
        <article className="add-songs">
            <div className="add-header">
                <h1>Lets find something for your playlist</h1>
                <div className="add-search-header">
                    <Search className="add-search-icon" />
                    <input type="text" placeholder="Search for songs..." onKeyUp={searchHandler} />
                </div>
            </div>
            <div className="add-main">
                {filtered?.map(x => <SearchSongItem data={x} key={x._id} playlistId={playlistId} setLocalSongs={setLocalSongs} setData={setData}/>)}
            </div>
        </article>
    )
}

export default AddSongs
