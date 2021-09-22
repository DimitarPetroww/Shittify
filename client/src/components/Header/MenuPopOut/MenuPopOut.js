import { NavLink, Link, useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import "./MenuPopOut.css"
import { ReactComponent as Logout } from "../../../svg/logout.svg";
import { ReactComponent as ProfileLink } from "../../../svg/profile_link.svg";
import { logout as logoutUser } from "../../../services/user";
import { logout, clearSongs, showAlert } from "../../../actions/index"

const MenuPopOut = ({ click }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const logoutHandler = (e) => {
        e.preventDefault()
        logoutUser().then(() => {
            dispatch(logout())
            dispatch(clearSongs())
            history.push("/")
        })
        .catch(e=> {
            showAlert(e.message)
        })
    }
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
                    <Link to="#" onClick={logoutHandler}>
                        <span>Logout</span>
                        <Logout />
                    </Link>
                </li>
            </ul>
        </div>
    )
}
export default MenuPopOut