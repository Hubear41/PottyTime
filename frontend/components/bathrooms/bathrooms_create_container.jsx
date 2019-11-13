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
  const geocoder = new google.maps.Geocoder();
  const [name, setName] = useState("");
  const [address, setAddress] = useState('')
  const { lat, lng } = props;

  useEffect(() => {
    const myLatlng = new google.maps.LatLng(parseFloat(lat), parseFloat(lng));
    geocoder.geocode({
      'latLng': myLatlng
    }, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[0]) {
          setAddress(results[0].formatted_address);
        }
      }
    });
  }, [lat, lng])

  function handleSubmit(e) {
    e.preventDefault();
    let bathroom = { name, lat: props.lat, lng: props.lng, address };
    props
      .createBathroom(bathroom)
      .then(bathroom => {
        props.history.push(`/bathrooms/`)
      });
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
        {/* <input type="text" value={lat || ""} disabled />
        <input type="text" value={lng || ""} disabled /> */}
        <input type="text" value={address} disabled className='' />
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
