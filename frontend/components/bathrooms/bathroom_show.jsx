import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import BathroomMap from '../bathroom_map/bathroom_map';

const BathroomShow = props => {
  const { bathroom, center } = props;
  const bathroomId = props.match.params.id;

  useEffect(() => {
    if (!bathroom) {
      requestBathroom(bathroomId);
    }
  }, []);

  // useEffect(() => {
  //   if (currentBathroom) {
  //     const mapOptions = {
  //       center: {
  //         lat: currentBathroom.lat,
  //         lng: currentBathroom.lng
  //       },
  //       zoom: 18
  //     };

  //     mapRef.current = new google.maps.Map(mapNodeRef.current, mapOptions);
  //     markerManagerRef.current = new MarkerManager(mapRef.current);

  //     // updates filters each time the map becomes idle
  //     const idleListener = mapRef.current.addListener("idle", () => {
  //       if (!noResults) {
  //         const {
  //           north,
  //           south,
  //           east,
  //           west
  //         } = mapRef.current.getBounds().toJSON();
  //         const bounds = {
  //           northEast: { lat: north, lng: east },
  //           southWest: { lat: south, lng: west }
  //         };

  //         props.updateFilter("bounds", bounds);
  //       }
  //     });

  //     markerManagerRef.current.updateMarkers([currentBathroom]);

  //     const geocoder = new google.maps.Geocoder();
  //     const infowindow = new google.maps.InfoWindow();

  //     function geocodeLatLng(geocoder, map, infowindow) {
  //       var latlng = { lat: currentBathroom.lat, lng: currentBathroom.lng };
  //       geocoder.geocode({ location: latlng }, function(results, status) {
  //         if (status === "OK") {
  //           if (results[0]) {
  //             var marker = new google.maps.Marker({
  //               position: latlng,
  //               map: map
  //             });
  //             infowindow.setContent(results[0].formatted_address);
  //             infowindow.open(map, marker);
  //           } 
  //         //   else {
  //         //     window.alert("No results found");
  //         //   }
  //         // } else {
  //         //   window.alert("Geocoder failed due to: " + status);
  //         }
  //       });
  //     }

  //     geocodeLatLng(geocoder, mapRef.current, infowindow);

  //     return () => {
  //       mapRef.current.removeListener(idleListener);
  //     };
  //   }
  // }, [currentBathroom]);

  const centerLocation = bathroom 
    ? { lat: bathroom.lat, lng: bathroom.lng }
    : center;

  return (
    <div className="bathroom-show-container">
      <BathroomMap 
          bathrooms={ !bathroom ? [] : [bathroom] }
          center={centerLocation}
          updateFilter={props.updateFilter}
      />

      <div className="bathroom-information-container">
        <p>{bathroom ? bathroom.name : null}</p>

        <Link to="/bathrooms">Back to Results</Link>
      </div>
    </div>
  );
};

export default BathroomShow;
