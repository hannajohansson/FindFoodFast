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


//get current date and weekday
function getTodaysDate(){
	console.log("came to getTodaysDate function")
	var dt = new Date();
	var todayDate = dt.toLocaleDateString();
	document.getElementById("todaysDate").innerHTML = todayDate;
	console.log ("todays date:", todayDate);

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
	console.log("todays weekday: ", n);
}



//get current position
// MAP: Geolocation
// from lecture slides


function checkGeolocation() {
	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(success, error);
	}else{
		alert("Your browser doesnt support geolocation, sorry.");
	}
}

function success(position){
	geocoder = new google.maps.Geocoder();
	var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	var myOptions ={
		zoom: 15, center: latlng,
		mapTypeControl: false, navigationControlOptions:
		{style: google.maps.NavigationControlStyle.SMALL},
		mapyTypeId: google.maps.MapTypeId.ROADMAP};

	map = new google.maps.Map(document.getElementById("map"), myOptions);

	var marker = new google.maps.Marker({
		position: latlng,
		map: map,
		title: "You are here!"});

	console.log("Successful to generate map.")
}

//Error when generating map based on current position
function error(){
	alert("Your browser does not support geolocation, sorry. You will see the restaurant of the last time you used this app.");
	console.log("Browser error.")
}

//show map on map page
function showMap(){
	console.log("inside showMap")
	var eurecom = new google.maps.LatLng(43.614394, 7.071554);
	var casino = new google.maps.LatLng(43.617813, 7.075229);
	var sunofbun = new google.maps.LatLng(43.614739, 7.070859);
	var subway = new google.maps.LatLng(43.618415, 7.075606);
	var lecrous = new google.maps.LatLng(43.616613, 7.070285);
	var artoise = new google.maps.LatLng(43.617949, 7.074936);
	var olivier = new google.maps.LatLng(43.618150, 7.075171);

	var myOptions ={
		zoom: 15,
		center: eurecom,
		mapTypeControl: false,
		navigationControlOptions:
		{style: google.maps.NavigationControlStyle.SMALL},
		mapyTypeId: google.maps.MapTypeId.ROADMAP};

	var map = new google.maps.Map(document.getElementById('map'), myOptions);


	var marker = new google.maps.Marker({
		position: eurecom,
		map: map
	});
	var marker = new google.maps.Marker({
		position: casino,
		map: map,
		icon: 'http://www.google.com/mapfiles/markerE.png'
	});
	var marker = new google.maps.Marker({
		position: sunofbun,
		map: map,
		icon: 'http://www.google.com/mapfiles/markerA.png'
	});
	var marker = new google.maps.Marker({
		position: subway,
		map: map,
		icon: 'http://www.google.com/mapfiles/markerF.png'
	});
	var marker = new google.maps.Marker({
		position: lecrous,
		map: map,
		icon: 'http://www.google.com/mapfiles/markerB.png'
	});
	var marker = new google.maps.Marker({
		position: artoise,
		map: map,
		icon: 'http://www.google.com/mapfiles/markerC.png'
	});
	var marker = new google.maps.Marker({
		position: olivier,
		map: map,
		icon: 'http://www.google.com/mapfiles/markerD.png'
	});

	console.log("Successful to generate map.")
}



