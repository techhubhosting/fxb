/*****
Original Snippet from:
https://de.acervolima.com/so-erstellen-sie-einen-countdown-timer-mit-javascript/
Thanks for sharing!
 *****/

/* Enter here your End date in this format! */
var endDate = "mar 07, 2023 00:00:00";

/* ***** Do not change this code below. ***** */
var deadline = new Date(endDate).getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var t = deadline - now;
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((t % (1000 * 60)) / 1000);
  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;
  
  /* Output the End date. (Only for Demo) */
  document.getElementById("deadline").innerHTML = endDate;

  if (t < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "COUNTDOWN FINISHED";
    document.getElementById("day").innerHTML = "0";
    document.getElementById("hour").innerHTML = "0";
    document.getElementById("minute").innerHTML = "0";
    document.getElementById("second").innerHTML = "0";
  }
}, 1000);
