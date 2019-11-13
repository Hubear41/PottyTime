import React from "react";
import { Switch, Route } from "react-router-dom";
import BathroomIndex from "../bathrooms/bathroom_index";
import BathroomMap from "../bathroom_map/bathroom_map";
import BathroomShow from "../bathrooms/bathroom_show_container";
import CreateBathroom from "../bathrooms/bathrooms_create_container";
import Navbar from "../nav_bars/index_nav_container";

const Search = props => {
  const {
    requestBathrooms,
    updateFilter,
    bathrooms,
    center,
    filterBarHidden
  } = props;

  const filteredBathrooms = bathrooms.slice(0, 30);

  return (
    <div id="search-index">
      <BathroomMap
        bathrooms={filteredBathrooms}
        updateFilter={updateFilter}
        mapType="INDEX"
      />
      <div id="search-index-right">
        <Navbar />
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
                filterBarHidden={filterBarHidden}
              />
            )}
          />
        </Switch>
      </div>
    </div>
  );
};

export default Search;
