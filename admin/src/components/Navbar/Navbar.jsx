import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={logo} alt="logo" />
            <span className="material-symbols-outlined" style={{fontSize: '48px'}}>person</span>    
        </div>
    )
}
export default Navbar