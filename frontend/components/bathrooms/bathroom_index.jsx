import React, { useEffect } from 'react';
import BathroomIndexItem from './bathroom_index_item';

const BathroomIndex = props => {
    useEffect( () => {
        props.requestBathrooms();
    }, []);

    const bathroomItems = props.bathrooms.map( (bathroom, idx) => {
        return <BathroomIndexItem bathroom={bathroom} idx={idx} />;
    });

    return (
        <div className="bathroom-index">
            <aside className="bathroom-index-list">
                <ul>
                    {bathroomItems}
                </ul>
            </aside>
        </div>
    )
}

export default BathroomIndex;