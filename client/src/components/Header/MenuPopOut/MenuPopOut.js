import { NavLink, Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import "./MenuPopOut.css"
import { ReactComponent as Logout } from "../../../svg/logout.svg";
import { ReactComponent as ProfileLink } from "../../../svg/profile_link.svg";

import { logout } from "../../../actions/index"

const MenuPopOut = ({ click }) => {
    const dispatch = useDispatch()

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
                    <Link to="#" onClick={(e) => {
                        e.preventDefault()
                        dispatch(logout())
                    }}>
                        <span>Logout</span>
                        <Logout />
                    </Link>
                </li>
            </ul>
        </div>
    )
}
export default MenuPopOut