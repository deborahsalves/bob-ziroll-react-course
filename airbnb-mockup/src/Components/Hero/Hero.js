import React from "react";
import './Hero.css';
import photoGrid from '../../images/photo-grid.png';
import './Hero.css';

export const Hero = () => {
    return(
        <section className="main-hero">
            <img className="hero-image" src={photoGrid} alt="Join unique interactive activities"/>
            <h1 className="main-heading">Online Experiences</h1>
            <p className="deck">
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    )
}