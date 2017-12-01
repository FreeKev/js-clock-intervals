
// Break down requirements into concrete steps (Pseudocode)
// Solve a smaller version of the problem
// Dont be afraid to write throw-away code.

// function secondRotation(x) {
//   (59/60)*360+1
// } // returns (59 / 60) * 360
//
// for (i=0, i<60, i++){
//
// }

var second_degrees = 0;
var minute_degrees = 0;
var hour_degress = 0;

// setAttribut("src","./images")

var secondRotation = function() {
  //  1st edition error
  // degree var = document.getElementById("second");
  // degrees = split.degrees("d")
  // if (degrees < 360) {
  //   degrees = degrees + 6;
  // }
  second_degrees += 6;
  if (second_degrees === 360) {
    second_degrees = 0;
  }
  // console.log('updating seconds');
  var el = document.getElementById("second");
  el.style.transform = "rotate(" + second_degrees + "deg)";
}

var minuteRotation = function() {
  minute_degrees += 6;
  if (minute_degrees === 360) {
    minute_degrees = 0;
  }
  var el = document.getElementById("minute");
  el.style.transform = "rotate(" + minute_degrees + "deg)";
}

var hourRotation = function() {
  hour_degress += 30;
  if (hour_degrees === 360) {
    hour_degrees = 0;
  }
  var el = document.getElementById("hour");
  el.style.transform = "rotate(" + hour_degress + "deg)";
}

var clockrun = function(){
  var minterval = setInterval(minuteRotation, 60000);
  var sinterval = setInterval(secondRotation, 1000);
  var hinterval = setInterval(hourRotation, 3600000);
}

clockrun();

// FUNCTIONING DIGIAL
// document.getElementById("hour")
// document.getElementById("minute")
// document.getElementById("second")

// function startTime() {
//     var today = new Date();
//     var h = today.getHours();
//     var m = today.getMinutes();
//     var s = today.getSeconds();
//     m = checkTime(m);
//     s = checkTime(s);
//     document.getElementById('txt').innerHTML =
//     h + ":" + m + ":" + s;
//     var t = setTimeout(startTime, 500);
// }
// function checkTime(i) {
//     if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
//     return i;
// }


// TIMER
// var myVar = setInterval(myTimer, 1000);
//
// function myTimer() {
//     var d = new Date();
//     document.getElementById("demo").innerHTML = d.toLocaleTimeString();
// }
// DIGITAL CLOCK
// <!DOCTYPE html>
// <html>
// <head>
// <script>
// function startTime() {
//     var today = new Date();
//     var h = today.getHours();
//     var m = today.getMinutes();
//     var s = today.getSeconds();
//     m = checkTime(m);
//     s = checkTime(s);
//     document.getElementById('txt').innerHTML =
//     h + ":" + m + ":" + s;
//     var t = setTimeout(startTime, 500);
// }
// function checkTime(i) {
//     if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
//     return i;
// }
// </script>
// </head>
//
// <body onload="startTime()">
//
// <div id="txt"></div>
//
// </body>
// </html>
