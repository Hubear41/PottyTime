import React from "react";
import BathroomIndexItem from "./bathroom_index_item";
import FilterBar from "../filter_bar/filter_bar_container";

const BathroomIndex = props => {
  const {
    bathrooms,
    updateFilter,
    filterBarHidden,
    center,
    updateCurrentMarker
  } = props;
  const geocoder = new google.maps.Geocoder();

  const bathroomItems = bathrooms.map((bathroom, idx) => {
    return (
      <BathroomIndexItem
        bathroom={bathroom}
        idx={idx}
        key={"bathroom " + idx}
        geocoder={geocoder}
        center={center}
        updateFilter={updateFilter}
        updateCurrentMarker={updateCurrentMarker}
      />
    );
  });

  const handleMouseLeave = e => {
    updateCurrentMarker(null);
  };

  return (
    <aside id="bathroom-index">
      <FilterBar hidden={filterBarHidden} />
      <div id="bathroom-list-wrapper">
        <ul id="bathroom-list" onMouseLeave={handleMouseLeave}>
          {bathroomItems}
        </ul>
      </div>
    </aside>
  );
};

export default BathroomIndex;
