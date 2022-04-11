import React from "react";
import './Card.css';

export const Card = (props) => {
    let badgeText;
    if(props.cardBadge === "Sold out"){
        badgeText = "Sold out";
    } else if (props.cardBadge === "Online") {
        badgeText = "Online";
    }
    return (
        <article className="experience-card">
            <div className="experience-image" 
            style={{backgroundImage: `url(../images/${props.img})`}} 
            alt={props.experienceTitle}>
                {badgeText && <p className="card-badge">{props.cardBadge}</p>}
            </div>
            <div className="experience-info">
                <div className="experience-rating">
                    <img className="rating-star" src="../images/star.png" alt="Rating"/>
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