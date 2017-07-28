//RSVP javascript file

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAkxZSKuAL5Rz1uFgZMQw8FwejCkjfxgOY",
    authDomain: "babyshower2017-2faa4.firebaseapp.com",
    databaseURL: "https://babyshower2017-2faa4.firebaseio.com",
    projectId: "babyshower2017-2faa4",
    storageBucket: "",
    messagingSenderId: "507071605615"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  
  var name = "";
  var attending = "";
  var going = "";
  console.log("js running");

  $("#going").on("click", function() {
  	console.log("click going");
  	event.preventDefault();
  	var responseDate = new Date();

  	//get iputs
  	name = $("#name").val().trim();
  	attending = $("#attending").val().trim();
  	going = true;

  	//change what is saved in firebase
  	database.ref().push({
  		name: name,
  		attending: attending,
  		going: going,
  		responded: responseDate
  	});
  	
  });

  $("#not-going").on("click", function(){
  	console.log("click not going");
  	event.preventDefault();
  	var responseDate = new Date();
  	
  	//get iputs
  	name = $("#name").val().trim();
  	attending = $("#attending").val().trim();
  	going = false;

  	//change what is saved in firebase
  	database.ref().push({
  		name: name,
  		attending: attending,
  		going: going,
  		responded: responseDate
  	});
  });