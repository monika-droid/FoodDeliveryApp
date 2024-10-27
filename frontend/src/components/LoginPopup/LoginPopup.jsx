import { useContext, useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { Password } from '@mui/icons-material';
import axios from 'axios';
import { StoreContext } from '../../context/StoreContext.jsx';

const LoginPopup = ({ setShowLogin }) => {
    const { url, setToken } = useContext(StoreContext);
    console.log(url + "URL");
    
    const [currentState, setCurrentState] = useState("Signup");
    const [data, setUserData] = useState({
        name: "",
        email: "",
        password: "" // Make sure this matches the input name
    });

    const onChangeHandle = (e) => {
        const { name, value } = e.target; // Destructure name and value from the target
        setUserData(data => ({ ...data, [name]: value })); // Use the name to update the correct field
    };

    const onLogin = async (event) => {
        event.preventDefault();
        let newUrl = url;
        if (currentState === "Login") {
            newUrl += "/api/user/login";
        } else {
            newUrl += "/api/user/register";
        }

        const response = await axios.post(newUrl, data);
        console.log(response);
        if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token);
            setShowLogin(false);
        } else {
            alert(response.data.message);
        }
    };

    return (
        <div className="login-popup">
            <form onSubmit={onLogin} className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <span className="material-symbols-outlined" onClick={() => { setShowLogin(false); }}>close</span>
                </div>
                <div className="login-popup-input">
                    {currentState === "Login" ? null : (
                        <input
                            type="text"
                            name="name" // Use 'name' here to match state
                            id="fname"
                            onChange={onChangeHandle}
                            value={data.name}
                            placeholder='Your Name'
                            required
                        />
                    )}
                    <input
                        type="email"
                        name="email"
                        onChange={onChangeHandle}
                        value={data.email}
                        id="email"
                        placeholder='Email'
                        required
                    />
                    <input
                        type="password"
                        name="password" // Make sure this matches the state key
                        onChange={onChangeHandle}
                        value={data.password}
                        id="password"
                        placeholder='Password'
                        required
                    />
                </div>
                <button type='submit'>{currentState === "Signup" ? "Create Account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>I agree to the terms and conditions</p>
                </div>
                {currentState === "Login" ?
                    <p>Create a new account? <span onClick={() => setCurrentState("Signup")}>Click here</span></p>
                    : <p>Already have an account? <span onClick={() => setCurrentState("Login")}>Click here</span></p>
                }
            </form>
        </div>
    );
};

export default LoginPopup;
