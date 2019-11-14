class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
    this.selectedId = null;
  }

  updateMarkers(bathrooms) {
    const bathroomObj = {};

    bathrooms.forEach(bathroom => {
      if (!this.markers[bathroom.id]) {
        this.createMarkerFromBathroom(bathroom);
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
      title: name || title,
      id
    });

    marker.setMap(this.map);
    this.markers[id] = marker;
  }

  createMarkerFromMarker(marker) {
    const { position, title, id } = marker;
    const lat = position.lat(),
      lng = position.lng();

    const newMarker = new google.maps.Marker({
      position: { lat, lng },
      title,
      id
    });

    newMarker.setMap(this.map);
    this.markers[id] = newMarker;
  }

  //find marker based on center
  findMarker(center) {
    let result;

    Object.values(this.markers).forEach(marker => {
      let position = {
        lat: marker
          .getPosition()
          .lat()
          .toString(),
        lng: marker
          .getPosition()
          .lng()
          .toString()
          .slice(0, 9)
      };
      let check = {
        lat: center.lat.toString(),
        lng: center.lng.toString().slice(0, 9)
      };

      if (position.lat === check.lat && position.lng === check.lng) {
        result = marker;
      }
    });

    return result;
  }

  // remove marker from map and from this.markers
  removeMarker(marker) {
    marker.setMap(null);
    delete this.markers[marker.id];
  }

  highlightSelectedMarker(id) {
    // remove previously selected marker
    if (this.selectedId) {
      const prevSelectedMarker = this.markers[this.selectedId];
      debugger;
      this.removeMarker(prevSelectedMarker);
      this.createMarkerFromMarker(prevSelectedMarker);
    }

    // if there's a new selected marker, create a green marker
    if (id) {
      const selectedMarker = this.markers[id];
      debugger;
      this.removeMarker(selectedMarker);

      const { position, title } = selectedMarker;
      const lat = position.lat(),
        lng = position.lng();

      const newSelectedMarker = new google.maps.Marker({
        position: { lat, lng },
        title: title,
        id,
        icon: {
          url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
          scaledSize: new google.maps.Size(50, 50)
        }
      });

      newSelectedMarker.setMap(this.map);
      this.markers[id] = newSelectedMarker;
      this.selectedId = id;
    }
  }
}

export default MarkerManager;
