// = require jquery

function closeCookieConsent() {
  var x = document.getElementById("cookieConsent");
  x.style.display = "none";
};

function openCookieModal() {
  $('#myModal').modal('toggle');
};

function closeCookieModal() {
  // $('#myModal').modal('hide');
  // add class "modal-dialog" to "conditiontabs" in cookie_modal.html
    var x = document.getElementById("myModal");
    var y = document.querySelector(".modal-backdrop");
    x.style.display = "none";
    y.style.display="none";
    window.location = window.location;
};
