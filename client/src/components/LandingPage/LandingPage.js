import { NavLink } from "react-router-dom"
import "./LandingPage.css"

const LandingPage = () => {
    return (
        <section className="landing-container">
            <h1 className="head">Welcome to <span>Shittify</span></h1>
            <div className="btns">
                <NavLink to="/auth/sign-up" className="btn-register">Register</NavLink>
                <NavLink to="/auth/login" className="btn-login">Login</NavLink>
            </div>
        </section>
    )
}
export default LandingPage