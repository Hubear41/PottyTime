import React from 'react';

const BathroomIndexItem = props => {
    const { bathroom, idx } = props;

    return (
        <li className={`bathroom-list-item-${idx}`} key={bathroom.id} >
            <h2>{bathroom.name}</h2>
            <span>{`lat: ${bathroom.lat} | lng: ${bathroom.lng}`}</span>
        </li>
    );
};

export default BathroomIndexItem;