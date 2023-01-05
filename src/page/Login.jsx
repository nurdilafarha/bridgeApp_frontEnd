import "./Login.css";
import { useContext, useRef } from "react";
import { loginCall } from "../apiCalls";
import { AuthContext } from "./../context/AuthContext";
import CircularProgress from '@mui/material/CircularProgress';

const Login =() => {

    const email = useRef();
    const password = useRef();
    const { user, isFetching, error, dispatch } = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault();
        loginCall({email: email.current.value, password: password.current.value}, dispatch);
    };

    console.log(user)
    return(
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">BRIDGE APP</h3>
                    <span className="loginDesc">Selamat Datang di Bridge App</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <span className="loginTitle">Login</span>
                        <input 
                        placeholder="Email" 
                        type="email" 
                        required
                        className="loginInput"
                        ref={email}
                        />
                        <input 
                        placeholder="Password" 
                        type="password" 
                        required
                        minLength = "5"
                        className="loginInput"
                        ref={password}
                        />
                        <button className="loginButton" type="submit">
                            {isFetching ? <CircularProgress /> : "Log In"}
                        </button>
                        <span className="loginForgot">Forgot Password</span>
                        <button className="loginRegisterButton">Create a New Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login