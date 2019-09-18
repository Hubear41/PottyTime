import React from 'react';
import Checkbox from './checkbox';

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
            <Checkbox 
                name={category.name}
                handleChange={handleChange}
                isChecked={isChecked}
            />
        </li>
    )
}

export default FilterBarItem;