import React, { useEffect } from 'react';
import BathroomIndexItem from './bathroom_index_item';

const BathroomIndex = props => {
    const { requestBathrooms, bathrooms } = props;

    useEffect( () => { // fetch all bathrooms on mount
        // requestBathrooms();
    }, []);

    // const bathroomItems = [];
    // for (let idx = 0; idx < 10 && idx < bathrooms.length; idx++) {
    //     const bathroom = bathrooms[idx];
    //     bathroomItems.push(
    //         <BathroomIndexItem bathroom={bathroom} idx={idx} key={"bathroom " + idx} />
    //     );    
    // }

    const bathroomItems = bathrooms.map( (bathroom, idx) => {
        return <BathroomIndexItem bathroom={bathroom} idx={idx} key={"bathroom " + idx} />;
    });

    return (
        <aside className="bathroom-index">
            <ul className="bathroom-index-list">
                {bathroomItems}
            </ul>
        </aside>
    )
}

export default BathroomIndex;