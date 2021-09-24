import { ReactComponent as AudioFile } from "../../../svg/audio_file.svg"
import { ReactComponent as ImageFile } from "../../../svg/image_file.svg"
import { ReactComponent as Cross } from "../../../svg/cross.svg"
import { useState } from "react"
const CreateSong = () => {

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

    }


    return (
        <section className="create-wrapper">
            <div className="create-card">
                <h2 className="create-title">Create Song</h2>
                <form className="create-form" onSubmit={submitHandler}>
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
                    <div className="create-group">
                        <input type="file" className="create-input-file" id="image" accept="image/*"/>
                        <label htmlFor="image" className="file-label">
                            <ImageFile className="file-icon" />
                            Song Image (under 100mb)
                        </label>
                    </div>
                    <div className="create-group">
                        <input type="file" className="create-input-file" id="audio" />
                        <label htmlFor="audio" className="file-label">
                            <AudioFile className="file-icon" />
                            Song Audio (under 100mb)
                        </label>
                    </div>
                    <input type="submit" value="Create Song" className="create-btn" />
                </form>
            </div>
        </section>
    )
}
export default CreateSong