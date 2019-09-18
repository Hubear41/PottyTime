import React, { useEffect } from 'react';
import FilterBarItem from './filter_bar_item';
import Checkbox from './checkbox';

const FilterBar = props => {
    const { categories, updateFilter, filteredCategoryIds, hidden } = props;
    const hasNoFilters = Boolean(filteredCategoryIds.length <= 0);

    useEffect(() => {
        props.requestCategories();
    }, []);

    const handleChangeAll = e => {
        props.updateFilter("categoryIds", []);
    }

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
        ? { maxHeight: "0", padding: "0", marginTop: "0" }
        : { maxHeight: "120px", padding: "10px", marginTop: "60px" }

    return (
        <div 
          id="filter-bar-wrapper" 
          style={filterStyle}
          class={hidden ? "filters-disappear" : "filters-appear"}
        >   
            <aside id="filter-all-btn">
                <Checkbox 
                    name="All"
                    handleChange={handleChangeAll}
                    isChecked={hasNoFilters}
                />
            </aside>
            <ul 
              id="category-filter-list"
            >
                {categoryItems}
            </ul>
        </div>
    );
}

export default FilterBar;