import React from 'react';

const FilterBarItem = props => {
    const { category, filteredCategoryIds } = props;
    const isChecked = filteredCategoryIds.includes(category.id);

    const handleChange = e => {
        e.stopPropagation();

        const newFilteredIds = isChecked 
            ? filteredCategoryIds.filter( categId => categId !== category.id )
            : filteredCategoryIds.concat([ category.id ]);
        
        props.updateFilter("categoryIds", newFilteredIds);
    }

    return (
        <li className={`filter-item-${category.id}`}>
            <label className="checkbox-wrapper" >
                <h6>{category.name}</h6>
                <input 
                    type="checkbox" 
                    onChange={handleChange} 
                    checked={isChecked} 
                />
                <span className="checkmark"></span>
            </label>
        </li>
    )
}

export default FilterBarItem;