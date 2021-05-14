var cusnwam = localStorage.getItem("cusnwam");
window.onload = () => {
    var cusn = localStorage.getItem("cusn");
    document.getElementById("cusn").innerHTML = cusn;
    if (localStorage.getItem("cusn") != null) {
        document.getElementById("cusn").innerHTML = "Hello " + cusn + ",";
    } else {
        document.getElementById("cusn").innerHTML = "Hello!";
    }
    if (cusnwam == null) {
        document.getElementById("hscore").innerHTML = "= " + 0;
    } else {
        document.getElementById("hscore").innerHTML = "= " + cusnwam;
    }
}




var m1 = document.getElementById("mole1o9");
var m2 = document.getElementById("mole2o9");
var m3 = document.getElementById("mole3o9");
var m4 = document.getElementById("mole4o9");
var m5 = document.getElementById("mole5o9");
var m6 = document.getElementById("mole6o9");
var m7 = document.getElementById("mole7o9");
var m8 = document.getElementById("mole8o9");
var m9 = document.getElementById("mole9o9");
var moles = [m1, m2, m3, m4, m5, m6, m7, m8, m9];
var timeleft = true;
var interval;
var point = 0;
var hscore = 0;

function countdown() {
    clearInterval(interval);
    interval = setInterval(function() {
        var timer = $('#js-timeout').html();
        timer = timer.split(':');
        var minutes = timer[0];
        var seconds = timer[1];
        seconds -= 1;
        if (minutes < 0) return;
        else if (seconds < 0 && minutes != 0) {
            minutes -= 1;
            seconds = 59;
        } else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;
        $('#js-timeout').html(minutes + ':' + seconds);
        if (minutes == 0 && seconds == 0) {
            clearInterval(interval);
            timeleft = false;
        };
    }, 1000);
}

$(".moleimg").click(function() {
    point = point + 1;
    document.getElementById("score").innerHTML = point;
});

$('#js-startgame').click(function() {
    $('#js-timeout').text("2:00");
    countdown();
});

$('#js-resetgame').click(function() {
    $('#js-timeout').text("2:00");
    clearInterval(interval);
});

$("#gameover").click(function() {
    $('#gameover').css('display', 'none');
});

function getRandomIntBetween(min, max) {
    Math.random() * (max - min) + min;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function loop() {
    point = 0;
    document.getElementById("score").innerHTML = point;
    document.getElementById("gameover").style.display = "none";
    $('#js-timeout').text("1:00");
    timeleft = true;
    popup();
}

function info() {
    document.getElementById("info").style.display = "block";
}

var timeb

function popup() {
    document.getElementById("info").style.display = "none";
    countdown();
    timeb = setInterval(function() {
        if (timeleft == true) {
            var randnum = getRandomIntBetween(0, 8);
            var selected = moles[randnum];
            selected.style.display = "block";
            popit(selected);
        } else {
            clearInterval(timeb);
            document.getElementById("gameover").style.display = "block";
            if (point != 0) {
                // if ( > cusnwam) {
                if (point > cusnwam) {
                    localStorage.setItem("cusnwam", point);
                    var newsc = localStorage.getItem("cusnwam");
                    document.getElementById("hscore").innerHTML = newsc;
                }
            }
            point = 0;
        }
    }, 789);
}

function popit(select) {
    setTimeout(function() {
        select.style.display = "none";
    }, 680);
}