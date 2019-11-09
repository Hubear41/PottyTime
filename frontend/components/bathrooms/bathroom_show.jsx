import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BathroomShow = props => {
  const { bathroom, requestBathroom, updateFilter } = props;
  const bathroomId = props.match.params.id;
  const [address, updateAddress] = useState(null)


  const center = bathroom ? { lat: bathroom.lat, lng: bathroom.lng } : {};

  useEffect(() => {
    requestBathroom(bathroomId);
  }, [])

  useEffect(() => {
    if (center.lat) {
      updateFilter('center', center);
    }
  }, [center.lat, center.lng])

  useEffect(() => {
    if (!bathroom || bathroom.id !== bathroomId) {
      requestBathroom(bathroomId);
    }
  }, [bathroomId]);

  useEffect(() => {
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ location: center }, (results, status) => {
      if (status === "OK") {
        updateAddress(results[0].formatted_address);
      }
    });
  }, [bathroom])

  return (
    <div className="bathroom-show-container">
      <div className="bathroom-information-container">
        <h2>{bathroom ? bathroom.name.toLowerCase() : null}</h2>
        <h1>{bathroom ? address : null}</h1>
        <Link to="/bathrooms" className='back-button'>Back to Results</Link>
      </div>
    </div>
  );
};

export default BathroomShow;
