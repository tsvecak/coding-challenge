import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header className="mwg-nav">
        <ul>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/sign-up">Sign Up</NavLink></li>
        </ul>    
    </header>
);

export default Header;