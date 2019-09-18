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
            <input 
                type="checkbox"
                id={"category-" + category.id} 
                className="filter-cbox"
                onChange={handleChange} 
                checked={isChecked} 
                value={category.name}
            />
            <label 
              className="cbox-label" 
              htmlFor={"category-" + category.id}
            >   
                <div className="cbox-text">
                    <div className="svg-container">
                        <svg viewBox="0 0 44 44">
                            <path d="M14,24 L21,31 L39.7428882,11.5937758 C35.2809627,6.53125861 30.0333333,4 24,4 C12.95,4 4,12.95 4,24 C4,35.05 12.95,44 24,44 C35.05,44 44,35.05 44,24 C44,19.3 42.5809627,15.1645919 39.7428882,11.5937758" transform="translate(-2.000000, -2.000000)"></path>
                        </svg>
                    </div>
                    <p>{category.name}</p>

                </div>
            </label>
        </li>
    )
}

export default FilterBarItem;