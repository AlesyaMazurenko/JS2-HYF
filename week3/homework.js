
function delayStr(delay, stringToLog) {
    setTimeout(() => {console.log(stringToLog)}, delay*1000)
}

// delayStr(3, 'This dtring logged after 3 seconds')
// delayStr(5, "This dtring logged after 5 seconds");

// 4.Create two functions and assign them to two different variables.
//  One function logs out Earth, the other function logs out Saturn.
//  Now create a new third function that has one parameter: planetLogFunction.
//  The only thing the third function should do is call the provided
//   parameter function. Try call the third function once with the
//    Earth function and once with the Saturn function.

function earthLogger() {
    console.log('Earth') 
}

function saturnLogger() {
    console.log('Saturn');
}

function planetLogFunction(param) {
    param();
}
planetLogFunction(saturnLogger);


// 5.Create a button with the text called "Log location".When this 
// button is clicked the location(latitude, longitude) of the user 
// should be logged out using this browser api

function myLocation() {
  const status = document.querySelector("#status");
  const mapLink = document.querySelector("#map-link");

   mapLink.href = "";
    mapLink.textContent = "";
    let map;

 function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = "";
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
     mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }

  function error() {
    status.textContent = "Unable to retrieve your location";
  }

  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser";
  } else {
    status.textContent = "Locating…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

document.querySelector("#find-me").addEventListener("click", myLocation);

// Google map
// let map;

// async function initMap() {
//   //@ts-ignore
//   const { Map } = await google.maps.importLibrary("maps");

//   map = new Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }

// initMap();

// 7. Create a function called runAfterDelay. It has two parameters: delay and callback. When called the function should wait delay seconds and then call the provided callback function. Try and call this function with different delays and different callback functions

function runAfterDelay(delay, callback) {
    setTimeout(callback, delay*1000)
}

runAfterDelay(4, function () {
    console.log('should be logged after 4 seconds');
})

