const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset')

const secId = document.getElementById('sec');
const tensId = document.getElementById('tens');
var sec= 0;
var tens = 0;
var interval;

start.onclick = ()=>{
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
    
}
stop.onclick = ()=>{
    clearInterval(interval);
}
reset.onclick = ()=>{
    clearInterval(interval);
    tens = "00";
  	sec = "00";
    tensId.innerHTML = tens;
  	secId.innerHTML = sec;
  
}

function startTimer() {
    tens++; 
    
    if(tens <= 9){
      tensId.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      tensId.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      console.log("seconds");
      sec++;
      secId.innerHTML = "0" + sec;
      tens = 0;
      tensId.innerHTML = "0" + 0;
    }
    
    if (sec > 9){
      secId.innerHTML = sec;
    }
}


/*window.onload = function () {
  
  var seconds = 00; 
  var tens = 00; 
  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var Interval ;

  buttonStart.onclick = function() {
    
    clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
  }
  
    buttonStop.onclick = function() {
       clearInterval(Interval);
  }
  

  buttonReset.onclick = function() {
     clearInterval(Interval);
    tens = "00";
  	seconds = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
  }
  
   
  
  function startTimer () {
    tens++; 
    
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
  
  }
  

} */