const MapWrapper = function(container, coords, zoom){
    
    this.googleMap = new google.maps.Map(container, {
        center: coords,
        zoom: zoom
    });
}

MapWrapper.prototype.addMarker = function(coords, icon){
    const marker = new google.maps.Marker({
        position: coords,
        map: this.googleMap,
        icon: icon
    });
    return marker;
}

MapWrapper.prototype.createInfoWindow = function(content){
    const infoWindow = new google.maps.InfoWindow({
        content: content
    });
    return infoWindow;
}

MapWrapper.prototype.addClickEvent = function(){
    google.maps.event.addListener(this.googleMap, 'click', function(event){
        const coords = {lat: event.latLng.lat(), lng: event.latLng.lng()};
        this.addMarker(coords);
        // console.log(event.latLng.lat());
        // console.log(event.latLng.lng());
    }.bind(this));
}