import { ReactComponent as AudioFile } from "../../../svg/audio_file.svg"
import { ReactComponent as ImageFile } from "../../../svg/image_file.svg"
import { ReactComponent as Cross } from "../../../svg/cross.svg"
import { useState } from "react"
import { useDispatch } from "react-redux"
import * as songService from "../../../services/song"
import { addSongToUser, loader, showAlert } from "../../../actions"
const CreateSong = ({ history }) => {
    const dispatch = useDispatch()
    const [audio, setAudio] = useState({ name: "Song Audio (under 100mb)" })
    const [image, setImage] = useState({ name: "Song Image (under 100mb)" })

    const [fields, setFields] = useState({
        name: "",
        artist: "",
    })
    const [errors, setErrors] = useState({
        name: false,
        artist: false,
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setErrors(state => ({ ...state, [name]: value === "" }))
        setFields(state => ({ ...state, [name]: value }))
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("image", image)
        formData.append("audio", audio)
        formData.append("name", fields.name)
        formData.append("artist", fields.artist)

        dispatch(loader())
        songService.createSong(formData)
            .then(data => {
                dispatch(addSongToUser(data._id))
                dispatch(loader())
                history.push("/")
            })
            .catch(e => {
                dispatch(loader())
                dispatch(showAlert(e.message))
            })
    }


    return (
        <section className="create-wrapper">
            <div className="create-card">
                <h2 className="create-title">Create Song</h2>
                <form className="create-form" onSubmit={submitHandler} encType="multipart/form-data" >
                    <div className="create-group">
                        <input type="text" placeholder="Song Name" className={`create-input ${errors.name ? "create-input-error" : ""}`} name="name" onChange={handleChange} value={fields.name} />
                        {errors.name ? <small className="create-error">
                            <Cross />
                            <span>Song Name is required</span>
                        </small> : ""}
                    </div>
                    <div className="create-group">
                        <input type="text" placeholder="Song Artist" className={`create-input ${errors.artist ? "create-input-error" : ""}`} name="artist" onChange={handleChange} value={fields.artist} />
                        {errors.artist ? <small className="create-error">
                            <Cross />
                            <span>Song Artist is required</span>
                        </small> : ""}
                    </div>
                    <div className="create-input-files">
                        <div className="create-group">
                            <input type="file" className="create-input-file" id="image" accept="image/*" onChange={(e) => {
                                if (e.target.files.length !== 0) setImage(e.target.files[0])
                            }} />
                            <label htmlFor="image" className="file-label">
                                <ImageFile className="file-icon" />
                                {image.name}
                            </label>
                        </div>
                        <div className="create-group">
                            <input type="file" className="create-input-file" id="audio" accept="audio/*" onChange={(e) => {
                                if (e.target.files.length !== 0) setAudio(e.target.files[0])
                            }} />
                            <label htmlFor="audio" className="file-label">
                                <AudioFile className="file-icon" />
                                {audio.name}
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Create Song" className="create-btn" />
                </form>
            </div>
        </section>
    )
}
export default CreateSong