import React from 'react';
import Logo from '../../../assets/logo.png';
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <img src={Logo} alt="Planny" className="header-logo"/>
                <input type="text"
                       placeholder="Search..."
                       className="header-input"
                />
                <p className="header-username">test</p>
            </div>

        </header>
    );
};

export default Header;