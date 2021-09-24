import { ReactComponent as AudioFile } from "../../../svg/audio_file.svg"
import { ReactComponent as ImageFile } from "../../../svg/image_file.svg"
import { ReactComponent as Cross } from "../../../svg/cross.svg"
import { useState } from "react"
const CreateSong = () => {
    const [image, setImage] = useState()
    const [audio, setAudio] = useState()

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
        formData.append("name", e.target.name.value)
        formData.append("artist", e.target.artist.value)
       
        fetch("http://localhost:5000/api/song/create", {
            method: "POST",
            body: formData
        })
        .then((r)=> r.json())
        .then(data=> console.log(data))
        .catch(e=> console.log(e.message))
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
                    <div className="create-group">
                        <input type="file" className="create-input-file" id="image" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
                        <label htmlFor="image" className="file-label">
                            <ImageFile className="file-icon" />
                            Song Image (under 100mb)
                        </label>
                    </div>
                    <div className="create-group">
                        <input type="file" className="create-input-file" id="audio" accept="audio/*" onChange={(e) => setAudio(e.target.files[0])} />
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