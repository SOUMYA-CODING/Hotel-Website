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
    if (password === "") {
        document.getElementById("password_error").innerHTML = "Password can't be empty ";
        return false;
    } else if (password.length <= 8) {
        document.getElementById("password_error").innerHTML = "Password is too short";
        return false;
    } else if (!password.match(/[a-z]/)) {
        document.getElementById("password_error").innerHTML = "Password must contain a lowercase letter";
        return false;
    } else if (!password.match(/[A-Z]/)) {
        document.getElementById("password_error").innerHTML = "Password must contain a uppercase letter";
        return false;
    } else if (!password.match(/[0-9]/)) {
        document.getElementById("password_error").innerHTML = "Password must contain a number";
        return false;
    } else if (!password.match(/[@,#,$,%]/)) {
        document.getElementById("password_error").innerHTML = "Password must contain a special letter";
        return false;
    } else {
        document.getElementById("password_error").innerHTML = "";
        return true;
    }
}

function confirmpasswordValidation(confirm_password) {
    //Validation for password
    if (confirm_password != password) {
        document.getElementById("confirm_password_error").innerHTML = "Field can't be empty";
        return false;
    } else {
        document.getElementById("confirm_password_error").innerHTML = "";
        return true;
    }
}