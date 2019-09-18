import React from 'react';

const FilterToggle = props => {
    const { filterBarHidden } = props;

    const handleFilterClick = e => {
        if (filterBarHidden) {
            props.revealFilterBar();
        } else {
            props.hideFilterBar();
        }
    }

    const buttonClass = filterBarHidden 
        ? "inactive" 
        : "active"

    return (
        <button
            id="filters-toggle"
            className={buttonClass}
            onClick={handleFilterClick}
        >
            <div className="circle">
                <i className="fas fa-sliders-h"></i>
            </div>
            <p className="filter-text">Filters</p>
        </button>
    );
}

export default FilterToggle;