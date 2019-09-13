import React, { useEffect, useRef } from "react";
import { withRouter } from "react-router-dom";
import MarkerManager from "../../util/marker_manager";

const BathroomMap = props => {
  const { bathrooms, center, noResults, mapType } = props;
  const mapRef = useRef();
  const mapNodeRef = useRef();
  const markerManagerRef = useRef();

  // setup for google maps after it mounts
  useEffect(() => {
    const mapOptions = {
      center,
      zoom: mapType === "SHOW" ? 19 : 16,
      fullscreenControl: false
    };

    // wrap this.mapNode in a Google Map
    mapRef.current = new google.maps.Map(mapNodeRef.current, mapOptions);
    markerManagerRef.current = new MarkerManager(mapRef.current);

    // updates filters each time the map becomes idle
    const idleListener = mapRef.current.addListener("idle", () => {
      if (!noResults) {
        const {
          north,
          south,
          east,
          west
        } = mapRef.current.getBounds().toJSON();
        const bounds = {
          northEast: { lat: north, lng: east },
          southWest: { lat: south, lng: west }
        };

        props.updateFilter("bounds", bounds);
      }
    });
  }, []);

  // update all markers with a click listener that redirects to show page
  const addMarkerListeners = () => {
    Object.values(markerManagerRef.current.markers).forEach(marker => {
      // clear any previous click listeners on the marker
      google.maps.event.clearListeners(marker, "click");

      marker.addListener("click", () => {
        props.history.push(`/bathrooms/${marker.id}`);
      });

      const infowindow = new google.maps.InfoWindow({
        content: marker.title
      });

      marker.addListener("mouseover", () => {
        infowindow.open(mapRef.current, marker);
      });

      marker.addListener("mouseout", () => {
        infowindow.close(mapRef.current, marker);
      });
    });
  };

  // update markers whenever bathrooms change
  useEffect(() => {
    if (markerManagerRef.current !== null) {
      markerManagerRef.current.updateMarkers(bathrooms);
      addMarkerListeners();
    }
  }, [bathrooms]);

  // whenever center changes, change google maps
  useEffect(() => {
    mapRef.current.setCenter(center);
  }, [center]);

  return <div id="map-container" ref={map => (mapNodeRef.current = map)}></div>;
};

export default withRouter(BathroomMap);
