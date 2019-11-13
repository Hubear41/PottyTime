import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

const SearchBar = props => {
  const [search, updateSearch] = useState({ name: "", location: null });

  useEffect(() => {
    const input = document.getElementById("search-input");
    const autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.setFields(["formatted_address", "name", "geometry"]);

    autocomplete.addListener("place_changed", function() {
      const newPlace = autocomplete.getPlace();
      if (newPlace.geometry) {
        updateSearch(Object.assign({}, search, autocomplete.getPlace()));
      }
    });

    return () => {
      props.clearError();
    };
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    if (!search.geometry) {
      props.receiveError();
    } else {
      const latlng = {
        lat: search.geometry.location.lat(),
        lng: search.geometry.location.lng()
      };
      props.updateFilter("center", latlng);

      props.history.push("/bathrooms/");
    }
  };

  const handleChange = e => {
    updateSearch(Object.assign({}, search, { name: e.target.value }));
  };

  return (
    <form id="nav-search" onSubmit={handleSubmit}>
      <i className="fas fa-search-location"></i>
      <input
        id="search-input"
        type="text"
        placeholder='Try "Bryant Park"'
        value={search.name}
        onChange={handleChange}
      />
    </form>
  );
};

export default withRouter(SearchBar);
