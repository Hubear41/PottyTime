class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(bathrooms) {
        const bathroomObj = {};

        bathrooms.forEach(bathroom => {
            if (!this.markers[bathroom.id]) {
                this.createMarkerFromBathroom(bathroom);
                // this.createMarkerInfo();
            }
            bathroomObj[bathroom.id] = bathroom;
        });

        // remove any markers that aren't in bathrooms array
        Object.keys(this.markers).forEach(id => {
            if (!bathroomObj[id]) {
                this.removeMarker(this.markers[id]);
            }
        });
    }

    recenterOnMarker(latlng) {
        this.map.setCenter(latlng)
    }

    createMarkerFromBathroom(bathroom) {
        const { lat, lng, name, id } = bathroom;

        const marker = new google.maps.Marker({
            position: { lat, lng },
            title: name,
            id,
        });

        marker.setMap(this.map);
        this.markers[id] = marker;
    }

    // remove marker from map and from this.markers
    removeMarker(marker) {
        marker.setMap(null);
        delete this.markers[marker.id];
    }
}

export default MarkerManager;