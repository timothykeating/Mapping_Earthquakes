// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 14
//   });

  let map= L.map("mapid", {
    center: [34.0522, -118.2437],
    zoom: 4
  });

// let circle = L.circleMarker([34.0522,-118.2437], {
//   radius: 300,
//   color: 'black',
//   fillColor: '#ffffa1'
// }).addTo(map);

// //   //  Add a marker to the map for Los Angeles, California.
// // let marker = L.marker([34.0522, -118.2437]).addTo(map);

// let marker2 = L.circle([34.0522, -118.2437], {
//   radius: 100
// }).addTo(map);



  // We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    // tileSize: 512,
    // zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

//////////////////////
// 13.4.2
// Map Multiple Points
//

// An array containing each city's location, state, and population.
// [TK] - this array has been cut and moved to 'cities.js' file
// create a link to that file.  First, go to index.html and put the reference to 'cities.js' in there
// Get data from cities.js
let cityData = cities;

// Add multiple markers by iterating through the cities array
// Take the code from above (single point mapping) and swap out 'marker' for 'cities' -->

// Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//   console.log(city)
//   L.marker(city.location)
//   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " 
//   + city.population.toLocaleString() + "</h3>")
//   .addTo(map)
//  });


 // Change the marker for each city to a circle with radius equiv to population
//  cityData.forEach(function(city) {
//   console.log(city)
//   L.circleMarker((city.location), {
//     radius: city.population/100000
//   })
//   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " 
//   + city.population.toLocaleString() + "</h3>")
//   .addTo(map)
//  });

 //SKILL DRILL
 //Edit the logic.js file to create an orange circle popup marker for each city,
 // with a lineweight of 4, a radius where the population number is decreased by 200,000,  
 // that's on a dark map. When you click on the circle, the popup should display
 // the city, state, and the population formatted with a thousands separator.

 cityData.forEach(function(city) {
  console.log(city)
  L.circleMarker((city.location), {
    radius: city.population/200000
    ,color: 'orange'
    ,weight: 4
    
  })
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " 
  + city.population.toLocaleString() + "</h3>")
  .addTo(map)
 });




