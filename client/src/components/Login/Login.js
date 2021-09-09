import "./Login.css"

const Login = () => {
    return (
        <div className="login-background">
            <section className="login-wrapper">
                <img className="login-img" src="https://images.unsplash.com/photo-1504898770365-14faca6a7320?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1902&q=80" />
                <div className="login-card">
                    <h2 className="login-title">Login info</h2>
                    <form className="login-form">
                        <input type="text" placeholder="Email" className="login-input" />
                        <input type="password" placeholder="Password" className="login-input" />
                        <input type="submit" value="Login" className="login-btn" />
                    </form>
                </div>
            </section>
        </div>
    )
}
export default Login