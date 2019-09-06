import React, { useState, useEffect, useRef } from "react";

const BathroomShow = props => {
  useEffect(() => {
    const benchId = props.match.params.id;
    props.requestBathroom(benchId);
  }, []);

  return <h1>hello</h1>;
};

export default BathroomShow;
