import React from "react";
import './App.css';
import { Header } from '../Header/Header';
import { data } from '../api/data';
import { Archive } from '../Archive/Archive';

export const App = () => {
    return(
        <div className="container">
            <Header />
            <Archive posts={data}/>
        </div>
    )
}