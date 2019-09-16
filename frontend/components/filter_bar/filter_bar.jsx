import React, { useEffect } from 'react';
import FilterBarItem from './filter_bar_item';

const FilterBar = props => {
    const { categories, updateFilter, filteredCategoryIds } = props;

    useEffect(() => {
        props.requestCategories();
    }, []);

    const categoryItems = categories.map( (category, idx) => {
        return (
            <FilterBarItem 
                key={"" + idx + category}
                category={category}
                updateFilter={updateFilter}
                filteredCategoryIds={filteredCategoryIds}
            />
        );
    });

    return (
        <div id="filter-bar-wrapper">
            {/* <h3>Filters</h3> */}
            <ul id="category-filter-list">
                {categoryItems}
            </ul>
        </div>
    );
}

export default FilterBar;