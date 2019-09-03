import React from 'react';
import BathroomIndex from '../bathrooms/bathroom_index';
import BathroomMap from '../bathroom_map/bathroom_map';
import { filter } from 'minimatch';

const Search = props => {
    const { requestBathrooms, updateFilter, bathrooms } = props;

    const filteredBathrooms = bathrooms.slice(0, 20);

    return (
        <div id="search-index">
            <BathroomMap 
                bathrooms={filteredBathrooms} 
                updateFilter={updateFilter}
            />
            <BathroomIndex 
                requestBathrooms={requestBathrooms} 
                bathrooms={filteredBathrooms} 
            />
        </div>
    );
};

export default Search;