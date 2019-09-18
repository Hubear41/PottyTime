import React from 'react';
import SearchBar from '../search_bar/search_bar_container';
import FilterToggle from './filter_toggle.jsx';

const IndexNav = props => {
    const { filterBarHidden } = props;

    return ( 
        <div id="index-navbar">
            <aside id="index-nav-left">
                <SearchBar />
                <FilterToggle 
                    filterBarHidden={filterBarHidden}
                    revealFilterBar={props.revealFilterBar}
                    hideFilterBar={props.hideFilterBar}
                />
            </aside>

            <label id="navbar-dropdown-icon">
                <i className="fas fa-bars"></i>
            </label>
        </div>
    );
}

export default IndexNav;