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
                            <i className="fas fa-file-image file-icon"></i>
                            Song Image (under 100mb)
                        </label>
                    </div>
                    <div className="create-group">
                        <input type="file" className="create-input-file" id="audio" />
                        <label htmlFor="audio" className="file-label file-error-label">
                            <i className="fas fa-file-audio file-icon"></i>
                            Song Audio (under 100mb)
                        </label>
                    </div>
                    <input type="submit" value="Create" className="create-btn" />
                </form>
            </div>
        </section>
    )
}
export default CreateSong