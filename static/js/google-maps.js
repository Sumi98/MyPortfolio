function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 43.65980207248801, lng: -79.4402792886272};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Toronto, Canada' // Title Location
    });
}
