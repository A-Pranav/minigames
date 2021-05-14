var cusnaster = localStorage.getItem("cusnaster");
window.onload = () => {
    var cusn = localStorage.getItem("cusn");
    if (localStorage.getItem("cusn") != null) {
        document.getElementById("cusn").innerHTML = "Hello Agent " + cusn + ",";
    } else {
        document.getElementById("cusn").innerHTML = "Hello!";
    }

    document.getElementById("bestscn").innerHTML = cusnaster;
}


var roc1 = $("#castroid1");
var roc2 = $("#castroid2");
var roc3 = $("#castroid3");
var roc4 = $("#castroid4");
var roc5 = $("#castroid5");
var roc6 = $("#castroid6");
var roc7 = $("#castroid7");
var roc8 = $("#castroid8");
var roc9 = $("#castroid9");
var roc10 = $("#castroid10");
var roc11 = $("#castroid11");
var roc12 = $("#castroid12");
var roc13 = $("#castroid13");
var roc14 = $("#castroid14");

var rockarr = [roc1, roc2, roc3, roc4, roc5, roc6, roc7, roc8, roc9, roc10, roc11, roc12, roc13, roc14];


var score = 0;

$("#scorespan").html("0");

var ships = $('.ships');

var lives = 5;

$("#livespan").html(lives);

var offset = ships.offset();

var mainloop;

$("#startgame").css("display", "block");
$("#gameover").css("display", "none");




function mouse(evt) {

    var center_x = (offset.left) + (ships.width());
    var center_y = (offset.top) + (ships.height() * 2);
    var mouse_x = evt.pageX;
    var mouse_y = evt.pageY;
    var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
    var degree = (radians * (180 / Math.PI) * -1) + 90;
    ships.css({ transform: "rotate(" + degree + "deg)" });

}


function starter() {
    lives = 5;
    score = 0;
    $("#scorespan").html("0");
    moveastroids();
    $("#startgame").css("display", "none");
    $("#gameover").css("display", "none");
    
}
function starter2() {
    location.reload();
    lives = 5;
    score = 0;
    $("#scorespan").html("0");
    moveastroids();
    $("#startgame").css("display", "none");
    $("#gameover").css("display", "none");
    
}

function randomrock(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

ships.mousemove(function(e) {
    $(document).mousemove(mouse);
});

$(document).mousedown(function() {

    $("#shipimg").css({ display: "none" })
    $("#shipfireimg").css({ display: "block" })
});

$(document).mouseup(function() {
    $("#shipimg").css({ display: "block" });
    $("#shipfireimg").css({ display: "none" });
});

function destroyrock(cr) {

    cr.click(function() {

        score++;

        $(cr).children("#desastroidimg").css("display", "block");
        $(cr).children("#astroidimg").css("display", "none");

        setTimeout(function() {
            cr.css({ opacity: 0 })
        }, 50);
        $("#scorespan").html(score);
        $("#livespan").html(lives);
    })
}

function rockcsschecker(crc) {
    if (crc.css("opacity") > 0) {
        return true;
    } else {}
}

function shipdestroyani() {
    setTimeout(function() {
        $(".ships").css({ display: "block" });
        $("#deshipimg").css({ display: "none" });
        $("#shipfireimg").css({ display: "none" })
    }, 250);
}

function moveastroids() {
    mainloop = setInterval(function() {
        if (lives != 0) {

            var chosennum = randomrock(14, -1);
            var chosenrock = rockarr[chosennum];

            let choseninitialcoordinatTop = chosenrock.css("top")
            let choseninitialcoordinatLeft = chosenrock.css("left")

            destroyrock(chosenrock);

            chosenrock.animate({
                top: 350,
                left: 690
            }, 2000, function() {
                if (rockcsschecker(chosenrock)) {
                    lives = lives - 1;
                    $("#livespan").html(lives);
                    chosenrock.css({
                        top: choseninitialcoordinatTop,
                        left: choseninitialcoordinatLeft,
                        opacity: 1,
                    })
                    chosenrock.children('img.rock').css({ "dispay": "block" });
                    chosenrock.children('img.desrock').css({ "dispay": "none" });
                    $(".ships").css({ display: "none" });
                    $("#deshipimg").css({ display: "block" });


                    shipdestroyani();
                } else {
                    chosenrock.css({
                        top: choseninitialcoordinatTop,
                        left: choseninitialcoordinatLeft,
                        opacity: 1,
                    });
                    chosenrock.children("#desastroidimg").css("display", "none");
                    chosenrock.children("#astroidimg").css("display", "block");
                }
            })
        } else {
            if (score > cusnaster) {
                localStorage.setItem("cusnaster", score);
                var newsc = localStorage.getItem("cusnaster");
                document.getElementById("bestscn").innerHTML = newsc;
            }
            clearInterval(mainloop);
            $("#overscore").html(score);
            $("#gameover").css("display", "block");
            $("#scorespan").html("0");
            lives = 5;
            score = 0;
            return
        }
    }, 2900)
}