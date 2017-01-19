/*******************************************************************************************************
 	Authors: Hanna Johansson and Katja Mäenpää.
	File created: 2017-01-18

	The file contains functions which handle the functionality of FindFoodFast startpage.

	This file includes the functions:
	- getDate
	- getCurrentWeekday
	- getLocation
	- geoLocation
	- success
	- error
	- lookup

/*******************************************************************************************************/
window.onload = function() {getTodaysDate()};

//get current date
function getTodaysDate(){
	console.log("came to getTodaysDate function")
	var dt = new Date();
	var todayDate = dt.toLocaleDateString();
	document.getElementById("todaysDate").innerHTML = todayDate;
	console.log ("todays date:", todayDate);
}

//get current weekday
function getCurrentWeekday() {
	var d = new Date();
	var weekday = new Array(7);
	weekday[0] = "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";

	var n = weekday[d.getDay()];
	document.getElementById("myWeekday").innerHTML = n;
}


//get current position
// MAP: Geolocation
// from lecture slides
var map = document.getElementById("mapholder");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    }
    else {
        alert = "Your browser doesn't support geolocation, sorry.";
        console.log("Browser error.")
    }
}

function geoLocation() {
	navigator.geolocation.getCurrentPosition(success, error);
}

//Successful to generate map based on current position
function success(position){
	geocoder = new google.maps.Geocoder();
	var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	var myOptions ={
		zoom: 15, center: latlng,
		mapTypeControl: false, navigationControlOptions:
		{style: google.maps.NavigationControlStyle.SMALL},
		mapyTypeId: google.maps.MapTypeId.ROADMAP};

	map = new google.maps.Map(document.getElementById("mapholder"), myOptions);

	var marker = new google.maps.Marker({
		position: latlng,
		map: map,
		title: "You are here!"});

	console.log("Successful to generate map.")
}

//Error when generating map based on current position
function error(){
	alert("Your browser does not support geolocation.");
	console.log("Browser error.")
}

function lookup() {
	var address = document.getElementById("address").value;
	geocoder.geocode({'address': address},
	function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			map. setCenter(results[0].geometry.location);
			var marker = new google.maps.Marker( {
				map: map, position: results[0].geometry.location});
		}
		else  {
			alert("Geocode was not successful for the following reason: " + status);
		}
	});
}



