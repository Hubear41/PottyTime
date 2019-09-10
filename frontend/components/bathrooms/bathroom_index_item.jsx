import React from "react";

const BathroomIndexItem = props => {
  const { bathroom, idx } = props;
  debugger;
  return (
    <li className={`bathroom-list-item-${idx}`} key={"bathroom " + bathroom.id}>
      <h2>{bathroom.name}</h2>
      <span>{`lat: ${bathroom.lat} | lng: ${bathroom.lng}`}</span>
    </li>
  );
};

export default BathroomIndexItem;
