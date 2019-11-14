import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BathroomShow = props => {
  const { bathroom, requestBathroom, updateFilter } = props;
  const bathroomId = props.match.params.id;

  const center = bathroom ? { lat: bathroom.lat, lng: bathroom.lng } : {};

  const address = bathroom ? bathroom.address.split(" ").join("+") : null;

  useEffect(() => {
    requestBathroom(bathroomId);
    // .then(action => {
    //   const request = {
    //     query: action.bathroom.address,
    //     fields: ["icon", "place_id", "open_now", "rating", "user_rating_total"]
    //   };

    //   const service = new google.maps.places.PlacesService("#places-results");

    //   service.findPlaceFromQuery(request, (res, status) => {
    //     if (status === google.maps.place.PlaceServiceState.OK) {
    //       console.log(res);
    //       debugger;
    //     }
    //   });
    // });
  }, []);

  useEffect(() => {
    if (center.lat) {
      updateFilter("center", center);
    }
  }, [center.lat, center.lng]);

  useEffect(() => {
    if (!bathroom || bathroom.id !== bathroomId) {
      requestBathroom(bathroomId);
    }
  }, [bathroomId]);

  return (
    <div className="bathroom-show-container">
      <div className="bathroom-information-container">
        <h2>{bathroom ? bathroom.name.toLowerCase() : null}</h2>
        <h1>{bathroom ? bathroom.address : null}</h1>
        {bathroom ? (
          <a
            className="direction-btn"
            href={`https://www.google.com/maps/search/?api=1&query=${address}`}
          >
            Directions
          </a>
        ) : null}
        <p id="places-results"></p>
        <Link to="/bathrooms" className="back-button">
          Back to Results
        </Link>
      </div>
    </div>
  );
};

export default BathroomShow;
