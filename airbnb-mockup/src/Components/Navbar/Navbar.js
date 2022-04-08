import React from "react";
import './Navbar.css'
import airbnbLogo from '../../images/airbnb-logo.png'

export const Navbar = () => {
    return(
        <nav>
            <img className="main-logo" src={airbnbLogo} alt="Airbnb Logo"/>
        </nav>
    )
}