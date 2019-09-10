import React from 'react';
import BathroomIndex from '../bathrooms/bathroom_index';
import BathroomMap from '../bathroom_map/bathroom_map';

const Search = props => {
    const { requestBathrooms, updateFilter, bathrooms, center} = props;
    
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
            <BathroomIndex 
                requestBathrooms={requestBathrooms} 
                bathrooms={filteredBathrooms} 
                // noResults={noResults}
            />
        </div>
    );
};

export default Search;