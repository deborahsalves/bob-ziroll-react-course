import React from "react";
import './Card.css';
import katieZaferes from '../../images/katie-zaferes.png'
import star from '../../images/star.png'

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export const Card = (props) => {
    return (
        <article className="experience-card">
            <div className="experience-image" 
            style={{backgroundImage: `url(${katieZaferes})`}} 
            alt="katieZaferes">
                <p className="card-badge">{props.cardBadge}</p>
            </div>
            <div className="experience-info">
                <div className="experience-rating">
                    <img className="rating-star" src={star} alt="Rating"/>
                    <span className="rating-text">{props.ratingText}</span>
                    <span className="rating-count">({props.ratingCount}) • </span>
                    <span className="rating-country">{props.ratingCountry}</span>
                </div>
                <p className="experience-excerpt">
                    {props.experienceTitle}
                </p>
                <p className="experience-price">
                    <span className="price-highlight">From ${props.experiencePrice}</span> / person
                </p>
            </div>
        </article>
    )
}