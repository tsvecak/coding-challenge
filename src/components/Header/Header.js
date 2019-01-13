import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../svgs/Logo'

const Header = () => (
    <header className="mwg-nav">
        <div>
            <Logo />
            <div>Moving Grocery Forward</div>
        </div>
        <ul>
            <li><NavLink activeClassName="active" exact to="/">Home</NavLink></li>
            <li><NavLink to="/sign-up">Sign Up</NavLink></li>
        </ul>    
    </header>
);

export default Header;