var cusnping = localStorage.getItem("cusnping");
window.onload = () => {
    var cusn = localStorage.getItem("cusn");
    if (localStorage.getItem("cusn") != null) {
        document.getElementById("cusn").innerHTML = "Hello " + cusn + ",";
    } else {
        document.getElementById("cusn").innerHTML = "Hello!";
    }
}




var canvas;
var canvasContext;
var ballX = 50;
var ballY = 50;
var ballSpeedX = 10;
var ballSpeedY = 4;

var player1Score = 0;
var lives = 3


var showingWinScreen = false;
var paddle1Y = 250;
var paddle2Y = 250;
const PADDLE_THICKNESS = 10;
const PADDLE_HEIGHT = 100;

function mousepos(evt) {
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;
    return {
        x: mouseX,
        y: mouseY
    };
}

function eventmouseclick(evt) {
    if (showingWinScreen) {
        player1Score = 0;
        lives = 3;
        document.getElementById("lives").innerText = "Lives= " + lives;
        document.getElementById("gameover").style.display = "none";
        showingWinScreen = false;
    }
}

function start() {
    document.getElementById('cover').style.display = "none";
    document.getElementById("start").style.display = "none";

    document.getElementById('gameCanvas').style.display = "block";
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    var framesPerSecond = 30;
    setInterval(function() {
        moveall();
        drawall();
    }, 1000 / framesPerSecond);
    // canvas.addEventListener('mousedown',
    eventmouseclick;
    canvas.addEventListener('mousemove',
        function(evt) {
            var mousePos = mousepos(evt);
            paddle1Y = mousePos.y - (PADDLE_HEIGHT / 2);
        });
}

function resetball() {
    if (lives == 0) {
        showingWinScreen = true;
    }
    ballSpeedX = -ballSpeedX;
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;
}

function movecomp() {
    var paddle2YCenter = paddle2Y + (PADDLE_HEIGHT / 2);
    if (paddle2YCenter < ballY - 25) {
        paddle2Y = paddle2Y + 6;
    } else if (paddle2YCenter > ballY + 35) {
        paddle2Y = paddle2Y - 6;
    }
}

function moveall() {
    if (showingWinScreen) {
        return;
    }
    movecomp();
    ballX = ballX + ballSpeedX;
    ballY = ballY + ballSpeedY;
    if (ballX < 20) {
        if (ballY > paddle1Y &&
            ballY < paddle1Y + PADDLE_HEIGHT) {
            ballSpeedX = -ballSpeedX;

            var deltaY = ballY -
                (paddle1Y + PADDLE_HEIGHT / 2);
            ballSpeedY = deltaY * 0.35;
        } else {
            lives = lives - 1
            document.getElementById("lives").innerText = "Lives= " + lives;
            resetball();
        }
    }
    if (ballX > canvas.width - 20) {
        if (ballY > paddle2Y &&
            ballY < paddle2Y + PADDLE_HEIGHT) {
            ballSpeedX = -ballSpeedX;

            var deltaY = ballY -
                (paddle2Y + PADDLE_HEIGHT / 2);
            ballSpeedY = deltaY * 0.35;
        } else {
            player1Score++;
            document.getElementById("score").innerText = "Score= " + player1Score;
            resetball();
        }
    }
    if (ballY < 9) {
        ballSpeedY = -ballSpeedY;
    }
    if (ballY > canvas.height - 9) {
        ballSpeedY = -ballSpeedY;
    }
}

function drawdivider() {
    for (var i = 0; i < canvas.height; i += 40) {
        colorRect(canvas.width / 2 - 1, i, 2, 20, 'white');
    }
}

function drawall() {
    colorRect(0, 0, canvas.width, canvas.height, 'black');

    if (showingWinScreen) {
        canvasContext.fillStyle = 'white';
        canvasContext.font = "20px"

        if (lives == 0) {
            if (player1Score > cusnping) {
                localStorage.setItem("cusnping", player1Score);
                var newsc = localStorage.getItem("cusnping");
                document.getElementById("prevscore").innerHTML = "=" + newsc;
            }
            player1Score = 0;
            document.getElementById("score").innerText = "Score= " + player1Score;
            document.getElementById("gameover").style.display = "block";
            document.getElementById("gameover").style.display = "block";
            document.getElementById("start").style.display = "none";
        }
        return;
    }
    drawdivider();
    colorRect(0, paddle1Y, PADDLE_THICKNESS, PADDLE_HEIGHT, 'green');
    colorRect(canvas.width - PADDLE_THICKNESS, paddle2Y, PADDLE_THICKNESS, PADDLE_HEIGHT, 'red');
    colorCircle(ballX, ballY, 10, 'yellow');
}

function colorCircle(centerX, centerY, radius, drawColor) {
    canvasContext.fillStyle = drawColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
    canvasContext.fill();
}

function colorRect(leftX, topY, width, height, drawColor) {
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX, topY, width, height);
}