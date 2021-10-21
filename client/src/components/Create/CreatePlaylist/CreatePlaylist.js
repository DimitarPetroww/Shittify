import { ReactComponent as ImageFile } from "../../../svg/image_file.svg"
import { ReactComponent as Cross } from "../../../svg/cross.svg"
import { addPlaylistToUser, loader } from "../../../actions"
import { showAlert } from "../../../actions"
import { useDispatch } from "react-redux"
import { useState } from "react"
import * as playlistService from "../../../services/playlist"

const CreatePlaylist = ({ history }) => {
    const dispatch = useDispatch()
    const [image, setImage] = useState({ name: "Playlist Image (under 100mb)" })

    const [name, setName] = useState("")
    const [nameError, setNameError] = useState(false)
    const handleChange = (e) => {
        const { value } = e.target;
        setNameError(value === "")
        setName(value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("image", image)
        formData.append("name", name)

        dispatch(loader())
        playlistService.createPlaylist(formData)
        .then(data => {
            dispatch(addPlaylistToUser(data._id))
            dispatch(loader())
            history.push("/")
        })
        .catch(e => {
            dispatch(loader())
            dispatch(showAlert(e.message))
        })
    }


    return (
        <>
            <section className="create-wrapper">
                <div className="create-card">
                    <h2 className="create-title">Create Playlist</h2>
                    <form className="create-form" onSubmit={submitHandler}>
                        <div className="create-group">
                            <input type="text" placeholder="Playlist Name" className={`create-input ${nameError ? "create-input-error" : ""}`} onChange={handleChange} />
                            {nameError ? <small className="create-error">
                                <Cross />
                                <span>Playlist Name is required</span>
                            </small> : ""}
                        </div>
                        <div className="create-group">
                            <input type="file" className="create-input-file" id="playlist" onChange={e => {
                                if (e.target.files.length !== 0) setImage(e.target.files[0])
                            }} />
                            <label htmlFor="playlist" className="file-label">
                                <ImageFile className="file-icon" />
                                {image.name}
                            </label>
                        </div>
                        <input type="submit" value="Create Playlist" className="create-btn" />
                    </form>
                </div>
            </section>
        </>
    )
}
export default CreatePlaylist