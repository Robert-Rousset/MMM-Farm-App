var eggSize = document.querySelector('#eggSize')
var eggNumber = document.querySelector('#eggNumber')
var orderUpButton = document.querySelector('#orderUp')

var bagNumber = document.querySelector('#bagNumber')
var gimmeBagsButton = document.querySelector('#bagsButton')

var chickenNumber = document.querySelector('#chickenNumber')
var chickenButton = document.querySelector('#chickenButton')

var orderList = document.querySelector('.orderList')
var totalCostShow = document.querySelector('.total')
var allOrders = document.querySelector('#orderSection')
var allOrdersTotalCost = document.querySelector('.yeah')

// search property
var directionButton = document.querySelector('.searchAddressButton');
var searchBar = document.querySelector('#searchAddress');

var timePrinted = document.querySelector('.time')

var finalSubmitButton = document.querySelector('#finalSubmit')
var addingDollarSymbol = document.querySelector('.totalCost')

var number = 0;

orderUpButton.addEventListener('click', orderUpFunction)
function orderUpFunction(){
    // creating an element p //
    var eggOrderList = document.createElement('p')
    eggOrderList.textContent = eggNumber.value + " " + eggSize.value +" "
    // appending this p item to the orderList
    orderList.append(eggOrderList)
    eggOrderList.classList.add('order')
    // To calculate the total
    if (eggSize.value == "Dozen Large"){
      var totalCost = Math.floor(5 * eggNumber.value)
      var showCost = document.createElement('p')
      showCost.textContent = "$" + totalCost + ".00." + "\t"
      eggOrderList.append(showCost)
      grandTotal(totalCost)
    }
    if (eggSize.value == "Dozen Extra Large"){
      var totalCost = Math.round(5.500 * 100) / 100 * eggNumber.value
      var showCost = document.createElement('p')
      showCost.textContent = "$" + totalCost + ".\t"
      eggOrderList.append(showCost)
      grandTotal(totalCost)
    }
    if (eggSize.value == "Dozen Jumbo"){
      var totalCost = Math.floor(6 * eggNumber.value)
      var showCost = document.createElement('p')
      showCost.textContent = "$" + totalCost + ".00." + "\t"
      eggOrderList.append(showCost)
      grandTotal(totalCost)
    }
    var clearButton = document.createElement('button')
    clearButton.classList.add('clearButton')
    eggOrderList.append(clearButton)
    clearButton.addEventListener('click', clearButtonFunction)
    function clearButtonFunction(){
        eggOrderList.remove()
        clearButton.remove()
        takeOffTotal(totalCost)
}}

gimmeBagsButton.addEventListener('click', gimmeBagsFunction)
function gimmeBagsFunction(){
    var bagOrderList = document.createElement('p')
    bagOrderList.textContent = bagNumber.value + " Mannure Bags ";
    orderList.append(bagOrderList)
    var totalCost = Math.floor(5 * bagNumber.value)
    var showCost = document.createElement('p')
    showCost.textContent = "$" + totalCost + ".00." + "\t"
    bagOrderList.append(showCost)
    var clearButton = document.createElement('button')
    clearButton.classList.add('clearButton')
    bagOrderList.append(clearButton)
    bagOrderList.classList.add('order')
    grandTotal(totalCost)
    clearButton.addEventListener('click', clearButtonFunction)
    function clearButtonFunction(){
        bagOrderList.remove()
        clearButton.remove()
        takeOffTotal(totalCost)
}}

chickenButton.addEventListener('click', chickenButtonFunction)
function chickenButtonFunction(){
    var chickenOrderList = document.createElement('p')
    chickenOrderList.textContent = chickenNumber.value + " Chickens "
    orderList.append(chickenOrderList)
    var totalCost = Math.floor(5 * chickenNumber.value)
    var showCost = document.createElement('p')
    showCost.textContent = "$" + totalCost + ".00." + "\t"
    chickenOrderList.append(showCost)
    var clearButton = document.createElement('button')
    clearButton.classList.add('clearButton')
    chickenOrderList.classList.add('order')
    chickenOrderList.append(clearButton)
    grandTotal(totalCost)
    clearButton.addEventListener('click', clearButtonFunction)
    function clearButtonFunction(){
        chickenOrderList.remove()
        clearButton.remove()
        takeOffTotal(totalCost)
}}

function grandTotal(totalCost) {
  var newTotal = Math.floor(Number(totalCostShow.textContent) + Number(totalCost))
  addingDollarSymbol.textContent = "Total Cost: $" + newTotal + ".00"
  totalCostShow.textContent = newTotal
}
function takeOffTotal(totalCost){
  var newTotal = Math.floor(Number(totalCostShow.textContent) - Number(totalCost))
  addingDollarSymbol.textContent = "Total Cost: $" + newTotal + ".00"
  totalCostShow.textContent = newTotal
}

function initMap() {
  //TO CREATE THE MAP AND PLACE IT ON THE DIV WITH ID MAP
  let map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -32.210249, lng: 115.868065},
    zoom: 14,
  });

  var infowindow = new google.maps.InfoWindow({
    content: "<h1>MMM Farm</h1>",
  });
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(-32.210249, 115.868065),
    map,
  });
  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });

  function searchedMarker(myHousesLocation){
    var marker = new google.maps.Marker({
      position: myHousesLocation,
      map: map
    })
  }
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
    var myHousesLocation = finalResponse.results[0].geometry.location
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
    customerTime.textContent = "You are expected to pick up your order in: " + timeTravelled + ".";
    timePrinted.append(customerTime)
    finalSubmitButton.addEventListener('click', sendTheMail)
    function sendTheMail(){
      Email.send({
      SecureToken : "9a616175-336a-43c3-93f3-00164d685c35",
      To : 'map_of_cydonia@live.com',
      From : "triplemfarmeggs@gmail.com",
      Subject : "Order Up!",
      Body : customerTime.textContent + "\n" + allOrders.textContent+ "\n" + allOrdersTotalCost.textContent + ".",
      }).then(finalSubmitButton.textContent = "Thank You! Your order has been submitted. See you soon!")}
  })
}
  var autocomplete = new google.maps.places.Autocomplete(searchBar)
  autocomplete.bindTo('bounds', map)
}





  