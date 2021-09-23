var time = 0;
var running = 0;
var lapsContainer = document.querySelector('.laps');


function startPause(){
    if(running == 0){
        running = 1;
        increment();
    document.getElementById("start").innerHTML = "Pause";
    document.getElementById("startPause").style.backgroundColor = "red";    
    document.getElementById("startPause").style.borderColor = "red";
    }
    else{
        running = 0;
    document.getElementById("start").innerHTML = "Resume";  
    document.getElementById("startPause").style.backgroundColor = "green";  
    document.getElementById("startPause").style.borderColor = "green";
    }
}
function reset(){
    running = 0;
    time = 0;
    document.getElementById("start").innerHTML = "Start";
    document.getElementById("output").innerHTML = "0:00:00:00";
    document.getElementById("startPause").style.backgroundColor = "green";  
    document.getElementById("startPause").style.borderColor = "green";
    lapsContainer.innerHTML = '';
}


function lap() {
    
     var li = document.createElement('li');
     li.innerText =document.getElementById("output").innerText;
     lapsContainer.appendChild(li);
    
}
function increment(){
    if(running == 1){
        setTimeout(function(){
            time++;
            var mins = Math.floor(time/10/60);
            var secs = Math.floor(time/10 % 60);
            var hours = Math.floor(time/10/60/60); 
            var tenths = time % 10;
            if(mins < 10){
                mins = "0" + mins;
            } 
            if(secs < 10){
                secs = "0" + secs;
            }
            document.getElementById("output").innerHTML = hours + ":" + mins + ":" + secs + ":" + tenths + "0";
            document.getElementById("TotalPengerjaan").innerHTML ="Total Pengerjaan"+ hours + ":" + mins + ":" + secs + ":" + tenths + "0";
            increment();
        },100)
    }
    
}

