import React, { useEffect } from "react";
import BathroomIndexItem from "./bathroom_index_item";
import NoResults from "../no_results_message/no_results";

const BathroomIndex = props => {
  const { bathrooms, noResults, updateFilter, center } = props;

  const bathroomItems = bathrooms.map((bathroom, idx) => {
    return (
      <BathroomIndexItem
        bathroom={bathroom}
        idx={idx}
        key={"bathroom " + idx}
        updateFilter={updateFilter}
      />
    );
  });

  // const noResultsMsg = noResults ? <NoResults /> : null;

  return (
    <aside className="bathroom-index">
      {/* {noResultsMsg} */}

      <ul className="bathroom-index-list">{bathroomItems}</ul>
    </aside>
  );
};

export default BathroomIndex;
