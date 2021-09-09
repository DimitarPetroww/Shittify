import "./Link.css"
import { NavLink } from "react-router-dom"

const Link = ({ children, url }) => {
    return (
        <li className="navigation-link">
            <NavLink to={url}>{children}</NavLink>
        </li>
    )
}
export default Link