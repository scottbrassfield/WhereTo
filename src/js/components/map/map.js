var React = require('react');
var ReactDOM = require('react-dom');

// var map;
// function initMap() {
//   map = new google.maps.Map(document.getElementByID('map'), {
//     center: {lat: -34.397, lng: 150.644},
//     zoom: 8
//   });
// }

const TheMap = () => {
  return (
    <div>
      <h1>Locations</h1>
      <div id='map'></div>
    </div>
  )
}

module.exports = TheMap
