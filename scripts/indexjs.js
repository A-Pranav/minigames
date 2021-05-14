document.getElementById("cusn").style.display = "block";

window.onload = () => {
    let cusn = localStorage.getItem("cusn");
    document.getElementById("cusn").innerHTML = cusn;
}

function logout() {
    localStorage.removeItem("cusn");
    localStorage.removeItem("cusnping");
    localStorage.removeItem("cusnaster");
    localStorage.removeItem("cusnwam");
    alert("User Logged Out");
    let cusn = localStorage.getItem("cusn");
    if (cusn == "") {
        document.getElementById("cusn").style.display = "none";
    }
    document.getElementById("cusn").innerHTML = cusn;
}