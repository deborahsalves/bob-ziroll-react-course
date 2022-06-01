import React from 'react';
import './meme.css';

export const Meme = () => {
    return(
        <main>
            <form className='meme-form'>
                <input className='text-input' name="upper-text" id="upper-text"type="text" placeholder="Text on top"></input>
                <input className='text-input' name="lower-text" id="lower-text" type="text" placeholder="Text on bottom"></input>
                <button className='form-button'>Get a new meme image 🖼</button>
            </form>
        </main>
    )
}
