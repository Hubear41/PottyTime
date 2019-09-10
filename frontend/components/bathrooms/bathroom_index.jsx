import React, { useEffect } from 'react';
import BathroomIndexItem from './bathroom_index_item';
import NoResults from '../no_results_message/no_results';

const BathroomIndex = props => {
    const { bathrooms, noResults } = props;

    // const bathroomItems = bathrooms.map( (bathroom, idx) => {
    //     return <BathroomIndexItem bathroom={bathroom} idx={idx} key={"bathroom " + idx} />;
    // });

    let bathroomItems = [];
    for (let idx = 0; idx < 10 && idx < bathrooms.length; idx++) {
        const bathroom = bathrooms[idx];

        bathroomItems.push(<BathroomIndexItem bathroom={bathroom} idx={idx} key={"bathroom " + idx} />);
    }

    // const noResultsMsg = noResults ? <NoResults /> : null;

    return (
        <aside className="bathroom-index">
            {/* {noResultsMsg} */}

            <ul className="bathroom-index-list">
                {bathroomItems}
            </ul>
        </aside>
    )
}

export default BathroomIndex;