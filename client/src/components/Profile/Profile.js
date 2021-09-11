import { useState } from "react"
import { NavLink } from "react-router-dom"
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
                            <svg xmlns="http://www.w3.org/2000/svg" className="profile-icon" width="50" height="50" viewBox="0 0 24 24" fill="#7B7B7B"><path d="M20.822 18.096c-3.439-.794-6.641-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.732-13.678-5.082 0-8.465 4.949-3.732 13.678 1.598 2.945-1.725 3.641-5.09 4.418-2.979.688-3.178 2.143-3.178 4.663l.005 1.241h1.995c0-3.134-.125-3.55 1.838-4.003 2.851-.657 5.543-1.278 6.525-3.456.359-.795.592-2.103-.338-3.815-2.058-3.799-2.578-7.089-1.423-9.026 1.354-2.275 5.426-2.264 6.767-.034 1.15 1.911.639 5.219-1.403 9.076-.91 1.719-.671 3.023-.31 3.814.99 2.167 3.707 2.794 6.584 3.458 1.879.436 1.76.882 1.76 3.986h1.995l.005-1.241c0-2.52-.199-3.975-3.178-4.663z" /></svg>
                            <div className="choose-img">
                                <svg role="img" height="50" width="50" aria-hidden="true" viewBox="0 0 48 48" fill="white"><path d="M33.402 3.006L8.852 31.751l-2.337 12.61 12.09-4.281 24.552-28.746-9.755-8.328zM9.112 41.32l1.543-8.327 6.44 5.5-7.983 2.827zm9.418-4.231l-6.712-5.732L33.625 5.825l6.711 5.731L18.53 37.089z"></path></svg>
                                <span>Choose an image</span>
                            </div>
                        </label>
                        {/* <label className="profile-picture" htmlFor="picture">
                            <img className="profile-icon" src="https://images.unsplash.com/photo-1511216113906-8f57bb83e776?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" />
                            <div className="choose-img" style={{ "--image": "url('https://images.unsplash.com/photo-1511216113906-8f57bb83e776?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80')" }}>
                                <svg role="img" height="50" width="50" aria-hidden="true" viewBox="0 0 48 48" fill="white"><path d="M33.402 3.006L8.852 31.751l-2.337 12.61 12.09-4.281 24.552-28.746-9.755-8.328zM9.112 41.32l1.543-8.327 6.44 5.5-7.983 2.827zm9.418-4.231l-6.712-5.732L33.625 5.825l6.711 5.731L18.53 37.089z"></path></svg>
                                <span>Choose an image</span>
                            </div>
                        </label> */}
                        <input type="file" id="picture" className="picture" />
                    </article>
                    <article className="profile-data">
                        <h4 className="profile-heading">Profile</h4>
                        <div>
                            <h1 className="profile-name">Dimitar.Petroww</h1>
                            <span className="edit-btn" onClick={switchModal}><i className="fas fa-pencil-alt"></i></span>
                        </div>
                        <div>
                            <NavLink className="profile-playlists-count" to="/library/my-playlists">9 Playlists</NavLink>
                            <NavLink className="profile-songs-count" to="/library/my-songs">9 Songs</NavLink>
                        </div>
                    </article>
                </div>
            </section>
            <EditModal isOpen={isModal} close={() => { setIsModal(false) }} />
        </>
    )
}

export default Profile