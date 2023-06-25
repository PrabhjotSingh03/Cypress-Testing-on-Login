window.onload = function () {
    //using strict method
    "use strict";
  //declaring the variables
    var form = document.getElementById("login_form");
    var nameInp = document.getElementById("username");
    var passInp = document.getElementById("password");
    var result = document.getElementById("output");

    form.onsubmit = function (event) {
         // this event listener will prevent the form from submission
        event.preventDefault();
    
    var Display = "";
    var Uname = "";
    var pass = "";

    // triming the username and password to avoid unwanted space
    Uname = nameInp.value.trim();
    pass = passInp.value.trim();

    // Reset previous validation styles
    nameInp.classList.remove("login__txtbox_error");
    passInp.classList.remove("login__txtbox_error");

    // validating the username input
        if (Uname === "") {
            nameInp.classList.add("login__txtbox_error");
            nameInp.focus();
            return;
        }
    // validating the username input
        if (pass === "") {
            passInp.classList.add("login__txtbox_error");
            passInp.focus();
            return;
        }

    // displaying results
        Display = "User Name: " + Uname + "<br>";
        Display += "Password: " + pass;
    
    //updating the result
        result.innerHTML = Display;

        result.parentElement.style.display = "block";

    };
};