var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.742951, lng: -87.733638},
    zoom: 13
  });
  // The marker, positioned at Uluru
  var start = {lat: 41.742951, lng: -87.733638};
  var marker = new google.maps.Marker({position: start, map: map});
  
  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Childhood Home</h1>'+
      '<div id="bodyContent">'+
      '<img class="mapPics" src ="media/house.png">'+
      '</div>'+
      '</div>';
  
  var homeWindow = new google.maps.InfoWindow({
    content: contentString
  });
  
  marker.addListener('click', function() {
    map.setCenter(marker.getPosition());
    homeWindow.open(map, marker);
  });
}
