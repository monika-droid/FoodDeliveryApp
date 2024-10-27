import React, { useContext, useState } from 'react'
import './Navbar.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext.jsx';
import { useNavigate } from 'react-router-dom';
const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("home")
    const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
    const navigate  = useNavigate();
    const logout = () =>{
        localStorage.removeItem("token")
        setToken("");
        navigate("/");
    }
    return (
        <div className='navbar'>
            <img className="logo" src={assets.logo} alt="logo" />
            <ul className='navbar-menu'>
                <li onClick={() => { setMenu("home") }} className={menu === "home" ? "active" : ""}>Home</li>
                <li onClick={() => { setMenu("menu") }} className={menu === "menu" ? "active" : ""}>Menu</li>
                <li onClick={() => { setMenu("contact") }} className={menu === "contact" ? "active" : ""}>Contact-us</li>
            </ul>
            <div className='navbar-right'>
                <span className="material-symbols-outlined">
                    shopping_cart_checkout
                </span>
                {!token ? <button onClick={() => { setShowLogin(true) }}>Sign In</button> :
                    <div className='navbarProfile'>
                        <span class="material-symbols-outlined">
                            account_circle
                        </span>
                        <ul className="navprofiledropdown">
                            <div className='navprofileitem'>
                            <li><span class="material-symbols-outlined">
                                shopping_bag
                            </span><p>Order</p></li>
                            </div>
                            <hr />
                            <div className='navprofileitem'>
                            <li onClick={logout}><span class="material-symbols-outlined">
                                logout
                            </span><p>Logout</p></li>
                            </div>                           
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar