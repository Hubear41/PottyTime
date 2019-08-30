import React from 'react';
import BathroomIndex from '../bathrooms/bathroom_index';
import BathroomMap from '../bathroom_map/bathroom_map';

const Search = props => {
    const { requestBathrooms, bathrooms } = props;

    return (
        <div id="search-index">
            <BathroomMap />
            <BathroomIndex 
                requestBathrooms={requestBathrooms} 
                bathrooms={bathrooms} 
            />
        </div>
    );
};

export default Search;