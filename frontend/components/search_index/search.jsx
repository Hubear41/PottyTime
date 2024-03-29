import React from "react";
import { Switch, Route } from "react-router-dom";
import BathroomIndex from "../bathrooms/bathroom_index";
import BathroomMap from "../bathroom_map/bathroom_map";
import BathroomShow from "../bathrooms/bathroom_show_container";
import CreateBathroom from "../bathrooms/bathrooms_create_container";
import Navbar from "../nav_bars/index_nav_container";
import { distance } from "../../util/distance_util";

const Search = props => {
  const {
    requestBathrooms,
    updateFilter,
    updateFilters,
    bathrooms,
    categories,
    center,
    bounds,
    sorting,
    filterBarHidden,
    selectedMarkerId,
    updateCurrentMarker
  } = props;

  // calculate the distance from the center for each bathroom

  bathrooms.forEach(bathroom => {
    bathroom.distance = distance(
      sorting.lat,
      sorting.lng,
      bathroom.lat,
      bathroom.lng,
      "M"
    );
  });

  let sortedBathrooms = bathrooms.sort(
    (current, next) => current.distance - next.distance
  );

  const filtered = id => categories.includes(id);
  const filteredBathrooms = sortedBathrooms.filter(bathroom => {
    if (categories.length > 0) {
      return bathroom.category_ids.some(filtered);
    }
    return bathroom;
  });

  return (
    <div id="search-index">
      <BathroomMap
        center={center}
        bounds={bounds}
        bathrooms={filteredBathrooms}
        updateFilter={updateFilter}
        updateFilters={updateFilters}
        mapType="INDEX"
        selectedMarkerId={selectedMarkerId}
      />
      <div id="search-index-right">
        <Navbar />
        <Switch>
          <Route path="/bathrooms/new" component={CreateBathroom} />
          {/* <Route path="/bathrooms/:id" component={BathroomShow} /> */}
          <Route
            path="/bathrooms/"
            render={props => (
              <BathroomIndex
                requestBathrooms={requestBathrooms}
                bathrooms={filteredBathrooms}
                updateFilter={updateFilter}
                center={center}
                filterBarHidden={filterBarHidden}
                updateCurrentMarker={updateCurrentMarker}
              />
            )}
          />
        </Switch>
      </div>
    </div>
  );
};

export default Search;
