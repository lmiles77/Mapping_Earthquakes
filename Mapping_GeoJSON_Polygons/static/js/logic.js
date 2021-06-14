// add console.log to check to see if code is working
console.log("working");

// create tile layer to be the background of the map
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: Api_Key
});

// create dark view tile layer as an option for the map
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: Api_Key
});


// create a base layer that holds both maps
let baseMaps = {
    "Streets": streets,
    "Satelite Streets": satelliteStreets
};

// create the map object with center and zoom level
let map = L.map('mapid', {
        center: [43.7, -79.3],
        zoom: 11,
        layers: [satelliteStreets]
    });

// Pass out map layers into our layer control and add the layer control to the map
L. control.layers(baseMaps).addTo(map);

// accessing the airport GeoJson URL
let torontoHoods = "https://raw.githubusercontent.com/https://github.com/lmiles77/Mapping_Earthquakes/blob/main/torontoNeighborhoods.json";

// grabbing GeoJSON data
d3.json(torontoHoods).then(function(data) {
    console.log(data);
    // creating a GeoJSON layer with the retrieved data
    L.geoJSON(data).addTo(map);
});