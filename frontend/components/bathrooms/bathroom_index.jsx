import React from 'react';
import BathroomIndexItem from './bathroom_index_item';
import FilterBar from '../filter_bar/filter_bar_container';

const BathroomIndex = props => {
  const { bathrooms, updateFilter } = props;

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

    return (
      <aside id="bathroom-index">
          <FilterBar />
          <ul className="bathroom-index-list">
              {bathroomItems}
          </ul>
      </aside>
    )
}

export default BathroomIndex;
