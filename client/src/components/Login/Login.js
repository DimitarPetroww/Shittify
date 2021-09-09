import "./Login.css"

const Login = () => {
    return (
        <div className="login-container">
            <form id="form" className="login-form">
                <div class="login-form-control">
                    <label for="username">Email</label>
                    <input type="email" placeholder="example@gmail.com" />
                    <i className="fas fa-exclamation-circle"></i>
                    <small>Error message</small>
                </div>
                <div class="login-form-control">
                    <label for="username">Password</label>
                    <input type="password" placeholder="********" />
                    <i className="fas fa-exclamation-circle"></i>
                    <small>Error message</small>
                </div>
                <input type="submit" value="Login" className="btn" />
            </form>
        </div>
    )
}
export default Login