import "./HomeButton.css"
import { ReactComponent as Logo } from "../../../svg/logo.svg"

import { NavLink } from "react-router-dom"

const HomeButton = () => {
    return (
        <NavLink to="/"  exact className="home-button">
            <Logo className="home-button-logo"/>
            <span className="home-button-text">Shittify</span>
        </NavLink >
    )
}
export default HomeButton