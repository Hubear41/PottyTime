class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(bathrooms) {
        bathrooms.forEach( bathroom => {
            if ( !this.markers[bathroom.id] ) {
                this.createMarkerFromBathroom(bathroom);
            }
        });
    }

    createMarkerFromBathroom(bathroom) {
        const { lat, lng, name, id } = bathroom;

        const marker = new.google.maps.Marker({
            position: { lat, lng }, 
            title: name,
        });

        marker.setMap(this.map);
        this.markers[id] = marker;
    }
}

export default MarkerManager;