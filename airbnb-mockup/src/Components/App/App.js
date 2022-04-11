import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Hero } from "../Hero/Hero";
import './App.css';
import {Card} from "../Card/Card";
import { data } from '../../api/data';

export const App = () => {
    return(
        <div className="container">
            <header>
                <Navbar />
            </header>
            <main>
                <Hero />
                <section className="experiences">
                    {data.map(card => {
                        return <Card
                                key={card.id}
                                img={card.coverImg}
                                cardBadge={card.openSpots !== 0 ? card.location : "Sold out"}
                                ratingText={card.stats.rating}
                                ratingCount={card.stats.reviewCount}
                                ratingCountry={card.location}
                                experienceTitle={card.title}
                                experiencePrice={card.price}
                            />
                    })}
                </section>
            </main>
        </div>
    )
}