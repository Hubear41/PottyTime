import React, { useState, useEffect } from "react";

const BathroomIndexItem = props => {
  const { bathroom, idx } = props;
  const { lat, lng, name, id } = bathroom;
  const [address, updateAddress] = useState(null);
  
  useEffect(() => {
    const geocoder = new google.maps.Geocoder;

    geocoder.geocode({ location: { lat, lng } }, (results, status) => {
      if ( status === "OK" ) {
        updateAddress(results[0].formatted_address);
      } 
    });
  }, [bathroom]);
  
  const locationContent = address === null 
    ? <span>{`lat: ${lat} | lng: ${lng}`}</span>
    : <span>{`address: ${address}`}</span>;

  return (
    <li className={`bathroom-list-item-${idx}`} key={"bathroom " + id}>
      <h2>{name.toLowerCase()}</h2>
      {locationContent}
    </li>
  );
};

export default BathroomIndexItem;
