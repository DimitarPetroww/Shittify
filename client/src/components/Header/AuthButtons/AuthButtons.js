import { NavLink } from "react-router-dom"

import "./AuthButtons.css"

const AuthButtons = () => {
    return (
        <section className="auth">
            <div className="auth-signup">
                <NavLink activeClassName="active-signup" to="/auth/sign-up">
                    Register
                </NavLink>
            </div>
            <div className="auth-login">
                <NavLink activeClassName="active-login" to="/auth/login">
                    Login
                </NavLink>
            </div>
        </section>
    )
}
export default AuthButtons