import "./ProfileMenu.css"
import { ReactComponent as User} from "../../../svg/user.svg"
import { ReactComponent as Arrow} from "../../../svg/arrow.svg"

const ProfileMenu = ({ click, isClicked, username }) => {

    return (
        <div className="profile-menu" onClick={click}>
            <figure className="profile-menu-icon">
                <User />
                {/* <img src="https://images.unsplash.com/photo-1511216113906-8f57bb83e776?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"/> */}
            </figure>
            <p className="profile-menu-name">{username}</p>
            <div className={isClicked ? "profile-menu-arrow-downside" : "profile-menu-arrow"}>
                <Arrow />
            </div>
        </div>
    )
}
export default ProfileMenu