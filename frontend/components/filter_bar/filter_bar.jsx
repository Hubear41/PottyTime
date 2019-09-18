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
        ? { maxHeight: '0', padding: "0", opacity: 0 }
        : { maxHeight: "120px", padding: "10px", opacity: 1 }

    return (
        <div 
          id="filter-bar-wrapper" 
          style={filterStyle}
        >
            <ul id="category-filter-list">
                {categoryItems}
            </ul>
        </div>
    );
}

export default FilterBar;