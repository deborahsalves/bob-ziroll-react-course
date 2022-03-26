import React from 'react';
import profilePic from '../../images/deborah-salves-perfil.jpeg';
import './Header.css';

export const Header = () => {
    return (
        <header className="header">
            <img className="profile-pic" src={profilePic} alt="Déborah Salves"/>
            <h1 className="business-name">Déborah Salves</h1>
            <p className="description">Front-end developer</p>
            <p className="website"><a className="website--link" href="https://deborahsalves.github.io/" target="_blank" title="Déborah Salves's professional website">deborahsalves.github.io</a></p>
            <div className="contact-buttons">
                <a className="profile-button email" href="mailto:salves.deborah@gmail.com"><i class="lni lni-envelope"></i> Email</a>
                <a className="profile-button linkedin" href="https://www.linkedin.com/in/deborahsalves/" target="_blank"><i class="lni lni-linkedin-original"></i> LinkedIn</a>
            </div>
        </header>
    )
}