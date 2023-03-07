import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className="nav-bar">
                <NavLink to={'/'} className="navlink">
                    Home
                </NavLink>
                <NavLink to={'/contact'} className="navlink">
                    Contact
                </NavLink>
                <NavLink to={'/blogs'} className="navlink">
                    Blogs
                </NavLink>
            </nav>
        </div>
    );
};

export default Navbar;
