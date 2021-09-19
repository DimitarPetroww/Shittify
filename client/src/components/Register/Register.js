import "./Register.css"
import * as userService from "../../services/user"
import REGEX from "../../utils/EmailRegex"

import { useState } from "react"
import { useDispatch } from "react-redux"
import { loader, signIn } from "../../actions"

const Register = ({ history }) => {
    const dispatch = useDispatch()
    const [fields, setFields] = useState({
        email: "",
        username: "",
        password: "",
        repeatPassword: ""
    })
    const [errors, setErrors] = useState({
        email: false,
        username: false,
        password: false,
        repeatPassword: false
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "email":
                setErrors(state => ({ ...state, [name]: !REGEX.test(value) }))
                break;
            case "repeatPassword":
                setErrors(state => ({ ...state, [name]: value !== fields.password }))
                break;
            default:
                setErrors(state => ({ ...state, [name]: value === "" }))
        }
        setFields(state => ({ ...state, [name]: value }))
    }


    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(loader())
        userService.register(fields)
            .then(data => {
                dispatch(signIn(data))
                dispatch(loader())
                history.push("/")
            })
            .catch(e => {
                dispatch(loader())
                console.log("message:", e.message);
            })
    }

    return (
        <div className="register-background">
            <section className="register-wrapper">
                <img className="register-img" src="https://images.unsplash.com/photo-1519066473994-a7506988851d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=371&q=80" />
                <div className="register-card">
                    <h2 className="register-title">Register info</h2>
                    <form className="register-form" onSubmit={submitHandler}>
                        <div className="register-group">
                            <input type="text" placeholder="Email" className={`register-input ${errors.email ? "register-input-error" : ""}`} name="email" value={fields.email} onChange={handleChange} />
                            {errors.email ? <small className="register-error">Email is incorrect format</small> : ""}

                        </div>
                        <div className="register-group">
                            <input type="text" placeholder="Username" className={`register-input ${errors.username ? "register-input-error" : ""}`} name="username" value={fields.username} onChange={handleChange} />
                            {errors.username ? <small className="register-error">Username is required</small> : ""}
                        </div>
                        <div className="register-group">
                            <input type="password" placeholder="Password" className={`register-input ${errors.password ? "register-input-error" : ""}`} name="password" value={fields.password} onChange={handleChange} />
                            {errors.password ? <small className="register-error">Password is required</small> : ""}
                        </div>
                        <div className="register-group">
                            <input type="password" placeholder="Repeat Password" className={`register-input ${errors.repeatPassword ? "register-input-error" : ""}`} name="repeatPassword" value={fields.repeatPassword} onChange={handleChange} />
                            {errors.repeatPassword ? <small className="register-error">Passwords must match</small> : ""}
                        </div>
                        <input type="submit" value="Register" className="register-btn" />
                    </form>
                </div>
            </section>
        </div>
    )
}
export default Register
