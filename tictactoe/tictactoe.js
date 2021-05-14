document.getElementById("start").style.display = "block"
document.getElementById("winner").style.display = "none"

let arr = Array(9).fill(null);
let t = "X";
const l = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let count = 9;

function clicked(e) {
    count--;
    if (t === "X" && e.target.innerHTML === "") {
        arr[e.target.id] = t;
        document.getElementById(e.target.id).innerHTML = t;
        t = "O";
        document.getElementById("tn").innerHTML = `It's ${t}'s turn`;
    }
    else if (t === "O" && e.target.innerHTML === "") {
        arr[e.target.id] = t;
        document.getElementById(e.target.id).innerHTML = t;
        t = "X";
        document.getElementById("tn").innerHTML = `It's ${t}'s turn`;
    }
    for (i = 0; i < l.length; i++) {
        const [x, y, z] = l[i];
        if (arr[x] && arr[x] === arr[y] && arr[x] === arr[z]) {
            if (document.getElementById("winnerval").innerHTML === "") {
                document.getElementById("winner").style.display = "block";
                document.getElementById("winnerval").innerHTML = arr[x];
                for (i = 0; i < 9; i++) {
                    if (document.getElementById(i).innerHTML === "") {
                        document.getElementById(i).innerHTML = "-";
                    }
                }
            }
        }
    }
}

function reset() {
    document.getElementById("start").style.display = "none";
    document.getElementById("winner").style.display = "none";
    document.getElementById("winnerval").innerHTML = "";
    count = 9;
    t = "X"
    document.getElementById("tn").innerHTML = `It's ${t}'s turn`;
    for (i = 0; i < 9; i++) {
        document.getElementById(i).innerHTML = "";
        arr[i] = null;
    }
}