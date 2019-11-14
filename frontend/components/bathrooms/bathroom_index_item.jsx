import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { distance } from "../../util/distance_util";

const BathroomIndexItem = props => {
  const { bathroom, idx, updateFilter, center, updateCurrentMarker } = props;
  const { lat, lng, name, id } = bathroom;
  const [isHovered, updateHoverState] = useState(false);

  // const [address, updateAddress] = useState(null);

  // useEffect(() => {
  //   const geocoder = new google.maps.Geocoder();

  //   geocoder.geocode({ location: { lat, lng } }, (results, status) => {
  //     if (status === "OK") {
  //       updateAddress(results[0].formatted_address);
  //     }
  //   });
  // }, [bathroom]);

  const handleClick = e => {
    // props.history.push(`/bathrooms/${id}`);
    // updateFilter("center", { lat, lng });
    window.open(
      `https://www.google.com/maps/dir/?api=1&origin=${center.lat},${center.lng}&destination=${bathroom.address}`,
      "_blank"
    );
  };

  const handleMouseEnter = e => {
    updateCurrentMarker(bathroom.id);
    updateHoverState(true);
  };

  const handleMouseLeave = e => {
    updateHoverState(false);
  };

  // const locationContent =
  //   bathroom.address === null ? (
  //     <span>{`lat: ${lat} | lng: ${lng}`}</span>
  //   ) : (
  //     <span>{`address: ${address}`}</span>
  //   );

  const distanceAway =
    bathroom.distance.toFixed(2) <= 0.01
      ? "Nearby"
      : `${bathroom.distance.toFixed(2)}mi`;

  return (
    <li
      className={`bathroom-list-item-${idx}`}
      key={"bathroom " + id}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <section className="bathroom-info">
        <aside className="bathroom-info-right">
          <h2>{name.toLowerCase()}</h2>
          <span>{`Address: ${bathroom.address}`}</span>
        </aside>
        <h4>{isHovered ? "" : distanceAway}</h4>
      </section>

      <aside className="list-item-arrow">
        <span>Get Directions</span>
        <i className="fas fa-chevron-right"></i>
      </aside>
    </li>
  );
};

export default withRouter(BathroomIndexItem);
