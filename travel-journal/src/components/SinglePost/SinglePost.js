import React from "react";
import './SinglePost.css';

export const SinglePost = (props) => {
    return(
        <article className="journal-entry">
            <img className="entry-thumb" src={props.imageUrl} alt="props.title"/>
            <div className="entry-data">
                <div className="entry-location">
                    <img className="location-pin" alt="Location" src="/images/pin-fill.png" />
                    {props.location}
                    {props.googleMapsUrl && <span className="location-map">
                            <a href={props.googleMapsUrl} alt={`View ${props.title} on Google Maps`}>
                                View on Google Maps
                            </a>
                        </span>}
                </div>
                <h2 className="entry-title">{props.title}</h2>
                {props.startDate && <ul className="entry-dates">
                    <li key={props.startDate}>
                        {props.startDate}
                    </li>
                    {props.endDate && <li key={props.endDate}>
                        &nbsp;– {props.endDate}
                    </li>}
                </ul>}
                <p>
                    {props.description}
                </p>
            </div>
        </article>
    )
}