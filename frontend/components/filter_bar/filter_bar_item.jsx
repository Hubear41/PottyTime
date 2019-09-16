import React from 'react';

const FilterBarItem = props => {
    const { category, filteredCategoryIds } = props;
    const filtering = filteredCategoryIds.includes(category.id);

    const handleClick = e => {
        const newFilteredIds = filtering 
            ? filteredCategoryIds.filter( categ => categ.id !== category.id )
            : filteredCategoryIds.push(category.id);

        props.updateFilter("categoryIds", newFilteredIds);
     }

    return (
        <li className={`filter-item-${category.id} ${filtering ? "filtered" : ""}`}>
            <label className="checkbox-wrapper">
                <h6>{category.name}</h6>
                <input type="checkbox"/>
                <span className="checkmark"></span>
            </label>
        </li>
    )
}

export default FilterBarItem;