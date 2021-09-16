import { NavLink } from "react-router-dom"
import "./MenuPopOut.css"
import { ReactComponent as Logout } from "../../../svg/logout.svg";
import { ReactComponent as ProfileLink } from "../../../svg/profile_link.svg";

const MenuPopOut = ({ click }) => {
    return (
        <div className="profile-menu-pop" onClick={click}>
            <ul>
                <li className="profile-menu-pop-link">
                    <NavLink to="/profile">
                        <span>Profile</span>
                        <ProfileLink />
                    </NavLink>
                </li>
                <li className="profile-menu-pop-link">
                    <a href="#">
                        <span>Logout</span>
                        <Logout />
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default MenuPopOut