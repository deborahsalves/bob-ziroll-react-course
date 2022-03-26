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
                <button className="profile-button email"><i class="lni lni-envelope"></i> Email</button>
                <button className="profile-button linkedin"><i class="lni lni-linkedin-original"></i> LinkedIn</button>
            </div>
        </header>
    )
}