import "./Register.css"

const Register = () => {
    return (
        <div className="register-container">
            <form id="form" className="register-form">
                <div className="register-form-control">
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Username" />
                    <i className="fas fa-exclamation-circle"></i>
                    <small>Error message</small>
                </div>
                <div className="register-form-control">
                    <label htmlFor="username">Email</label>
                    <input type="email" placeholder="example@gmail.com" />
                    <i className="fas fa-exclamation-circle"></i>
                    <small>Error message</small>
                </div>
                <div className="register-form-control">
                    <label htmlFor="username">Password</label>
                    <input type="password" placeholder="********" />
                    <i className="fas fa-exclamation-circle"></i>
                    <small>Error message</small>
                </div>
                <div className="register-form-control">
                    <label htmlFor="username">Repeat Password</label>
                    <input type="password" placeholder="********" />
                    <i className="fas fa-exclamation-circle"></i>
                    <small>Error message</small>
                </div>
                <input type="submit" value="Register" className="btn" />
            </form>
        </div>
    )
}
export default Register