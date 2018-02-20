let mainMap;

const inialize = function(){

    createMainMap();

    const iconBase = 'http://maps.google.com/mapfiles/ms/micons/';
    const markerCoords = {lat: 57.327763, lng: -2.200318};
    const firstMarker = mainMap.addMarker(markerCoords, iconBase + 'ltblu-pushpin.png');

    const content = '<div id="content">'+
    '<h1>Udny Green</h1>'+
    '<div>'+
    '<p><b>Udny Green</b> is a small village in the North East of Scotland.</p>'+
    '<p>It is most famous for the Eat On The Green restaurant, <br>'+
    'which is owned by head chef Craig Wilson, aka The Kilted Chef</p>'+
    '</div>'+
    '</div>';

    const infoWindow = mainMap.createInfoWindow(content);
    firstMarker.addListener('click', function(){
        infoWindow.open(mainMap, firstMarker);
    })

    // mainMap.addClickEvent();

    const handleButtonClick = function(){
        const coords = {lat: 55.953252, lng: -3.187938};
        mainMap.googleMap.setCenter(coords);
    }

    const EdinburghButton = document.getElementById('button');
    EdinburghButton.addEventListener('click', handleButtonClick);

}

const createMainMap = function(){
    const mapDiv = document.getElementById('main-map');
    const centre = {lat: 57.307311, lng: -2.188885};
    const zoom = 12;
    mainMap = new MapWrapper(mapDiv, centre, zoom);
}


document.addEventListener("DOMContentLoaded", inialize);