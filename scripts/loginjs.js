document.getElementById("btn_submit").disabled = true;

function emptycheck() {
    var tpass = document.getElementById("ip_password").value;
    if (tpass != "") {
        document.getElementById("btn_submit").disabled = false;
    }
}

function uscheck() {
    var USERN = document.getElementById("user_name").value;
    var usn2 = USERN.toString();
    var PASSW = document.getElementById("ip_password").value;
    var pass2 = PASSW.toString();
    if (JSON.parse(localStorage.getItem(usn2)) !== null) {
        if (JSON.parse(localStorage.getItem(usn2)).usernam == usn2) {
            if (JSON.parse(localStorage.getItem(usn2)).passw == pass2) {
                arr = JSON.parse(localStorage.getItem(usn2));
                localStorage.setItem("cusnping", 0);
                localStorage.setItem("cusnaster", 0);
                localStorage.setItem("cusnwam", 0);
                localStorage.setItem("cusn", usn2);
                window.open("index.html");
            } else {
                alert("Wrong Password")
            }

        } else {}
    } else {
        alert("Username Not Found");
    }
}