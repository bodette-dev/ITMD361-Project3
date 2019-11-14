var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.742951, lng: -87.733638},
    zoom: 13
  });
  // The marker, positioned at Uluru
  var start = {lat: 41.742951, lng: -87.733638};
  var workStart = {lat: 41.724962, lng: -87.741513};
  var schoolStart = {lat: 41.743090, lng: -87.732905};
  var marker = new google.maps.Marker({position: start, map: map});
  var workMarker = new google.maps.Marker({position: workStart, map: map});
  var schoolStart = new google.maps.Marker({position: schoolStart, map: map});
  
  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Childhood Home</h1>'+
      '<div id="bodyContent">'+
      '<img class="mapPics" src ="media/house.png">'+
      '</div>'+
      '</div>';
  
  var workString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">First Job</h1>'+
      '<div id="bodyContent">'+
      '<img class="mapPics" src ="media/work.png">'+
      '</div>'+
      '</div>';
  
  var schoolString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">First School</h1>'+
      '<div id="bodyContent">'+
      '<img class="mapPics" src ="media/work.png">'+
      '</div>'+
      '</div>';
  
  var homeWindow = new google.maps.InfoWindow({
    content: contentString
  });
  
  var workWindow = new google.maps.InfoWindow({
    content: workString
  });
  
  var schoolindow = new google.maps.InfoWindow({
    content: schoolString
  });
  
  marker.addListener('click', function() {
    map.setCenter(marker.getPosition());
    homeWindow.open(map, marker);
    workWindow.close();
    schoolWindow.close();
  });
  
  workMarker.addListener('click',function() {
    map.setCenter(workMarker.getPosition());
    workWindow.open(map, WorkMarker);
    homeWindow.close();
    schoolWindow.close();
  });
  
  schoolMarker.addListener('click',function() {
    map.setCenter(workMarker.getPosition());
    schoolWindow.open(map, schoolMarker);
    workWindow.close();
    homeWindow.Close();
  });
}
