var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.742951, lng: -87.733638},
    zoom: 50
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}
