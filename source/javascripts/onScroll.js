window.onscroll = function() {myFunction(), scrollFunction()};

var navbar = document.getElementById("stickyNav");
var sticky = 75;
var navbar2 = document.getElementById("homeNav");

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    navbar2.classList.add("invisible")
  } else {
    navbar.classList.remove("sticky")
    navbar2.classList.remove("invisible");
  }
}

window.scrollTop


function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myScrollTopBtn").style.display = "block";
  } else {
    document.getElementById("myScrollTopBtn").style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
