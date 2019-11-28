function initMap() {
  
  var mapOptions = {
    zoom: 14,
    center: {lat: 41.742951, lng: -87.733638},
    mapTypeId: 'satellite'
  };
  
  var map = new google.maps.Map(document.getElementById('map'),
    mapOptions);
  
  // The marker, positioned at Uluru
  var start = {lat: 41.742951, lng: -87.733638};
  var workStart = {lat: 41.724962, lng: -87.741513};
  var schoolStart = {lat: 41.743090, lng: -87.732905};
  var marker = new google.maps.Marker({position: start, map: map});
  var workMarker = new google.maps.Marker({position: workStart, map: map});
  var schoolMarker = new google.maps.Marker({position: schoolStart, map: map});
  
  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h3 id="firstHeading" class="firstHeading">Childhood Home</h3>'+
      '<div id="bodyContent">'+
      '<img class="mapPics" src ="media/house.png">'+
      '</div>'+
      '</div>';
  
  var workString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h3 id="firstHeading" class="firstHeading">First Job</h3>'+
      '<div id="bodyContent">'+
      '<img class="mapPics" src ="media/work.png">'+
      '</div>'+
      '</div>';
  
  var schoolString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h3 id="firstHeading" class="firstHeading">First School</h3>'+
      '<div id="bodyContent">'+
      '<img class="mapPics" src ="media/school.png">'+
      '</div>'+
      '</div>';
  
  var homeWindow = new google.maps.InfoWindow({
    content: contentString
  });
  
  var workWindow = new google.maps.InfoWindow({
    content: workString
  });
  
  var schoolWindow = new google.maps.InfoWindow({
    content: schoolString
  });
  
  marker.addListener('click', function() {
    homeWindow.open(map, marker);
    workWindow.close();
    schoolWindow.close();
  });
  
  workMarker.addListener('click',function() {
    workWindow.open(map, workMarker);
    homeWindow.close();
    schoolWindow.close();
  });
  
  schoolMarker.addListener('click',function() {
    schoolWindow.open(map, schoolMarker);
    workWindow.close();
    homeWindow.close();
  });
}

$('.bxslider').bxSlider({
  auto: true,
  autoControls: true,
  stopAutoOnClick: true,
  pager: true,
  slideWidth: 600
});
