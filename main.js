function validate(username, password) {
  
     if (username == "user" && password == "user") {
        alert("Login berhasil");
        window.location = "home.html"; // redirect ke hlaman masuk(home)
    } else if (username == "user" && password != "user"){
        alert("Password salah");
    } else if (username != "user" && password == "user") {
        alert("Username salah");
    } else if (username != "user" && password != "user"){
        alert("username dan password salah")
    }else {
        alert("not defined");
    }
}