// This is where it all goes :)


// This is the script to highlight the button selected
var conditionsButtons = document.getElementsByClassName("onglet");
for (var i = 0; i < conditionsButtons.length; i++) {
  conditionsButtons[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("ongletactif");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" ongletactif", "");
    }
        this.className += " ongletactif";
  });
}

// This is the script to load the correct pdf in the viewer

//Locate pdf viewer
// var pdfwindow = document.getElementById("pdfviewer");

// Locate each button
// var pdfwindow = document.getElementById("pdfviewer");
// var confidentialiteBtn = document.getElementById("confidentialite");

// var pdfwindow = document.getElementById("pdfviewer");

// var confidentialiteBtn = document.getElementById("confidentialite");
// confidentialiteBtn.addEventListener("click", (event) => {
//    pdfwindow.setAttribute("src", "/conditions/confidentialite.pdf");
//   });

// var cookiesBtn = document.getElementById("cookies");
// cookiesBtn.addEventListener("click", (event) => {
//    pdfwindow.setAttribute("src", "/conditions/cookies.pdf");
//   });

// var cgentrepreneurBtn = document.getElementById("cgentrepreneur");
// cgentrepreneurBtn.addEventListener("click", (event) => {
//    pdfwindow.setAttribute("src", "/conditions/conditionsentrepreneurs.pdf");
//   });

// // var cguserBtn = document.getElementById("cguser");
// var cguserBtn = document.getElementById("cguser");
// cguserBtn.addEventListener("click", (event) => {
//    pdfwindow.setAttribute("src", "/conditions/conditionsUser.pdf");
//   });

// // var charteentrepreneurBtn = document.getElementById("charteentrepreneur");
// var charteentrepreneurBtn = document.getElementById("charteentrepreneur");
// charteentrepreneurBtn.addEventListener("click", (event) => {
//    pdfwindow.setAttribute("src", "/conditions/charteentrepreneur.pdf");
//   });


// // var charteuserBtn = document.getElementById("charteuser");
// var charteuserBtn = document.getElementById("charteuser");
// charteuserBtn.addEventListener("click", (event) => {
//    pdfwindow.setAttribute("src", "/conditions/charteuser.pdf");
//   });

