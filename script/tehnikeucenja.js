let dugme1 = document.getElementById("dugme-memo")
dugme1.onclick = function(){
    window.open('https://www.youtube.com/watch?v=mzCEJVtED0U');
}

let dugme2 = document.getElementById("dugme-citanje")
dugme2.onclick = function(){
    window.open('https://www.youtube.com/watch?v=ZwEquW_Yij0');
}

let dugme3 = document.getElementById("dugme-mape")
dugme3.onclick = function(){
    window.open('https://app.mindmup.com/map/new/1668125052851');
}

let container = document.getElementById("clock")

let dugmeStart = document.getElementById("start")
dugmeStart.onclick = function(){
  container.style.background = '#13BF6D'
}

let dugmePause = document.getElementById("stop")
dugmePause.onclick = function(){
  container.style.background = '#fc694b'
}

let dugmeReset = document.getElementById("reset")
dugmeReset.onclick = function(){
  container.style.background = '#EEBE2D'
}

let dugmeResume = document.getElementById("resume")
dugmeResume.onclick = function(){
  container.style.background = '#13BF6D'
}

    


var minutes = 25;
var isPaused = false;
var timerId = 0;

$("#length").text(minutes);
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    timerId = setInterval(function () {
      if(!isPaused){
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
            $("#stop").hide();
            $("#resume").hide();
        }

      }

    }, 1000);

}


function startPomodoro(min){

  var fiveMinutes = 60 * min,
  display = $('#time');
  startTimer(fiveMinutes, display);
}

//Stoperica



// Start dugme
$("#start").on("click", function(){
  $("#minus, #plus").attr("disabled", true);

  $(this).hide();
  isPaused = false;
  startPomodoro(minutes);
  $("#stop").show();
});

//Stop dugme
$("#stop").on("click", function(){
  $(this).hide();
  $("#resume").show();
  isPaused = !isPaused;
});

//Resume dugme
$("#resume").on("click", function(){
  $(this).hide();
  $("#stop").show();
  isPaused = !isPaused;
});

//Reset dugme
$("#reset").on("click", function(){
  $("#minus, #plus").attr("disabled", false);

  $("#stop").hide();
  $("#resume").hide();
  $("#start").show();
  clearInterval(timerId);
  $("#time").text(minutes + ":00");
});


