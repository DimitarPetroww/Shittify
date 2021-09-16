import { useState } from "react"
import { NavLink } from "react-router-dom"
import { ReactComponent as Pen } from "../../svg/pen.svg"
import { ReactComponent as Edit } from "../../svg/edit.svg"
import { ReactComponent as ProfileIcon } from "../../svg/profile.svg"
import EditModal from "./EditModal/EditModal"
import "./Profile.css"

const Profile = () => {
    const [isModal, setIsModal] = useState(false)

    const switchModal = () => {
        setIsModal(!isModal)
    }

    return (
        <>
            <section className="profile-wrapper">
                <div className="profile-container">
                    <article className="profile-picture-container">
                        <label className="no-picture" htmlFor="picture">
                            <ProfileIcon />
                            <div className="choose-img">
                                <Pen />
                                <span>Choose an image</span>
                            </div>
                        </label>
                        {/* <label className="profile-picture" htmlFor="picture">
                            <img className="profile-icon" src="https://images.unsplash.com/photo-1511216113906-8f57bb83e776?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" />
                            <div className="choose-img" style={{ "--image": "url('https://images.unsplash.com/photo-1511216113906-8f57bb83e776?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80')" }}>
                                <Pen />
                                <span>Choose an image</span>
                            </div>
                        </label> */}
                        <input type="file" id="picture" className="picture" />
                    </article>
                    <article className="profile-data">
                        <h4 className="profile-heading">Profile</h4>
                        <div>
                            <h1 className="profile-name">Dimitar.Petroww</h1>
                            <span className="edit-btn" onClick={switchModal}><Edit /></span>
                        </div>
                        <div>
                            <NavLink className="profile-playlists-count" to="/library/my-playlists">9 Playlists</NavLink>
                            <NavLink className="profile-songs-count" to="/library/my-songs">9 Songs</NavLink>
                        </div>
                    </article>
                </div>
            </section>
            {isModal ? <EditModal close={() => { setIsModal(false) }} /> : ""}
        </>
    )
}

export default Profile