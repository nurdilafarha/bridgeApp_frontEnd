import "./Register.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register =() => {

    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCustomValidity("Password tidak sama");
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            };
            try{
                await axios.post("/auth/register", user);
                navigate("/login");
            } catch(err){
                console.log(err)
            }

        }
    };

    return(
        <div className="register">
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h3 className="registerLogo">BRIDGE APP</h3>
                    <span className="registerDesc">Selamat Datang di Bridge App</span>
                </div>
                <div className="registerRight">
                    <form className="registerBox" onSubmit={handleClick}>
                        <span className="registerTitle">Register</span>
                        <input 
                        placeholder="Username" 
                        required 
                        ref={username} 
                        className="registerInput"
                        />
                        <input 
                        placeholder="Email" 
                        required
                        ref={email} 
                        className="registerInput"
                        type="email"
                        />
                        <input 
                        placeholder="Password" 
                        required
                        ref={password} 
                        className="registerInput"
                        type="password"
                        minLength="5"
                        />
                        <input 
                        placeholder="Password Again" 
                        required
                        ref={passwordAgain} gt
                        className="registerInput"
                        type="password"
                        />
                        <button className="registerButton" type="submit">Sign up</button>
                        <button className="registerRegisterButton" >Log In to Your Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register