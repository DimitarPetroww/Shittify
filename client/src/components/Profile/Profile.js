import { useState } from "react"
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { ReactComponent as Edit } from "../../svg/edit.svg"
import { showAlert } from "../../actions"
import EditModal from "./EditModal/EditModal"
import "./Profile.css"

import * as userService from "../../services/user"
import { loader, updateProfilePic } from "../../actions"
import ProfilePicture from "./ProfilePicture/ProfilePicture"

const Profile = () => {
    const user = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const [isModal, setIsModal] = useState(false)

    const uploadPicture = (e) => {
        dispatch(loader())
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append("file", file)
        
        userService.upload(formData)
            .then(data => {
                dispatch(loader())
                dispatch(updateProfilePic(data.photoUrl))
            })
            .catch(e => {
                dispatch(loader())
                dispatch(showAlert(e.message))
            })
    }

    const switchModal = () => {
        setIsModal(!isModal)
    }

    return (
        <>
            <section className="profile-wrapper">
                <div className="profile-container">
                    <ProfilePicture uploadPicture={uploadPicture} photo={user.photoUrl}/>
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
            {isModal ? <EditModal close={() => { setIsModal(false) }} username={user.username}/> : ""}
        </>
    )
}

export default Profile