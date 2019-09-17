import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BathroomMap from "../bathroom_map/bathroom_map";

const BathroomShow = props => {
  const { bathroom, center } = props;
  const bathroomId = props.match.params.id;

  useEffect(() => {
    if (!bathroom || bathroom.id !== bathroomId) {
      props.requestBathroom(bathroomId);
    }
  }, [bathroomId]);

  const centerLocation = bathroom
    ? { lat: bathroom.lat, lng: bathroom.lng }
    : center;

  return (
    <div className="bathroom-show-container">
      <div className="bathroom-information-container">
        <h2>{bathroom ? bathroom.name.toLowerCase() : null}</h2>
        <h1>{bathroom ? `${bathroom.lng}, ${bathroom.lat}` : null}</h1>
        <Link to="/bathrooms">Back to Results</Link>
      </div>
    </div>
  );
};

export default BathroomShow;
