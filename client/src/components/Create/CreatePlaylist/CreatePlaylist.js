import { Multiselect } from "multiselect-react-dropdown";
import { useState } from "react";

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
                        <div className="create-group select">
                            <Multiselect
                                id="search"
                                style={{
                                    chips: {
                                        backgroundColor: "#000000",
                                        background: "linear-gradient(147deg, #202020 0%, #434343 74%)"
                                    },
                                    searchBox: {
                                        border: "none",
                                        borderBottom: "2px solid rgba(255, 255, 255, 0.2)",
                                    },
                                    optionContainer: {
                                        backgroundColor: "#000000",
                                        background: "linear-gradient(147deg, #202020 0%, #434343 74%)",
                                        border: "none",
                                        color: "white",

                                    },
                                    inputField: {
                                        color: "white",
                                    },
                                    groupHeading: {
                                        fontSize: "20px",
                                        borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                                        margin: "0 10px",
                                        color: "#00D55A"
                                    }
                                }}
                                emptyRecordMsg="No Songs"
                                placeholder="Add Songs..."
                                options={options}
                                displayValue="key"
                                avoidHighlightFirstOption
                                groupBy="cat"
                            />
                            <small className="create-error">Playlist should have atleast 1 song</small>
                        </div>
                        <div className="create-group">
                            <input type="file" className="create-input-file" id="playlist" />
                            <label htmlFor="playlist" className="file-label">
                                <i className="fas fa-file-audio file-icon"></i>
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