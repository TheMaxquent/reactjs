import React from 'react';
import "../css/header.css"
import aws from "../img/LOGO FINAL COULEUR .png"

const Header = () => {
    return (
        <header className="header">
            <img className="imglogo" src={aws} alt="logo"/>
            <nav className="navbar">
                <ul className="listnav">
                    <li>Accueil</li>
                    <li>Projets</li>
                    <li>A propos</li>
                    <li>Contact</li>

                </ul>
            </nav>
        </header>
    );
};

export default Header;