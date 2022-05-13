import React from "react";
import './Header.css';
import headerLogo from '../../images/logo-meme-generator.png';

export const Header = () => {
    return (
        <header>
            <div className="main-header">
                    <img className="site-logo" src={headerLogo} alt="Meme Generator logo" title="Meme Generator logo"/>
                    <h1>Meme Generator</h1>
                    <span className="project-name">React Course - Project 3</span>
            </div>
        </header>
    )
}