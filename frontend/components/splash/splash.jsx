import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import NoResultsMsg from "../no_results_message/no_results";
import SplashNavbar from "../nav_bars/splash_nav_container";
import Footer from "../footer/footer";

const Splash = props => {
  const { noResults } = props;
  const [search, updateSearch] = useState({ name: "", location: null });

  useEffect(() => {
    // setup google places on search bar
    const input = document.getElementById("search-input");
    const autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.setFields(["formatted_address", "name", "geometry"]);

    autocomplete.addListener("place_changed", function() {
      updateSearch(autocomplete.getPlace());
    });

    return () => {
      props.clearError();
    };
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    if (search.name === "" && !search.geometry) {
      props.history.push("/bathrooms");
    } else if (!search.geometry) {
      props.receiveError();
    } else {
      const latlng = {
        lat: search.geometry.location.lat(),
        lng: search.geometry.location.lng()
      };
      props.updateFilter("center", latlng);
      props.history.push("/bathrooms");
    }
  };

  const handleChange = e => {
    updateSearch(Object.assign({}, search, { name: e.target.value }));
  };

  const noResultMsg = noResults ? <NoResultsMsg /> : null;

  return (
    <>
      <SplashNavbar />
      <div className="splash-wrapper">
        <video autoPlay loop>
          <source src="https://www.meetup.com/mu_static/en-US/video.dddafbfe.mp4" />
        </video>
        <div className="splash-video-text">
          <h1>Nature Calling?</h1>
          <p>Find a Bathroom close by where ever you are</p>
        </div>
        <form className="splash-form" onSubmit={handleSubmit}>
          {noResultMsg}

          <label htmlFor="location">Location: </label>
          <input
            id="search-input"
            type="text"
            onChange={handleChange}
            placeholder='Try "Bryant Park"'
            value={search.name}
          />
          <input type="submit" value="Search Nearby" />
        </form>
      </div>
      <Footer />
    </>
  );
};

export default withRouter(Splash);
