import React from 'react';
import SearchBar from '../search_bar/search_bar_container';

const IndexNav = props => {
    return ( 
        <div id="index-navbar">
            <SearchBar />
            <button id="filters-button" class="cs-button">Filters</button>
            
        </div>
    );
}

export default IndexNav;