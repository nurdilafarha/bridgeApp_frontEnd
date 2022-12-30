import "./Login.css";

const Login =() => {
    return(
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">BRIDGE APP</h3>
                    <span className="loginDesc">Selamat Datang di Bridge App</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <span className="loginTitle">Login</span>
                        <input placeholder="Email" className="loginInput"/>
                        <input placeholder="Password" className="loginInput"/>
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password</span>
                        <button className="loginRegisterButton">Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login