//For login page validation
function loginvalidationFun() {
    let error = false;

    //Get the data
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    //Call the functions
    emailValidation(email);
    passwordValidation(password);

    if (error) {
        return true;
    }
    else {
        return false;
    }

}


//For Registration page validation
function registrationvalidationFun() {
    let error = false;

    //Get the data
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirm_password = document.getElementById("confirm_password").value;

    //Call the functions
    emailValidation(email);
    passwordValidation(password);
    confirmpasswordValidation(confirm_password);

    //Error
    if (error) {
        return true;
    }
    else {
        return false;
    }
}

//Email
function emailValidation(email) {
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email === "") {
        document.getElementById("email_error").innerHTML = "Field can't be empty";
        return false;
    } else if (!email.match(mailFormat)) {
        document.getElementById("email_error").innerHTML = "Please enter correct email address";
        return false;
    } else {
        document.getElementById("email_error").innerHTML = "";
        return true;
    }
}

function passwordValidation(password) {
    let passwordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,10}$/;
    if (password === "") {
        document.getElementById("password_error").innerHTML = "Field can't be empty";
        error = false;
    } else if (!password.match(passwordFormat)) {
        document.getElementById("password_error").innerHTML = "Password must contain atleast one uppercase, lowercase, number and special character";
        error = false;
    } else {
        document.getElementById("password_error").innerHTML = "";
        error = true;
    }
}

function confirmpasswordValidation(confirm_password) {
    //Validation for password
    if (confirm_password != password) {
        document.getElementById("confirm_password_error").innerHTML = "Field can't be empty";
        error = false;
    } else {
        document.getElementById("confirm_password_error").innerHTML = "";
        error = true;
    }
}