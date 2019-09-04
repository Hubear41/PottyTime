import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

const Splash = props => {
  const { noResults } = props;
  const [search, updateSearch] = useState({ name: "", location: null });

  useEffect(() => {
    // setup google places on search bar
    const input = document.getElementById("search-input");
    const autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.setFields(
      ["formatted_address", "name", "location"]
    );

    autocomplete.addListener("place_changed", function() {      
      updateSearch(autocomplete.getPlace());
    });

    return () => {
      props.clearError();
    };
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    if (search.name === "" && !search.location) {
      props.history.push("/bathrooms");
    } else if ( !search.location ) {
      props.receiveError();
    } else {
      props.updateFilter("center", search.location);
      props.history.push("/bathrooms");
    }
  };

  const handleChange = e => {
    updateSearch( Object.assign({}, search, { name: e.target.value }) );
  };

  let noResultsMessage = null;
  if (noResults) {
    noResultsMessage = (
      <div className="no-search-results">
        <h5>No results</h5>
        <p>We couldn't find anything matching your search. Try searching other keywords</p>
      </div>
    );
  }

  return (
    <div className="splash-wrapper">
      <form className="splash-form" onSubmit={handleSubmit}>
        {noResultsMessage}

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
  );
};

export default withRouter(Splash);
