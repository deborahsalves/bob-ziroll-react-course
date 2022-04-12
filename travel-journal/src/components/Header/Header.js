import React from "react";
import './Header.css';

export const Header = () => {
    return(
        <header className="main-header">
            <img src="/images/logo-fill.png" alt="Travel Journal logo" title="Travel Journal" />
            <h1 className="header-name">my travel journal.</h1>
        </header>
    )
}