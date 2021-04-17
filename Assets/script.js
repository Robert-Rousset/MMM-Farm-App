var eggSize = document.querySelector('#eggSize')
var eggNumber = document.querySelector('#eggNumber')
var orderUpButton = document.querySelector('#orderUp')

var bagNumber = document.querySelector('#bagNumber')
var gimmeBagsButton = document.querySelector('#bagsButton')

var chickenNumber = document.querySelector('#chickenNumber')
var chickenButton = document.querySelector('#chickenButton')

var orderList = document.querySelector('.orderList')
// search property
var directionButton = document.querySelector('.searchAddressButton');
<<<<<<< HEAD
var searchBar = document.querySelector('#searchAddress')
let directionsService;
let directionsDisplay;
=======
var searchBar = document.querySelector('#searchAddress');
>>>>>>> a471ddc028e30017ee76a22871a35a10ea9b6118



var timePrinted = document.querySelector('.time')

orderUpButton.addEventListener('click', orderUpFunction)
function orderUpFunction(){
    // creating an element p //
    var eggOrderList = document.createElement('p')
    eggOrderList.textContent = eggNumber.value + " " + eggSize.value +" "
    // appending this p item to the orderList
    orderList.append(eggOrderList)
    var clearButton = document.createElement('button')
    clearButton.classList.add('clearButton')
    eggOrderList.append(clearButton)
    clearButton.addEventListener('click', clearButtonFunction)
    function clearButtonFunction(){
        eggOrderList.remove()
        clearButton.remove()
}}

gimmeBagsButton.addEventListener('click', gimmeBagsFunction)
function gimmeBagsFunction(){
    var bagOrderList = document.createElement('p')
    bagOrderList.textContent = bagNumber.value + " Mannure Bags ";
    orderList.append(bagOrderList)
    var clearButton = document.createElement('button')
    clearButton.classList.add('clearButton')
    bagOrderList.append(clearButton)
    clearButton.addEventListener('click', clearButtonFunction)
    function clearButtonFunction(){
        bagOrderList.remove()
        clearButton.remove()
}}

chickenButton.addEventListener('click', chickenButtonFunction)
function chickenButtonFunction(){
    var chickenOrderList = document.createElement('p')
    chickenOrderList.textContent = chickenNumber.value + " Chickens "
    orderList.append(chickenOrderList)
    var clearButton = document.createElement('button')
    clearButton.classList.add('clearButton')
    chickenOrderList.append(clearButton)
    clearButton.addEventListener('click', clearButtonFunction)
    function clearButtonFunction(){
        chickenOrderList.remove()
        clearButton.remove()
}}

function initMap() {
  //TO CREATE THE MAP AND PLACE IT ON THE DIV WITH ID MAP
  let map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -32.210249, lng: 115.868065},
    zoom: 14,
  });
<<<<<<< HEAD
 
 
//THE FUNCTION THAT CREATES MARKERS
function createMarker(options, html) {
  var marker = new google.maps.Marker(options); 
    google.maps.event.addListener(marker, "click", function () {
      infoWindow.setContent(html);
      infoWindow.open(options.map, this);
    });
  return marker;
}
//PLACING THE MARKER IN THE DESIRED DESTINATION
var marker = createMarker({
  position: new google.maps.LatLng(-32.210249, 115.868065),
  map: map
}, "<h1>MMM Farm</h1>");

directionButton.addEventListener('click' ,getLocation);
function getLocation(){
  navigator.geolocation.getCurrentPosition(function(position){
    directionsInfo.innerHTML=`start:${position.coords.latitude} ,${position.coords.longitude}`;
    var pos =new google.maps.latlng(position.coords.latitude ,position.coords.longitude);
  
  });
}


var autocomplete = new google.maps.places.Autocomplete(searchBar)
autocomplete.bindTo('bounds',map)


directionsService= new google.maps.DirectionsService();
directionsDisplay=  new google.maps.DirectionsRenderer();
directionsDisplay.setMap(directionsMap)
let destination = google.map.latlng (-32.210249, 115.868065 )
=======
  function searchedMarker(myHousesLocation){
    var marker = new google.maps.Marker({
      position: myHousesLocation,
      map: map
    })
  }
  //THE FUNCTION THAT CREATES MARKERS
  function createMarker(options, html) {
    var marker = new google.maps.Marker(options); 
      google.maps.event.addListener(marker, "click", function () {
        infoWindow.setContent(html);
        infoWindow.open(options.map, this);
      });
    return marker;
  }
  //PLACING THE MARKER IN THE DESIRED DESTINATION
  var marker = createMarker({
    position: new google.maps.LatLng(-32.210249, 115.868065),
    map: map
  }, "<h1>MMM Farm</h1>");
>>>>>>> a471ddc028e30017ee76a22871a35a10ea9b6118

  directionButton.addEventListener('click', getSearchValue)
  function getSearchValue(){
    var inputLocation = searchBar.value
    geocode(inputLocation)
  }

  function geocode(inputLocation){
  
    var geocoderAPIUrl = "https://maps.googleapis.com/maps/api/geocode/json?address="+inputLocation+"&key=AIzaSyBfg5w_o5_G8TUh8qvxtowKePezRpQzcpU"

  fetch(geocoderAPIUrl).then(function (response){
    return response.json()
  }).then(function(finalResponse){


<<<<<<< HEAD
function calcRoute(start,destination){
  let request = {
    origin: start,
    destination: google.map.latlng(-32.210249, 115.868065 ),
    travelMode: google.maps.TravelMode.DRIVING
  };
  directionsService.route(request, function(Response, status){
    if(status= 'ok'){
      directionsDisplay.setDirection(Response);
    }
=======
    var myHousesLocation = finalResponse.results[0].geometry.location
>>>>>>> a471ddc028e30017ee76a22871a35a10ea9b6118

    searchedMarker(myHousesLocation)
    calcRoute()
  })
}

var directionsService = new google.maps.DirectionsService();
var directionsDisplay = new google.maps.DirectionsRenderer();

directionsDisplay.setMap(map)

function calcRoute(){
  var request = {
    origin: searchBar.value,
    destination: { lat: -32.210249, lng: 115.868065 },
    travelMode: google.maps.TravelMode.DRIVING,
  }

  directionsService.route(request, function (result){
    var timeTravelled = result.routes[0].legs[0].duration.text
    console.log(timeTravelled)
    var customerTime = document.createElement('h1')
    customerTime.textContent = "Estimated Time of Arrival: " + timeTravelled;
    timePrinted.append(customerTime)
  })
}
<<<<<<< HEAD

}
=======
  var autocomplete = new google.maps.places.Autocomplete(searchBar)
  autocomplete.bindTo('bounds', map)
}


    
>>>>>>> a471ddc028e30017ee76a22871a35a10ea9b6118
