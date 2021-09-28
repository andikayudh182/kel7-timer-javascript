const timer = document.getElementById('stopwatch');
var days = 0;
var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;



function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();

     
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
   
  }
}

function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);
    days = parseInt(days);
    
    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (hr == 24){
      days += 1;
      min = 0;
      sec = 0;
      hr = 0; 
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    if (days < 10 || days == 0) {
      days = '0' + days;
    }
   
 
    timer.innerHTML = days + ':' + hr + ':' + min + ':' + sec;
   
    setTimeout("timerCycle()", 1000);
 
    
  }
  
  save();
}

function resetTimer() {
  timer.innerHTML = "00:00:00:00";
  stoptime = true;
  days = 0;
  hr = 0;
  sec = 0;
  min = 0;
}

var storedStoptime = localStorage.getItem("storedStoptime");
var storedDays = localStorage.getItem("storedDays");
var storedHours = localStorage.getItem("storedHours");
var storedMinutes = localStorage.getItem("storedMinutes");
var storedSecond = localStorage.getItem("storedSeconds");

function save(){
  var saveStoptime = stoptime;
  var saveDays = days.toString();
  var saveHours = hr.toString();;
  var saveMinutes= min.toString();;
  var saveSeconds = sec.toString();;
 
  localStorage.setItem("storedStoptime", saveStoptime);
  localStorage.setItem("storedDays", saveDays);
  localStorage.setItem("storedHours", saveHours);
  localStorage.setItem("storedMinutes", saveMinutes);
  localStorage.setItem("storedSeconds", saveSeconds);


}

function get(){
  localStorage.getItem("storedStoptime");
  localStorage.getItem("storedDays");
  localStorage.getItem("storedHours");
  localStorage.getItem("storedMinutes");
  localStorage.getItem("storedSeconds");

}




