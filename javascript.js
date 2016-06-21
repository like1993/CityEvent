

/*Here is start javascript of login*/
window.onload = function () {

    // get a reference to all elements of interest
    var email = document.getElementById("inputEmail");
    var pass = document.getElementById("inputPassword");
    var btnSubmit = document.getElementById("btnSubmit");
    var errorEmail = document.getElementById("error-email");
    var errorPassword = document.getElementById("error-password");

    // add event listener to button click
    btnSubmit.addEventListener("click", btnSubmitClick);


    function btnSubmitClick() {

        // check validity of email
        if (!validateEmail(email.value)) {
            ShowError("Please enter a valid email.", "email");
            return;
        }

        // email passed validation, hide the error field
        errorEmail.classList.add("hide");

        // check validity of password
        if (pass.value.length < 8) {
            ShowError("Password must be at least 8 characters long.", "password");
            return;
        }

        // password passed validation, hide the error field
        errorPassword.classList.add("hide");

        // validation passed, form can now be submitted
        // check to see if input matches the email and password values
        if(email.value === "hatijaalbano@gmail.com " && pass.value === "albanoalbano"){
            window.location.href = "http://www.google.com";
        }
    }

    function ShowError(msg, field) {
        if (field == "email") {
            errorEmail.classList.remove("hide");
            errorEmail.innerHTML = msg;
        } else if (field == "password") {
            errorPassword.classList.remove("hide");
            errorPassword.innerHTML = msg;
        }
    }

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
}

/*Here is ends javascript of login*/
