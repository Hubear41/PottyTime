import React, { useState, useEffect } from 'react';

const SearchBar = props => {
    const[search, updateSearch] = useState({ name: "", location: null });

    useEffect(() => {
        const input = document.getElementById("search-input");
        const autocomplete = new google.maps.places.Autocomplete(input);
        autocomplete.setFields(
            ["formatted_address", "name", "location"]
        );

        autocomplete.addListener("place_changed", function () {
            updateSearch(autocomplete.getPlace());
        });

        return () => {
            props.clearError();
        };
    });

    const handleSubmit = e => {
        e.preventDefault();

        if (search.name === "" && !search.location) {
            props.history.push("/bathrooms");
        } else if (!search.location) {
            props.receiveError();
        } else {
            props.updateFilter("center", search.location);
            props.history.push("/bathrooms");
        }
    };

    const handleChange = e => {
        updateSearch(Object.assign({}, search, { name: e.target.value }));
    };

    return (
        <form id="splash-search" onSubmit={handleSubmit}>
            <i class="fas fa-search-location"></i>
            <input 
                id="search-input"
                type="text"
                placeholder='Try "Bryant Park"'
                value={search.name}
                onChange={handleChange}
            />
        </form>
    );
}

export default SearchBar;