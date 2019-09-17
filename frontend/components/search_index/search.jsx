import React from "react";
import { Switch, Route } from "react-router-dom";
import BathroomIndex from "../bathrooms/bathroom_index";
import BathroomMap from "../bathroom_map/bathroom_map";
import BathroomShow from "../bathrooms/bathroom_show_container";
import CreateBathroom from "../bathrooms/bathrooms_create_container";

const Search = props => {
  const { requestBathrooms, updateFilter, bathrooms, center } = props;

  const filteredBathrooms = bathrooms.slice(0, 10);

  return (
    <div id="search-index">
      <BathroomMap
        bathrooms={filteredBathrooms}
        updateFilter={updateFilter}
        center={center}
        mapType="INDEX"
        // noResults={noResults}
      />
      <Switch>
        <Route path="/bathrooms/new" component={CreateBathroom} />
        <Route path="/bathrooms/:id" component={BathroomShow} />
        <Route
          path="/bathrooms/"
          render={props => (
            <BathroomIndex
              requestBathrooms={requestBathrooms}
              bathrooms={filteredBathrooms}
              updateFilter={updateFilter}
              center={center}
              // noResults={noResults}
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default Search;
