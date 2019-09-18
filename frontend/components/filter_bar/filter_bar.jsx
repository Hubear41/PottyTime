import React, { useEffect } from 'react';
import FilterBarItem from './filter_bar_item';

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
        ? { maxHeight: "0", padding: "0" }
        : { maxHeight: "120px", padding: "10px" }

    return (
        <div 
          id="filter-bar-wrapper" 
          style={filterStyle}
        class={hidden ? "filters-disappear" : "filters-appear"}
        >   
            <aside id="filter-all-btn">
                <input
                    type="checkbox"
                    id={"category-all"}
                    className="filter-cbox"
                    onChange={handleChangeAll}
                    checked={hasNoFilters}
                    value="All"
                />
                <label
                    className="cbox-label"
                    htmlFor={"category-all"}
                >
                    <div className="cbox-text">
                        <div className="svg-container">
                            <svg viewBox="0 0 44 44">
                                <path d="M14,24 L21,31 L39.7428882,11.5937758 C35.2809627,6.53125861 30.0333333,4 24,4 C12.95,4 4,12.95 4,24 C4,35.05 12.95,44 24,44 C35.05,44 44,35.05 44,24 C44,19.3 42.5809627,15.1645919 39.7428882,11.5937758" transform="translate(-2.000000, -2.000000)"></path>
                            </svg>
                        </div>
                        <p>All</p>
                    </div>
                </label>
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