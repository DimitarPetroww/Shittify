import "./ProfileMenu.css"
import { ReactComponent as User } from "../../../svg/user.svg"
import { ReactComponent as Arrow } from "../../../svg/arrow.svg"

const ProfileMenu = ({ click, isClicked, username, photo }) => {
    return (
        <div className="profile-menu" onClick={click}>
            <figure className="profile-menu-icon">
                {photo !== "" ? <img src={photo} alt="" /> : <User />}
            </figure>
            <p className="profile-menu-name">{username}</p>
            <div className={isClicked ? "profile-menu-arrow-downside" : "profile-menu-arrow"}>
                <Arrow />
            </div>
        </div>
    )
}
export default ProfileMenu