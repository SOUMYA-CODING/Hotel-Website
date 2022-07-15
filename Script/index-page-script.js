//For Navbar Scroller
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
};

//For Navbar Hide on click
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
});


function queryBooking(){
    const check_in = document.getElementById("check_in").value;
    const check_out = document.getElementById("check_out").value;
    const adult = document.getElementById("adult").value;
    const children = document.getElementById("children").value;

    alert(check_in + " " + check_out + " " + adult + " " + children);
}