import "./Register.css"
import * as authService from "../../services/auth"

const Register = () => {
    const submitHandler = (e) => {
        e.preventDefault()
        authService.register({email: "123", username: "asd", password: "asd", repeatPassword: "asd"})
        .then(data=> console.log(data))
        .catch(e => console.log(e.message))
    }

    return (
        <div className="register-background">
            <section className="register-wrapper">
                <img className="register-img" src="https://images.unsplash.com/photo-1519066473994-a7506988851d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=371&q=80" />
                <div className="register-card">
                    <h2 className="register-title">Register info</h2>
                    <form className="register-form" onSubmit={submitHandler}>
                        <div className="register-group">
                            <input type="text" placeholder="Email" className="register-input register-input-error" name="email" />
                            <small className="register-error">Email is required</small>
                        </div>
                        <div className="register-group">
                            <input type="text" placeholder="Name" className="register-input" name="username" />
                            <small className="register-error">Name is required</small>
                        </div>
                        <div className="register-group">
                            <input type="password" placeholder="Password" className="register-input" name="password" />
                            <small className="register-error">Password is required</small>
                        </div>
                        <div className="register-group">
                            <input type="password" placeholder="Repeat Password" className="register-input" name="repeatPassword" />
                            <small className="register-error">Repeat Password is required</small>
                        </div>
                        <input type="submit" value="Register" className="register-btn" />
                    </form>
                </div>
            </section>
        </div>
    )
}
export default Register
