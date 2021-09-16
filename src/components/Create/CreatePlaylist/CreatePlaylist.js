import { Multiselect } from "multiselect-react-dropdown";
import { useState } from "react";

import {ReactComponent as ImageFile} from "../../../svg/image_file.svg"

const CreatePlaylist = () => {
    const [options, setOptions] = useState([
        { key: "Option 1", cat: "Group 1" },
        { key: "Option 2", cat: "Group 1" },
        { key: "Option 3", cat: "Group 1" },
        { key: "Option 4", cat: "Group 2" },
        { key: "Option 5", cat: "Group 2" },
        { key: "Option 6", cat: "Group 2" },
        { key: "Option 7", cat: "Group 2" }
    ])
    return (
        <>
            <section className="create-wrapper">
                <div className="create-card">
                    <h2 className="create-title">Create Playlist</h2>
                    <form className="create-form">
                        <div className="create-group">
                            <input type="text" placeholder="Playlist Name" className="create-input create-input-error" />
                            <small className="create-error">Playlist Name is required</small>
                        </div>
                        <div className="create-group">
                            <input type="file" className="create-input-file" id="playlist" />
                            <label htmlFor="playlist" className="file-label">
                                <ImageFile className="file-icon"/>
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