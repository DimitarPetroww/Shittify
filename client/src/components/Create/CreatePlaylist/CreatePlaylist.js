import { ReactComponent as ImageFile } from "../../../svg/image_file.svg"
import { ReactComponent as Cross } from "../../../svg/cross.svg"

const CreatePlaylist = () => {
    return (
        <>
            <section className="create-wrapper">
                <div className="create-card">
                    <h2 className="create-title">Create Playlist</h2>
                    <form className="create-form">
                        <div className="create-group">
                            <input type="text" placeholder="Playlist Name" className="create-input create-input-error" />
                            <small className="create-error">
                                <Cross />
                                <span>Playlist Name is required</span>
                            </small>
                        </div>
                        <div className="create-group">
                            <input type="file" className="create-input-file" id="playlist" />
                            <label htmlFor="playlist" className="file-label">
                                <ImageFile className="file-icon" />
                                Playlist Image (under 100mb)
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