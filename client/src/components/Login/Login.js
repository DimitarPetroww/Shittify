import { useState } from "react"
import { useDispatch } from "react-redux"
import { signIn } from "../../actions"
import "./Login.css"
import REGEX from "../shared/EmailRegex"

const Login = ({ history }) => {
    const dispatch = useDispatch()
    const [fields, setFields] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        email: false,
        password: false,
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") {
            setErrors(state => ({ ...state, [name]: !REGEX.test(value) }))
        } else {
            setErrors(state => ({ ...state, [name]: value === "" }))
        }
        setFields(state => ({ ...state, [name]: value }))
    }

    const submitHandler = (e) => {
        e.preventDefault()
        // dispatch(login())
        // history.push("/")
    }


    return (
        <div className="login-background">
            <section className="login-wrapper">
                <img className="login-img" src="https://images.unsplash.com/photo-1504898770365-14faca6a7320?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1902&q=80" />
                <div className="login-card">
                    <h2 className="login-title">Login info</h2>
                    <form className="login-form" onSubmit={submitHandler}>
                        <div className="login-group">
                            <input type="text" placeholder="Email" className={`login-input ${errors.email ? "login-input-error" : ""}`} value={fields.email} onChange={handleChange} name="email"/>
                            {errors.email ? <small className="login-error">Email is in incorrect format</small> : ""}
                        </div>
                        <div className="login-group">
                            <input type="password" placeholder="Password" className={`login-input ${errors.email ? "login-input-error" : ""}`} value={fields.password} onChange={handleChange} name="password"/>
                            {errors.password ? <small className="login-error">Password is required</small> : ""}
                        </div>
                        <input type="submit" value="Login" className="login-btn" />
                    </form>
                </div>
            </section>
        </div>
    )
}
export default Login