import React from 'react';

const Checkbox = props => {
    const { name, handleChange, isChecked } = props;
    const idName = name.split(" ").join("");

    return (
        <>
            <input
                type="checkbox"
                id={"chkbox-category-" + idName}
                className="filter-cbox"
                onChange={handleChange}
                checked={isChecked}
                value={name}
            />
            <label
                className="cbox-label"
                htmlFor={"chkbox-category-" + idName}
            >
                <div className="cbox-text">
                    <div className="svg-container">
                        <svg viewBox="0 0 44 44">
                            <path d="M14,24 L21,31 L39.7428882,11.5937758 C35.2809627,6.53125861 30.0333333,4 24,4 C12.95,4 4,12.95 4,24 C4,35.05 12.95,44 24,44 C35.05,44 44,35.05 44,24 C44,19.3 42.5809627,15.1645919 39.7428882,11.5937758" transform="translate(-2.000000, -2.000000)"></path>
                        </svg>
                    </div>
                    <p>{name}</p>
                </div>
            </label>
        </>
    );
}

export default Checkbox;