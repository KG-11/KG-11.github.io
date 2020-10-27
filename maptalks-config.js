const maptalksConfig = {};

maptalksConfig.urlTemplate = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png';
maptalksConfig.subdomains = ['a', 'b', 'c', 'd'];
maptalksConfig.attribution = '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
maptalksConfig.centerCoords = [80.18545, 13.11047];
maptalksConfig.centerlat = 13.11047;
maptalksConfig.centerlon = 80.18545;

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c * 1000; // Distance in m
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}
