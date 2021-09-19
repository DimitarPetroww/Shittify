import { useState } from "react"
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { ReactComponent as Pen } from "../../svg/pen.svg"
import { ReactComponent as Edit } from "../../svg/edit.svg"
import { ReactComponent as ProfileIcon } from "../../svg/profile.svg"
import EditModal from "./EditModal/EditModal"
import "./Profile.css"

import * as userService from "../../services/user"
import { updateProfilePic } from "../../actions"

const Profile = () => {
    const user = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const [isModal, setIsModal] = useState(false)

    const uploadPicture = (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append("file", file)

        userService.upload(formData)
            .then(data => {
                dispatch(updateProfilePic(data.photoUrl))
            })
            .catch(e => console.log(e.message))
    }

    const switchModal = () => {
        setIsModal(!isModal)
    }

    return (
        <>
            <section className="profile-wrapper">
                <div className="profile-container">
                    <article className="profile-picture-container">
                        {user.photoUrl !== "" ?
                            <label className="profile-picture" htmlFor="picture">
                                <img className="profile-icon" src={user.photoUrl} />
                                <div className="choose-img" style={{ "--image": `url(${user.photoUrl})` }}>
                                    <Pen />
                                    <span>Choose an image</span>
                                </div>
                            </label> : <label className="no-picture" htmlFor="picture">
                                <ProfileIcon />
                                <div className="choose-img">
                                    <Pen />
                                    <span>Choose an image</span>
                                </div>
                            </label>}
                        <input type="file" id="picture" className="picture" onChange={uploadPicture} accept="image/*" />
                    </article>
                    <article className="profile-data">
                        <h4 className="profile-heading">Profile</h4>
                        <div>
                            <h1 className="profile-name">{user.username}</h1>
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