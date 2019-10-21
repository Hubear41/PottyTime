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

    //find marker based on center
    findMarker(center) {
        let result;
        Object.values(this.markers).forEach(marker => {
            let position = { lat: marker.getPosition().lat().toString(), lng: marker.getPosition().lng().toString().slice(0, 9) }
            let check = { lat: center.lat.toString(), lng: center.lng.toString().slice(0, 9) }

            if (position.lat === check.lat && position.lng === check.lng) {
                result = marker
            }
        })
        return result;
    }

    // remove marker from map and from this.markers
    removeMarker(marker) {
        marker.setMap(null);
        delete this.markers[marker.id];
    }
}

export default MarkerManager;