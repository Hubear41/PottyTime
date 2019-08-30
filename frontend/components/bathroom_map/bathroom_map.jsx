import React, { useEffect } from 'react';

const BathroomMap = props => {
    const map = React.createRef();
    const mapNode = React.createRef();

    useEffect( () => {
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 }, // this is SF
            zoom: 13
        };

        // wrap this.mapNode in a Google Map
        map.current = new google.maps.Map(mapNode.current, mapOptions);
    }, []);

    return (
        <div id="map-container" ref={map => mapNode.current = map}></div>
    )
}

export default BathroomMap;