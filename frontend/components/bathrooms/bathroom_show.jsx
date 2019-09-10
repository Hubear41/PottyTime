import React, { useState, useEffect, useRef } from "react";

const BathroomShow = props => {
  useEffect(() => {
    const bathroomId = props.match.params.id;
    if (!props.bathrooms[bathroomId]) {
      debugger;
      props.requestBathroom(bathroomId);
    }
  }, []);

  let currentBathroom = props.bathrooms[props.match.params.id];

  return (
    <div>
      <p>{currentBathroom ? currentBathroom.id : null}</p>
    </div>
  );
};

export default BathroomShow;
