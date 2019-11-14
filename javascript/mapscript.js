var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.742951, lng: -87.733638},
    zoom: 40
  });
  // The marker, positioned at Uluru
  var start = {lat: 41.742951, lng: -87.733638};
  var marker = new google.maps.Marker({position: start, map: map});
  
  marker.addListener('click', function() {
    map.setZoom(8);
    map.setCenter(marker.getPosition());
  });
}
