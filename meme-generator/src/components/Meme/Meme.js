import React, {useState} from 'react';
import './meme.css';
import { memeData } from '../../apis/meme-data';

export const Meme = () => {
    const memeArray = memeData.data.memes;
    const [currentMeme, setCurrentMeme] = useState(memeArray[Math.floor(Math.random() * memeArray.length)]);

    const handleClick = () => {
        const rand = Math.floor(Math.random() * memeArray.length);
        setCurrentMeme(memeArray[rand]);
    }
    return(
        <main>
            <div className='meme-form'>
                <input 
                    className='text-input' 
                    name="upper-text" 
                    id="upper-text"
                    type="text" 
                    placeholder="Text on top">
                </input>
                <input 
                    className='text-input' 
                    name="lower-text" 
                    id="lower-text" 
                    type="text" 
                    placeholder="Text on bottom">
                </input>
                <button 
                    className='form-button'
                    onClick={handleClick}>
                        Get a new meme image 🖼
                </button>
                <div className='image-div'>
                    <img
                        className='meme-image'
                        title={currentMeme.name}
                        alt={currentMeme.name}
                        src={currentMeme.url}
                    />
                </div>
            </div>
        </main>
    )
}
