const inialize = function(){

    const mapDiv = document.getElementById('main-map');
    const centre = {lat: 57.307311, lng: -2.188885};
    const zoom = 12.5;
    const markerCoords = {lat: 57.327763, lng: -2.200318};

    const mainMap = new MapWrapper(mapDiv, centre, zoom);
    
    mainMap.addMarker(markerCoords);

    mainMap.addClickEvent();

}


document.addEventListener("DOMContentLoaded", inialize);