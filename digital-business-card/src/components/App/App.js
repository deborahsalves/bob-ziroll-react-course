import React from 'react';
import { Header } from '../Header/Header';
import { About } from '../About/About';
import { Interests } from '../Interests/Interests';
import { Footer } from '../Footer/Footer';
import './App.css';

export const App = () => {
    return (
        <div className="container">
            <Header />
            <main className="main">
                <About />
                <Interests />
            </main>
            <Footer />
        </div>
    )
}