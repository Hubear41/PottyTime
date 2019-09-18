import React, { useEffect } from 'react';
import FilterBarItem from './filter_bar_item';

const FilterBar = props => {
    const { categories, updateFilter, filteredCategoryIds, hidden } = props;

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

    const filterStyle = hidden 
        ? { height: '0', padding: "0" }
        : { height: "90px", padding: "10px"}

    return (
        <div 
          id="filter-bar-wrapper" 
        //   style={filterStyle}
        >
            <ul id="category-filter-list">
                {categoryItems}
            </ul>
        </div>
    );
}

export default FilterBar;