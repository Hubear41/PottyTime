import React, { useEffect, useRef } from 'react';
import MarkerManager from '../../util/marker_manager';

const BathroomMap = props => {
    const { bathrooms } = props;
    const mapRef = useRef();
    const mapNodeRef = useRef();
    const markerManagerRef = useRef();

    // setup for google maps after it mounts
    useEffect( () => {
        const mapOptions = {
            center: { 
                lat: 40.7549, 
                lng: -73.9840 
            }, // this is NY
            zoom: 13
        };

        // wrap this.mapNode in a Google Map
        mapRef.current = new google.maps.Map(mapNodeRef.current, mapOptions);
        markerManagerRef.current = new MarkerManager(mapRef.current);
    }, []);

    // update markers whenever bathrooms change
    useEffect( () => {
        if ( markerManagerRef.current !== null ) {
            markerManagerRef.current.updateMarkers(bathrooms);
        }
    }, [bathrooms]);

    return (
        <div id="map-container" ref={map => mapNodeRef.current = map}></div>
    )
}

export default BathroomMap;