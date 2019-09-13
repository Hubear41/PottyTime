import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

const BathroomIndexItem = props => {
  const { bathroom, idx, updateFilter } = props;
  const { lat, lng, name, id } = bathroom;
  const [address, updateAddress] = useState(null);

  useEffect(() => {
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ location: { lat, lng } }, (results, status) => {
      if (status === "OK") {
        updateAddress(results[0].formatted_address);
      }
    });
  }, [bathroom]);

  const handleClick = e => {
    props.history.push(`/bathrooms/${id}`);
    updateFilter("center", { lat, lng });
  };

  const locationContent =
    address === null ? (
      <span>{`lat: ${lat} | lng: ${lng}`}</span>
    ) : (
      <span>{`address: ${address}`}</span>
    );

  return (
    <li
      className={`bathroom-list-item-${idx}`}
      key={"bathroom " + id}
      onClick={handleClick}
    >
      <section className="bathroom-info">
        <h2>{name.toLowerCase()}</h2>
        {locationContent}
      </section>

      <aside className="list-item-arrow">
        <i className="fas fa-chevron-right"></i>
      </aside>
    </li>
  );
};

export default withRouter(BathroomIndexItem);
