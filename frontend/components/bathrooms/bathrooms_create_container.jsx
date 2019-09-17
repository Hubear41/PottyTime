import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { createBathroom } from "../../actions/bathroom_actions";

const msp = (state, { location }) => ({
  lat: new URLSearchParams(location.search).get("lat"),
  lng: new URLSearchParams(location.search).get("lng")
});

const mdp = dispatch => ({
  createBathroom: bathroom => dispatch(createBathroom(bathroom))
});

const CreateBathroom = props => {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let bathroom = { name, lat: props.lat, lng: props.lng };
    props
      .createBathroom(bathroom)
      .then(bathroom => props.history.push("/bathrooms"));
  }

  return (
    <div className="bathroom-form-container">
      <form id="bathroom-form">
        <label htmlFor="">Bathroom Name:</label>
        <input
          type="text"
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <span id="bathroom-location">
          Select Location By Clicking on the Map
        </span>
        <input type="text" value={props.lat} disabled />
        <input type="text" value={props.lng} disabled />
        <button onClick={handleSubmit}>Create!</button>
        <Link to="/bathrooms">Cancel</Link>
      </form>
    </div>
  );
};

export default withRouter(
  connect(
    msp,
    mdp
  )(CreateBathroom)
);
