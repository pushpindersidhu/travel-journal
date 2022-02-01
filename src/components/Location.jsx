import React from "react";
import locationImage from "../images/location.png";

function Location(props) {
  const {
    title,
    location,
    googleMapsUrl,
    startDate,
    endDate,
    description,
    imageUrl,
  } = props.item;

  return (
    <div className="location">
      <img src={`../images/${imageUrl}`} className="location-image" alt="" />
      <div className="location-details">
        <div>
          <img src={locationImage} alt="" className="location-icon" />
          <span className="location-country">{location}</span>
          <a href={googleMapsUrl} className="location-link">View on Google Maps</a>
        </div>
        <h1 className="location-title">{title}</h1>
        <div className="location-date">
          {startDate} - {endDate}
        </div>
        <p className="location-description">{description}</p>
      </div>
    </div>
  );
}

export default Location;
