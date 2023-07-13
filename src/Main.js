import React from "react";
import location from "./images/location.png";

export default function Main(props) {
  return (
    <>
      <div className="main">
        <div className="main-img-cont">
          <img src={props.imageUrl} />
        </div>
        <div className="main-details-cont">
          <span className="location">
            <img src={location} />
            {props.location}
            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </span>
          <span className="place">{props.title}</span>
          <span className="date">
            {props.startDate} - {props.endDate}
          </span>
          <p className="description">{props.description}</p>
        </div>
      </div>
      <div className="line"></div>
    </>
  );
}
