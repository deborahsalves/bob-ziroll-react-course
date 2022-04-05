import React from 'react';
import { Joke } from '../Joke/Joke'

export const App = () => {
    return(
        <main>
            <h1>App</h1>
            <Joke 
                setup="" 
                punchline="It's hard to explain puns to kleptomaniacs because 
they always take things literally."
            />
            <Joke 
                setup="I got my daughter a fridge for her birthday." 
                punchline="I can't wait to see her face light up when she opens it."
            />
            <Joke 
                setup="How did the hacker escape the police?" 
                punchline="He just ransomware!"
            />
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
