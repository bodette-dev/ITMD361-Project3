function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 41.742951, lng: -87.733638},
          zoom: 14,
          styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
        });
      }

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
