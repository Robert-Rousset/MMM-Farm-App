var eggSize = document.querySelector('#eggSize')
var eggNumber = document.querySelector('#eggNumber')
var orderUpButton = document.querySelector('#orderUp')

var bagNumber = document.querySelector('#bagNumber')
var gimmeBagsButton = document.querySelector('#bagsButton')

var chickenNumber = document.querySelector('#chickenNumber')
var chickenButton = document.querySelector('#chickenButton')

var orderList = document.querySelector('.orderList')

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

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -32.2115194, lng: 115.863934, },
    zoom: 14,
  });
  console.log(map)
}