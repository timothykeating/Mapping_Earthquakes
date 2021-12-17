// Add console.log to check to see if our code is working.

/////////
// 13.5.2
// Map GeoJSON Point Type
//

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}} 
            // watch out here, as GeoJSON swaps long/lat reverse order        
]};

// Grabbing our GeoJSON data. #1
// L.geoJSON(sanFranAirport).addTo(map);
// Grabbing our GeoJSON data.  #2
// L.geoJSON(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng).bindPopup("<h2>" + feature.properties.city + "</h2>");
//   }
// }).addTo(map);
// Grabbing our GeoJSON data.  #2
L.geoJSON(sanFranAirport, {
 onEachFeature: function(feature, layer) {
   console.log(feature);
   layer.bindPopup("<h2>" + feature.properties.city + "</h2><br><h3>"+ feature.properties.name +"</h3>");
 }
}).addTo(map);


// Tile Layer
let tLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  // id: 'mapbox/streets-v11',
  // Change map style to "satellite-streets-v11"
  id: 'mapbox/satellite-streets-v11',
  // tileSize: 512,
  // zoomOffset: -1,
  accessToken: API_KEY
}).addTo(map);

















// // // Create the map object with a center and zoom level. 
// // // // - mapping_lines, we'll change this point to somewhere between LA and SF
// // // let map = L.map("mapid", {
// // //     center: [
// // //       36.1733, -120.1794
// // //     ],
// // //     zoom: 7
// // //   });

// // // setView() method does the same as the above function 
// // // Create the map object with center at the San Francisco airport.
// // // let map = L.map('mapid').setView([37.6213, -122.3790], 5);



// //   // Coordinates for each point to be used in the line.
// // // let line = [
// // //   [33.9416, -118.4085],
// // //   [37.6213, -122.3790]
// // // ];

// // // Map Multiple Lines
// // // Coordinates for each point to be used in the polyline.
// // let line = [
// //   [33.9416, -118.4085],
// //   [37.6213, -122.3790],
// //   [40.7899, -111.9791],
// //   [47.4502, -122.3088]
// // ];



// // // Create a polyline using the line coordinates and make the line red.
// // L.polyline(line, {
// //   // color: "red"
// //   // change line color to yellow
// //   color: 'yellow'
// // }).addTo(map);

// //    // We create the tile layer that will be the background of our map.
// // let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// //   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
// //   maxZoom: 18,
// //   // id: 'mapbox/streets-v11',
// //   // Change map style to "satellite-streets-v11"
// //   id: 'mapbox/satellite-streets-v11',
// //   // tileSize: 512,
// //   // zoomOffset: -1,
// //   accessToken: API_KEY
// // });
// // // Then we add our 'graymap' tile layer to the map.
// // streets.addTo(map);

// // SKILL DRILL
// // Edit your logic.js to create an airline route from SFO to John F. Kennedy International Airport (JFK) 
// // with two stops, Austin-Bergstrom International Airport (AUS) and Toronto Pearson International Airport (YYZ). 
// // Make the route a blue dashed line, with a weight of 4 and opacity of 0.5 on the light map.
// // Hint: You'll need to find the coordinates for some of these airports.
// // Bonus: Add your city or another city as a stopping point.

// let map = L.map('mapid').setView([39.5, -98.35], 5);


// // Coordinates for each point to be used in the SKILLDRILL.
// let line = [
//   [37.6213, -122.3790], //SF
//   [30.1975, -97.6664], //AUS
//   [43.6777, -79.6248], //YYZ
//   [42.3656, -71.0096], //BOS
//   [40.6413, -73.7781] //JFK
//   ];

//   // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//   color: 'blue',
//   dashArray: '1 2 3 4'
//   , weight: '4'
//   , fillOpacity: '0.5'
// }).addTo(map);

// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//   maxZoom: 18,
//   // id: 'mapbox/streets-v11',
//   // Change map style to "satellite-streets-v11"
//   id: 'mapbox/satellite-streets-v11',
//   // tileSize: 512,
//   // zoomOffset: -1,
//   accessToken: API_KEY
// }).addTo(map);







































// // previous module work -->  (we're on 13.4.3 map lines, for the work above here)
// // let circle = L.circleMarker([34.0522,-118.2437], {
// //   radius: 300,
// //   color: 'black',
// //   fillColor: '#ffffa1'
// // }).addTo(map);

// // //   //  Add a marker to the map for Los Angeles, California.
// // // let marker = L.marker([34.0522, -118.2437]).addTo(map);

// // let marker2 = L.circle([34.0522, -118.2437], {
// //   radius: 100
// // }).addTo(map);





// //////////////////////
// // 13.4.2
// // Map Multiple Points
// //

// // An array containing each city's location, state, and population.
// // [TK] - this array has been cut and moved to 'cities.js' file
// // create a link to that file.  First, go to index.html and put the reference to 'cities.js' in there
// // // Get data from cities.js
// // let cityData = cities;

// // Add multiple markers by iterating through the cities array
// // Take the code from above (single point mapping) and swap out 'marker' for 'cities' -->

// // Loop through the cities array and create one marker for each city.
// // cityData.forEach(function(city) {
// //   console.log(city)
// //   L.marker(city.location)
// //   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " 
// //   + city.population.toLocaleString() + "</h3>")
// //   .addTo(map)
// //  });


//  // Change the marker for each city to a circle with radius equiv to population
// //  cityData.forEach(function(city) {
// //   console.log(city)
// //   L.circleMarker((city.location), {
// //     radius: city.population/100000
// //   })
// //   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " 
// //   + city.population.toLocaleString() + "</h3>")
// //   .addTo(map)
// //  });

//  //SKILL DRILL
//  //Edit the logic.js file to create an orange circle popup marker for each city,
//  // with a lineweight of 4, a radius where the population number is decreased by 200,000,  
// //  // that's on a dark map. When you click on the circle, the popup should display
// //  // the city, state, and the population formatted with a thousands separator.

// //  cityData.forEach(function(city) {
// //   console.log(city)
// //   L.circleMarker((city.location), {
// //     radius: city.population/200000
// //     ,color: 'orange'
// //     ,weight: 4
    
// //   })
// //   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " 
// //   + city.population.toLocaleString() + "</h3>")
// //   .addTo(map)
// //  });




