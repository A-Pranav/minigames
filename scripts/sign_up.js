var btncheck = 0;


function signed_up() {
    var usn = document.getElementById("user_name").value;
    var arr = JSON.parse(localStorage.getItem(usn));
    var usn = document.getElementById("user_name").value;
    var usr = { "usernam": document.getElementById("user_name").value, "passw": document.getElementById('ip_password').value }
    localStorage.setItem(usn, JSON.stringify(usr));
    arr = JSON.parse(localStorage.getItem(usn));
    alert("Registered successfully");
    window.document.location = "./index.php"
}


document.getElementById("btn_submit").disabled = true;

function usernamechecker() {
    var USERN = document.getElementById("user_name").value;
    var usn2 = USERN.toString();
    if (document.getElementById("user_name").value == localStorage.getItem(document.getElementById("user_name").value.toString())) {
        document.getElementById("btn_submit").disabled = true;
        document.getElementById("ip_password").disabled = true;
        document.getElementById("ip_confirm_password").disabled = true;
        document.getElementById("taken").style.display = "block";
    } else {
        document.getElementById("btn_submit").disabled = false;
        document.getElementById("ip_password").disabled = false;
        document.getElementById("ip_confirm_password").disabled = false;
        document.getElementById("taken").style.display = "none";
    }
}


function length_checker() {
    var password = document.getElementById('ip_password');

    if (password.value.length < 8) {
        document.getElementById("length_error").innerHTML = "Minimum password length is 8 characters";
    } else {
        document.getElementById("length_error").innerHTML = "";
        btncheck++
    }
}



function checkEqual() {
    if (document.getElementById('ip_password').value == document.getElementById('ip_confirm_password').value) {
        document.getElementById("sp_checkequal").innerHTML = "Passwords Match";
        btncheck++
    } else {
        document.getElementById("sp_checkequal").innerHTML = "Passwords do not match";
    }
}

if (btncheck >= 2) {
    document.getElementById("btn_submit").disabled = false;
}