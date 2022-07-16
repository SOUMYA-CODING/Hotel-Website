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
        return false;
    }
    else {
        return true;
    }
}

//Email
function emailValidation(email) {
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email === "") {
        document.getElementById("login_email_error").innerHTML = "Field can't be empty";
        return false;
    } else if (!email.match(mailFormat)) {
        document.getElementById("login_email_error").innerHTML = "Please enter correct email address";
        return false;
    } else {
        document.getElementById("login_email_error").innerHTML = "";
        return true;
    }
}

function passwordValidation(password) {
    if (password === "") {
        document.getElementById("reg_password_error").innerHTML = "Field can't be empty";
        error = false;
    } else if (password <= 8) {
        document.getElementById("reg_password_error").innerHTML = "Password is too small should be altleast 8 digit";
        error = false;
    } else if (password.match(/[a-z]/g)) {
        document.getElementById("reg_password_error").innerHTML = "Password must contain a lowercase letter";
        error = false;
    } else if (password.match(/[A-Z]/g)) {
        document.getElementById("reg_password_error").innerHTML = "Password must contain a uppercase letter";
        error = false;
    } else if (password.match(/[0-9]/g)) {
        document.getElementById("reg_password_error").innerHTML = "Password must contain a number";
        error = false;
    } else {
        document.getElementById("reg_password_error").innerHTML = "";
        error = true;
    }
}

function confirmpasswordValidation(confirm_password) {
    //Validation for password
    if (confirm_password != password) {
        document.getElementById("reg_confirm_password_error").innerHTML = "Field can't be empty";
        error = false;
    } else {
        document.getElementById("reg_confirm_password_error").innerHTML = "Field can't be empty";
        error = true;
    }
}