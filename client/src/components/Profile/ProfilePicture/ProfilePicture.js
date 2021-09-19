import "./ProfilePicture.css"
import { ReactComponent as ProfileIcon } from "../../../svg/profile.svg"
import { ReactComponent as Pen } from "../../../svg/pen.svg"

function ProfilePicture({ photo, uploadPicture }) {
    return (
        <article className="profile-picture-container">
            {photo !== "" ?
                <label className="profile-picture" htmlFor="picture">
                    <img className="profile-icon" src={photo} />
                    <div className="choose-img" style={{ "--image": `url(${photo})` }}>
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
    )
}

export default ProfilePicture
