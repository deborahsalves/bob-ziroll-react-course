import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Hero } from "../Hero/Hero";
import './App.css';
import {Card} from "../Card/Card";

export const App = () => {
    return(
        <div className="container">
            <header>
                <Navbar />
            </header>
            <main>
                <Hero />
                <Card
                    cardBadge="Sold out"
                    ratingText="5.0"
                    ratingCount={6}
                    ratingCountry="USA"
                    experienceTitle="Life lessons with Katie Zaferes"
                    experiencePrice={136}
                />
            </main>
        </div>
    )
}