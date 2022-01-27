function auth() {
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (email === "admin" && password === "pass") {
        window.location.replace("http://www.felixzavala.com");
        alert("Login Successful");

    } else {
        alert("Invalid information");
        window.location.replace("#");
        return;
    }

}
