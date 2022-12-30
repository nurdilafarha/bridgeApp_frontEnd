import "./Register.css";

const Register =() => {
    return(
        <div className="register">
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h3 className="registerLogo">BRIDGE APP</h3>
                    <span className="registerDesc">Selamat Datang di Bridge App</span>
                </div>
                <div className="registerRight">
                    <div className="registerBox">
                        <span className="registerTitle">Register</span>
                        <input placeholder="Username" className="registerInput"/>
                        <input placeholder="Email" className="registerInput"/>
                        <input placeholder="Password" className="registerInput"/>
                        <input placeholder="Password Again" className="registerInput"/>
                        <button className="registerButton">Sign up</button>
                        <button className="registerRegisterButton">Log In to Your Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register