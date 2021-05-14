<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="homestyles/indexcss.css">
    <link rel="icon" href="favicon_io/favicon-16x16.png" type="image/gif" sizes="16x16">
    <title>Mini Games</title>

</head>

<body>
    <nav id="navbar">
        <p id="navwelecont">
            <span class="linksp"><a id="tobedisabled" class="otherlinks" href="login.html">Login</a></span>
            <span class="linksp"><a class="otherlinks" href="sign_up.html">Sign Up</a></span>
            <span class="linksp" id="logout"><a onclick="logout()">Logout</a></span>
        </p>
    </nav>
    <div id="currentuser"><span id="cusn"></span></div>

    <h1 id="heading">
        MINI GAMES
    </h1>
    <div id="pargamediv">

        <div class="gameimgdiv"><a class="linkstogame" href="pingpong/pingpong.html">Ping Pong</a>
            <div class="gameimg">
                <a href="pingpong/pingpong.html"><img src="images/pingpong.jpg" width="100%" height="100%"></a>
            </div>
        </div>

        <div class="gameimgdiv"><a class="linkstogame" href="tictactoe/tictactoe.html">Tic Tac Toe</a>
            <div class="gameimg">
                <a href="tictactoe/tictactoe.html"><img src="images/tictactoe.jpg" width="100%" height="100%"></a>
            </div>
        </div>
        <div class="gameimgdiv"><a class="linkstogame" href="whackamole/whackamole.html">Whack a Mole</a>
            <div class="gameimg">
                <a href="whackamole/whackamole.html"><img src="images/whackamole.jpg" width="100%" height="100%"></a>
            </div>
        </div>
        <div class="gameimgdiv"><a class="linkstogame" href="asteroidshooter/asteroidshooter.html">Asteroid
                Shooter</a>
            <div class="gameimg">
                <a href="asteroidshooter/asteroidshooter.html"><img src="images/asteroidshooter.jpg" width="100%"
                        height="100%"></a>
            </div>
        </div>
        <div id="matchsticksdiv">
            <a id="matchsticks" href="matchsticks/matchthebox.html">Matchsticks</a>
            <div id="matchsticksimg">
                <a href="matchsticks/matchthebox.html"><img src="images/mathsticks.jpg" width="100%" height="100%"></a>
            </div>
        </div>
    </div>
    <script src="scripts/indexjs.js"></script>
</body>

</html>