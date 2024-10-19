(function showData() {
  var todayDate = new Date();
  document.getElementById('dataContainer').innerText = todayDate.toDateString();
})();

// 03: 23 : 33 PM
// Long Approach
function showTime() {
  var todayDate = new Date();
  var hours = todayDate.getHours(); // 0 - 23
  var minutes = todayDate.getMinutes(); // 0 -59
  var seconds = todayDate.getSeconds(); // 0 - 59

  var session = 'AM';

  if (hours == 0) {
    hours = 12;
  } else if (hours > 12) {
    session = 'PM';

    hours = hours - 12; // 15 - 12 = 3
  }
  hours = hours < 10 ? 0 + '' + hours : hours;
  minutes = minutes < 10 ? 0 + '' + minutes : minutes;
  seconds = seconds < 10 ? 0 + '' + seconds : seconds;

  var clockTime = hours + ' : ' + minutes + ' : ' + seconds + ' ' + session;
  document.getElementById('clockContainer').innerText = clockTime;
}

// Short Approach
// function showTime() {
//   var clockTime = new Date().toLocaleTimeString([], {
//     hour: '2-digit',
//     minute: '2-digit',
//     second: '2-digit',
//   });

//   document.getElementById('clockContainer').innerText = clockTime;
// }

var intervalRef;
function startClock() {
  intervalRef = setInterval(showTime, 1000);
}

function stopClock() {
  clearInterval(intervalRef);
}
