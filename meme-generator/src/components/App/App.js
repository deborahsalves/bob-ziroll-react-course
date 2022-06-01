import React from "react";
import './App.css';
import { Header } from "../Header/Header";
import { Meme } from "../Meme/Meme";

export const App = () => {
    return(
        <div className="container">
            <Header />
            <Meme />
        </div>
    )
}