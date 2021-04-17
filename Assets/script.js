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
var searchBar = document.querySelector('#searchAddress')
let directionsService;
let directionsDisplay;



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

calcRoute(location, destination)

console.log(map)
var infoWindow = new google.maps.InfoWindow();


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

  })

}

}
