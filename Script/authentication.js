//For login page validation
function loginvalidationFun() {

    //Get the data
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    //Validation for email
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email === ""){
        document.getElementById("login_email_error").innerHTML = "Field can't be empty";
        return false;
    }else if(!email.match(mailFormat)){
        document.getElementById("login_email_error").innerHTML = "Please enter correct email address";
        return false;
    }else{
        return true;
    }

    //Validation for password
    if(password === ""){
        document.getElementById("password_email_error").innerHTML = "Field can't be empty";
        return false;
    }else if(password <= 8){
        document.getElementById("password_email_error").innerHTML = "Password is too small should be altleast 8 digit";
        return false;
    }else if(password.match(/[a-z]/g)){
        document.getElementById("password_email_error").innerHTML = "Password must contain a lowercase letter";
        return false;
    }else if(password.match(/[A-Z]/g)){
        document.getElementById("password_email_error").innerHTML = "Password must contain a uppercase letter";
        return false;
    }else if(password.match(/[0-9]/g)){
        document.getElementById("password_email_error").innerHTML = "Password must contain a number";
        return false;
    }

}