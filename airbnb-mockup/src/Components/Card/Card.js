import React from "react";
import './Card.css';

export const Card = (props) => {
    let badgeText;
    if(props.openSports === 0){
        badgeText = "Sold out";
    } else if (props.location === "Online") {
        badgeText = "Online";
    }
    return (
        <article className="experience-card">
            <div className="experience-image" 
            style={{backgroundImage: `url(../images/${props.coverImg})`}} 
            alt={props.experienceTitle}>
                {badgeText && <p className="card-badge">{badgeText}</p>}
            </div>
            <div className="experience-info">
                <div className="experience-rating">
                    <img className="rating-star" src="../images/star.png" alt="Rating"/>
                    <span className="rating-text"> {props.stats.rating}</span>
                    <span className="rating-count"> ({props.stats.reviewCount}) • </span>
                    <span className="rating-country">{props.location}</span>
                </div>
                <p className="experience-excerpt">
                    {props.title}
                </p>
                <p className="experience-price">
                    <span className="price-highlight">From ${props.price}</span> / person
                </p>
            </div>
        </article>
    )
}