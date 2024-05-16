var countdownText = document.querySelector("#time_left");

// Set the date we're counting down to
//var distance = 10800000;
distance = 3000;
// Update the count down every 1 second
var x = setInterval(function() {

// Get todays date and time
var now = new Date().getTime();

// Find the distance between now an the count down date

console.log(distance);

// Time calculations for days, hours, minutes and seconds
var minutes = Math.floor((distance % (1000 * 60 * 60 * 25)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//Zeros
var minutes = (minutes.toLocaleString(undefined,{minimumIntegerDigits: 2}));
var seconds = (seconds.toLocaleString(undefined,{minimumIntegerDigits: 2}));
countdownText.innerHTML = "Time Left:".concat(" ",minutes,":", seconds);
distance-=1000;
// If the count down is finished, write some text
if (seconds < 0) {
    clearInterval(x);
	countdownText.innerHTML = "Time Left: 00:00";
	document.getElementById("submit").click();
	console.log("test")
  }
}, 1000);