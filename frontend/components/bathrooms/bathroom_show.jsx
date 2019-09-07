import React, { useState, useEffect, useRef } from "react";

const BathroomShow = props => {
  useEffect(() => {
    const benchId = props.match.params.id;
    props.requestBathroom(benchId);
  }, []);

  let currentBathroom = props.bathrooms[props.match.params.id];

  return (
    <div>
      <p>{currentBathroom ? currentBathroom.id : null}</p>
    </div>
  );
};

export default BathroomShow;
