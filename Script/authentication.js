//For login page validation
function loginvalidationFun(){
    //Get the data
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    //Validation for email
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email === ""){
        document.getElementById("login_email_error").innerHTML = "Field can't be empty";
        return false;
    }else if(!email.match(mailFormat)){
        document.getElementById("login_email_error").innerHTML = "Please enter correct email address"
        return false;
    }
}