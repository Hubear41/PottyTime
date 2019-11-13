import React, { useEffect, useRef } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import MarkerManager from "../../util/marker_manager";

const msp = ({ ui }, { location }) => ({
  pathname: location.pathname,
  center: ui.filters.center
});

const BathroomMap = props => {
  const { bathrooms, center, noResults, mapType, updateFilter } = props;
  const mapRef = useRef();
  const mapNodeRef = useRef();
  const markerManagerRef = useRef();
  const centerMarkerRef = useRef([]);

  // setup for google maps after it mounts
  useEffect(() => {
    const mapOptions = {
      center,
      zoom: mapType === "SHOW" ? 19 : 17,
      fullscreenControl: false,
      style: {}
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

        updateFilter("bounds", bounds);
      }
    });

    mapRef.current.addListener("click", e => {
      let coordinates = { lat: e.latLng.lat(), lng: e.latLng.lng() };
      props.history.push({
        search: `lat=${coordinates.lat}&lng=${coordinates.lng}`
      });
    });
  }, []);

  // update all markers with a click listener that redirects to show page
  const addMarkerListeners = () => {
    Object.values(markerManagerRef.current.markers).forEach(marker => {
      // clear any previous click listeners on the marker
      google.maps.event.clearListeners(marker, "click");

      marker.addListener("click", () => {
        const lat = marker.position.lat();
        const lng = marker.position.lng();
        let centerMarker = centerMarkerRef.current;
        if (lat !== centerMarker.lat && lng !== centerMarker.lng) {
          props.history.push(`/bathrooms/${marker.id}`);
          mapRef.current.panTo({ lat, lng });
          centerMarkerRef.current = { lat, lng };
        }
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
    //find the selected marker to open infowindow
    const marker = markerManagerRef.current.findMarker(centerMarkerRef.current);

    if (marker) {
      const infowindow = new google.maps.InfoWindow({
        content: marker.title
      });
      infowindow.open(mapRef.current, marker);
    }
  }, [centerMarkerRef.current]);

  useEffect(() => {
    mapRef.current.panTo(center);

    if (center.lat !== centerMarkerRef.current.lat && center.lng !== centerMarkerRef.current.lng) {
      centerMarkerRef.current = center
    }
  }, [center])

  return <div id="map-container" ref={map => (mapNodeRef.current = map)}></div>;
};

export default withRouter(
  connect(
    msp,
    null
  )(BathroomMap)
);
