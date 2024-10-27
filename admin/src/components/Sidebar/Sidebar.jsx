import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar-options">
                <div className="sidebar-option">
                    <NavLink to='/add' className="icon">
                        <span className="material-symbols-outlined" style={{ fontSize: '36px' }}>
                            add_circle
                        </span>
                        <p>Add Items</p>
                    </NavLink>
                    <NavLink  to='/list'  className="icon">
                        <span className="material-symbols-outlined">
                            list
                        </span>
                        <p>List Items</p>
                    </NavLink>
                    <NavLink  to='/order'  className="icon">
                        <span className="material-symbols-outlined">
                            orders
                        </span>
                        <p>Orders</p>
                    </NavLink>

                </div>
            </div>
        </div>
    );
}

export default Sidebar;
