var interval;
var hour = 0;
var min = 0;
var sec = 0;
var msec = 0;
var hourSlot = document.getElementById("hour");
var minSlot = document.getElementById("min");
var secSlot = document.getElementById("sec");
var msecSlot = document.getElementById("msec");
var startBtn = document.getElementById("start");
function stopwatch(){
    msec++;
    msecSlot.innerHTML = msec;
    if(msec > 98){
        sec++;
        secSlot.innerHTML = sec;
        msec = 0;
    }
    else if(sec > 58){
        min++;
        minSlot.innerHTML = min;
        sec = 0;
    }
    else if(min > 58){
        hour++;
        hourSlot.innerHTML = hour;
        min = 0;
    }
}

function start(){
    interval = setInterval(stopwatch,10);
    startBtn.disabled = true;
}
function pause(){
    clearInterval(interval);
    startBtn.disabled = false;
    startBtn.innerHTML = "Resume";
}
function reset(){
    clearInterval(interval)
    startBtn.disabled = false;
    startBtn.innerHTML = "Start";
    hourSlot.innerHTML = "0" + 0;
    minSlot.innerHTML = "0" + 0;
    secSlot.innerHTML = "0" + 0;
    msecSlot.innerHTML = "0" + 0;
}