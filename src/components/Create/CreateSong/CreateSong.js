import { ReactComponent as AudioFile } from "../../../svg/audio_file.svg"
import { ReactComponent as ImageFile } from "../../../svg/image_file.svg"

const CreateSong = () => {
    return (
        <section className="create-wrapper">
            <div className="create-card">
                <h2 className="create-title">Create Song</h2>
                <form className="create-form">
                    <div className="create-group">
                        <input type="text" placeholder="Song Name" className="create-input create-input-error" />
                        <small className="create-error">Song Name is required</small>
                    </div>
                    <div className="create-group">
                        <input type="text" placeholder="Song Artist" className="create-input" />
                        <small className="create-error">Song Artist is required</small>
                    </div>
                    <div className="create-group">
                        <input type="file" className="create-input-file" id="image" />
                        <label htmlFor="image" className="file-label">
                            <ImageFile className="file-icon" />
                            Song Image (under 100mb)
                        </label>
                    </div>
                    <div className="create-group">
                        <input type="file" className="create-input-file" id="audio" />
                        <label htmlFor="audio" className="file-label file-error-label">
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