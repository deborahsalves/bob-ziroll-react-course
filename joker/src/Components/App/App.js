import React from 'react';
import { Joke } from '../Joke/Joke'
import { jokesData } from '../../api/jokesData';

export const App = () => {
    return(
        <main>
            <h1>App</h1>
            {jokesData.map(joke => {
                return <Joke setup={joke.setup} punchline={joke.punchline}/>
            })}
        </main>
    )
}

/*
EXTRA CREDIT:
Some jokes are only a punchline with no setup:

E.g.: "It’s hard to explain puns to kleptomaniacs because 
they always take things literally."

If you don't pass in a "question" prop, how might you make it only 
show the punchline?
*/
