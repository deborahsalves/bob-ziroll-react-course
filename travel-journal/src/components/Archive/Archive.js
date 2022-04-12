import React from "react";
import './Archive.css';
import { SinglePost } from "../SinglePost/SinglePost";

export const Archive = (props) => {
    return(
        <section className="posts-archive">
            {props.posts.map(post => {
                console.log('a post');
                return (
                    <SinglePost 
                        key={Date.now()}
                        {...post}
                    />
                )
            })}
        </section>
    )
}