import React from "react";

export const Joke = (props) => {
    return(
        <article>
            {props.setup && <h2>{props.setup}</h2>}
            {props.punchline}
        </article>
    )
}