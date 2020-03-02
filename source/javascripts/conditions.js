// = require jquery

// <--------------------------------------------------------------------------------------EXPAND COLLAPSIBLE CONTENT
$(document).ready(function(){
  var acc = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block"
        }
      });
  }
});

// <--------------------------------------------------------------------------------------- SCROLL TO TOP OF SECTION
document.querySelector('#cond-PDC').addEventListener("click", function() {
  $('html,body').animate({
    scrollTop: $("#cond-PDC").offset().top},
    'slow');

  document.getElementById("iHaveReadAndAgree").classList.toggle("visibility");
  document.getElementById("iHaveReadAndAgree2").classList.remove("visibility");
  document.getElementById("iHaveReadAndAgree3").classList.remove("visibility");
  document.getElementById("iHaveReadAndAgree4").classList.remove("visibility");
  document.getElementById("iHaveReadAndAgree5").classList.remove("visibility");
  document.getElementById("iHaveReadAndAgree6").classList.remove("visibility");

  document.getElementById("cond-RDC").nextElementSibling.style.display = "none",
  document.getElementById("cond-CGE").nextElementSibling.style.display = "none",
  document.getElementById("cond-CGMO").nextElementSibling.style.display = "none",
  document.getElementById("cond-CDLE").nextElementSibling.style.display = "none",
  document.getElementById("cond-CDMO").nextElementSibling.style.display = "none",
  document.getElementById("cond-RDC").classList.remove("active"),
  document.getElementById("cond-CGE").classList.remove("active"),
  document.getElementById("cond-CGMO").classList.remove("active"),
  document.getElementById("cond-CDLE").classList.remove("active"),
  document.getElementById("cond-CDMO").classList.remove("active")

});


document.querySelector('#cond-RDC').addEventListener("click", function() {
  $('html,body').animate({
    scrollTop: $("#cond-PDC").offset().top},
    'slow');

  document.getElementById("iHaveReadAndAgree2").classList.toggle("visibility"),
  document.getElementById("iHaveReadAndAgree").classList.remove("visibility"),
  document.getElementById("iHaveReadAndAgree3").classList.remove("visibility"),
  document.getElementById("iHaveReadAndAgree4").classList.remove("visibility"),
  document.getElementById("iHaveReadAndAgree5").classList.remove("visibility"),
  document.getElementById("iHaveReadAndAgree6").classList.remove("visibility"),

  document.getElementById("cond-PDC").nextElementSibling.style.display = "none",
  document.getElementById("cond-CGE").nextElementSibling.style.display = "none",
  document.getElementById("cond-CGMO").nextElementSibling.style.display = "none",
  document.getElementById("cond-CDLE").nextElementSibling.style.display = "none",
  document.getElementById("cond-CDMO").nextElementSibling.style.display = "none",
  document.getElementById("cond-PDC").classList.remove("active"),
  document.getElementById("cond-CGE").classList.remove("active"),
  document.getElementById("cond-CGMO").classList.remove("active"),
  document.getElementById("cond-CDLE").classList.remove("active"),
  document.getElementById("cond-CDMO").classList.remove("active")
});

document.querySelector('#cond-CGE').addEventListener("click", function() {
  $('html,body').animate({
    scrollTop: $("#cond-RDC").offset().top},
    'slow');

  document.getElementById("iHaveReadAndAgree3").classList.toggle("visibility"),
  document.getElementById("iHaveReadAndAgree").classList.remove("visibility"),
  document.getElementById("iHaveReadAndAgree2").classList.remove("visibility"),
  document.getElementById("iHaveReadAndAgree4").classList.remove("visibility"),
  document.getElementById("iHaveReadAndAgree5").classList.remove("visibility"),
  document.getElementById("iHaveReadAndAgree6").classList.remove("visibility"),

  document.getElementById("cond-PDC").nextElementSibling.style.display = "none",
  document.getElementById("cond-RDC").nextElementSibling.style.display = "none",
  document.getElementById("cond-CGMO").nextElementSibling.style.display = "none",
  document.getElementById("cond-CDLE").nextElementSibling.style.display = "none",
  document.getElementById("cond-CDMO").nextElementSibling.style.display = "none",
  document.getElementById("cond-PDC").classList.remove("active"),
  document.getElementById("cond-RDC").classList.remove("active"),
  document.getElementById("cond-CGMO").classList.remove("active"),
  document.getElementById("cond-CDLE").classList.remove("active"),
  document.getElementById("cond-CDMO").classList.remove("active")
});

document.querySelector('#cond-CGMO').addEventListener("click", function() {
  $('html,body').animate({
    scrollTop: $("#cond-CGE").offset().top},
    'slow');

  document.getElementById("iHaveReadAndAgree4").classList.toggle("visibility"),
  document.getElementById("iHaveReadAndAgree").classList.remove("visibility"),
  document.getElementById("iHaveReadAndAgree2").classList.remove("visibility"),
  document.getElementById("iHaveReadAndAgree3").classList.remove("visibility"),
  document.getElementById("iHaveReadAndAgree5").classList.remove("visibility"),
  document.getElementById("iHaveReadAndAgree6").classList.remove("visibility"),

  document.getElementById("cond-PDC").nextElementSibling.style.display = "none",
  document.getElementById("cond-RDC").nextElementSibling.style.display = "none",
  document.getElementById("cond-CGE").nextElementSibling.style.display = "none",
  document.getElementById("cond-CDLE").nextElementSibling.style.display = "none",
  document.getElementById("cond-CDMO").nextElementSibling.style.display = "none",
  document.getElementById("cond-PDC").classList.remove("active"),
  document.getElementById("cond-RDC").classList.remove("active"),
  document.getElementById("cond-CGE").classList.remove("active"),
  document.getElementById("cond-CDLE").classList.remove("active"),
  document.getElementById("cond-CDMO").classList.remove("active")
});

document.querySelector('#cond-CDLE').addEventListener("click", function() {
  $('html,body').animate({
    scrollTop: $("#cond-CGMO").offset().top},
    'slow');

  document.getElementById("iHaveReadAndAgree5").classList.toggle("visibility"),
  document.getElementById("iHaveReadAndAgree").classList.remove("visibility"),
  document.getElementById("iHaveReadAndAgree2").classList.remove("visibility"),
  document.getElementById("iHaveReadAndAgree3").classList.remove("visibility"),
  document.getElementById("iHaveReadAndAgree4").classList.remove("visibility"),
  document.getElementById("iHaveReadAndAgree6").classList.remove("visibility"),

  document.getElementById("cond-PDC").nextElementSibling.style.display = "none",
  document.getElementById("cond-RDC").nextElementSibling.style.display = "none",
  document.getElementById("cond-CGE").nextElementSibling.style.display = "none",
  document.getElementById("cond-CGMO").nextElementSibling.style.display = "none",
  document.getElementById("cond-CDMO").nextElementSibling.style.display = "none",
  document.getElementById("cond-PDC").classList.remove("active"),
  document.getElementById("cond-RDC").classList.remove("active"),
  document.getElementById("cond-CGE").classList.remove("active"),
  document.getElementById("cond-CGMO").classList.remove("active"),
  document.getElementById("cond-CDMO").classList.remove("active")
});

document.querySelector('#cond-CDMO').addEventListener("click", function() {
  $('html,body').animate({
    scrollTop: $("#cond-CDLE").offset().top},
    'slow');

  document.getElementById("iHaveReadAndAgree6").classList.toggle("visibility"),
  document.getElementById("iHaveReadAndAgree").classList.remove("visibility"),
  document.getElementById("iHaveReadAndAgree2").classList.remove("visibility"),
  document.getElementById("iHaveReadAndAgree3").classList.remove("visibility"),
  document.getElementById("iHaveReadAndAgree4").classList.remove("visibility"),
  document.getElementById("iHaveReadAndAgree5").classList.remove("visibility"),

  document.getElementById("cond-PDC").nextElementSibling.style.display = "none",
  document.getElementById("cond-RDC").nextElementSibling.style.display = "none",
  document.getElementById("cond-CGE").nextElementSibling.style.display = "none",
  document.getElementById("cond-CDLE").nextElementSibling.style.display = "none",
  document.getElementById("cond-CGMO").nextElementSibling.style.display = "none",
  document.getElementById("cond-PDC").classList.remove("active"),
  document.getElementById("cond-RDC").classList.remove("active"),
  document.getElementById("cond-CGE").classList.remove("active"),
  document.getElementById("cond-CDLE").classList.remove("active"),
  document.getElementById("cond-CGMO").classList.remove("active")
});


// <---------------------------------------------------------------------------- CHECKBOX VISIBLE ONLY WHEN SCROLLED
// Make Checkbox visible ONLY IF scrolled down
  // function toggleOpacityCG(){
  //   if ($('#conditionsGeneralesExpanded')[0].scrollHeight <= $('#conditionsGeneralesExpanded')[0].scrollTop + $('#conditionsGeneralesExpanded').height() ) {
  //       return true;
  //   }
  //   else
  //       return false;
  // }
  function toggleOpacityPDC(){
    if( $('#cond-PDC-Expanded')[0].scrollTop === ($('#cond-PDC-Expanded')[0].scrollHeight - $('#cond-PDC-Expanded')[0].offsetHeight)) {
      return true;
    }
    else
      return false;
  }
  $('#cond-PDC-Expanded').scroll(function () {
    if(toggleOpacityPDC()){
      document.getElementById("iHaveReadAndAgree").style.opacity = 1
      document.getElementById("legalCheck1").classList.add("pointer")
    }
  });

  function toggleOpacityRDC(){
    // if ($('#politiqueViePriveeExpanded')[0].scrollHeight <= $('#politiqueViePriveeExpanded')[0].scrollTop + $('#politiqueViePriveeExpanded').height() ) {
      if( $('#cond-RDC-Expanded')[0].scrollTop === ($('#cond-RDC-Expanded')[0].scrollHeight - $('#cond-RDC-Expanded')[0].offsetHeight)) {
        return true;
      }
      else
        return false;
    }
    $('#cond-RDC-Expanded').scroll(function () {
      if(toggleOpacityRDC()){
        document.getElementById("iHaveReadAndAgree2").style.opacity = 1
        document.getElementById("legalCheck2").classList.add("pointer")
      }
    });

    function toggleOpacityCGE(){
    // if ($('#politiqueDesCookiesExpanded')[0].scrollHeight <= $('#politiqueDesCookiesExpanded')[0].scrollTop + $('#politiqueDesCookiesExpanded').height() ) {
     if( $('#cond-CGE-Expanded')[0].scrollTop === ($('#cond-CGE-Expanded')[0].scrollHeight - $('#cond-CGE-Expanded')[0].offsetHeight)) {
      return true;
    }
    else
      return false;
  }
  $('#cond-CGE-Expanded').scroll(function () {
    if(toggleOpacityCGE()){
      document.getElementById("iHaveReadAndAgree3").style.opacity = 1
      document.getElementById("legalCheck3").classList.add("pointer")
    }
  });

  function toggleOpacityCGMO(){
    // if ($('#politiqueDesCookiesExpanded')[0].scrollHeight <= $('#politiqueDesCookiesExpanded')[0].scrollTop + $('#politiqueDesCookiesExpanded').height() ) {
     if( $('#cond-CGMO-Expanded')[0].scrollTop === ($('#cond-CGMO-Expanded')[0].scrollHeight - $('#cond-CGMO-Expanded')[0].offsetHeight)) {
      return true;
    }
    else
      return false;
  }
  $('#cond-CGMO-Expanded').scroll(function () {
    if(toggleOpacityCGMO()){
      document.getElementById("iHaveReadAndAgree4").style.opacity = 1
      document.getElementById("legalCheck4").classList.add("pointer")
    }
  });

  function toggleOpacityCDLE(){
    // if ($('#politiqueDesCookiesExpanded')[0].scrollHeight <= $('#politiqueDesCookiesExpanded')[0].scrollTop + $('#politiqueDesCookiesExpanded').height() ) {
     if( $('#cond-CDLE-Expanded')[0].scrollTop === ($('#cond-CDLE-Expanded')[0].scrollHeight - $('#cond-CDLE-Expanded')[0].offsetHeight)) {
      return true;
    }
    else
      return false;
  }
  $('#cond-CDLE-Expanded').scroll(function () {
    if(toggleOpacityCDLE()){
      document.getElementById("iHaveReadAndAgree5").style.opacity = 1
      document.getElementById("legalCheck5").classList.add("pointer")
    }
  });

  function toggleOpacityCDMO(){
    // if ($('#politiqueDesCookiesExpanded')[0].scrollHeight <= $('#politiqueDesCookiesExpanded')[0].scrollTop + $('#politiqueDesCookiesExpanded').height() ) {
     if( $('#cond-CDMO-Expanded')[0].scrollTop === ($('#cond-CDMO-Expanded')[0].scrollHeight - $('#cond-CDMO-Expanded')[0].offsetHeight)) {
      return true;
    }
    else
      return false;
  }
  $('#cond-CDMO-Expanded').scroll(function () {
    if(toggleOpacityCDMO()){
      document.getElementById("iHaveReadAndAgree6").style.opacity = 1
      document.getElementById("legalCheck6").classList.add("pointer")
    }
  });

// <-------------------------------------------------------------------------WHEN CHECKBOX CHANGE, ACCEPT BTN CHANGE
function checkCheckboxPDC() {
  if(document.getElementById("legalCheck1").checked === true)
  {
    document.getElementById("HaveReadAndAgreedPDC").classList.add("confirmbutton-green")
    document.getElementById("HaveReadAndAgreedPDC").removeAttribute("disabled")
  }
  else {
    document.getElementById("HaveReadAndAgreedPDC").classList.remove("confirmbutton-green")
  }
}

function checkCheckboxRDC() {
  if(document.getElementById("legalCheck2").checked === true)
    // si oui changer la propriété css du boutton
  {
    document.getElementById("HaveReadAndAgreedRDC").classList.add("confirmbutton-green")
    document.getElementById("HaveReadAndAgreedRDC").removeAttribute("disabled")
  }
  else {
    document.getElementById("HaveReadAndAgreedRDC").classList.remove("confirmbutton-green")
  }
}

function checkCheckboxCGE() {
  if(document.getElementById("legalCheck3").checked === true)
    // si oui changer la propriété css du boutton
  {
    document.getElementById("HaveReadAndAgreedCGE").classList.add("confirmbutton-green")
    document.getElementById("HaveReadAndAgreedCGE").removeAttribute("disabled")
  }
  else {
    document.getElementById("HaveReadAndAgreedCGE").classList.remove("confirmbutton-green")
  }
}

function checkCheckboxCGMO() {
  if(document.getElementById("legalCheck4").checked === true)
    // si oui changer la propriété css du boutton
  {
    document.getElementById("HaveReadAndAgreedCGMO").classList.add("confirmbutton-green")
    document.getElementById("HaveReadAndAgreedCGMO").removeAttribute("disabled")
  }
  else {
    document.getElementById("HaveReadAndAgreedCGMO").classList.remove("confirmbutton-green")
  }
}

function checkCheckboxCDLE() {
  if(document.getElementById("legalCheck5").checked === true)
    // si oui changer la propriété css du boutton
  {
    document.getElementById("HaveReadAndAgreedCDLE").classList.add("confirmbutton-green")
    document.getElementById("HaveReadAndAgreedCDLE").removeAttribute("disabled")
  }
  else {
    document.getElementById("HaveReadAndAgreedCDLE").classList.remove("confirmbutton-green")
  }
}

function checkCheckboxCDMO() {
  if(document.getElementById("legalCheck6").checked === true)
    // si oui changer la propriété css du boutton
  {
    document.getElementById("HaveReadAndAgreedCDMO").classList.add("confirmbutton-green")
    document.getElementById("HaveReadAndAgreedCDMO").removeAttribute("disabled")
  }
  else {
    document.getElementById("HaveReadAndAgreedCDMO").classList.remove("confirmbutton-green")
  }
}

// <----------------------------------------------------------------------- CHANGE ACCEPT BUTTON ONCE CLICKED

function changeAcceptButtonPDC() {
  document.getElementById("HaveReadAndAgreedPDC").classList.add("confirmbutton-accepted");
  document.getElementById("HaveReadAndAgreedPDC").innerHTML = "Accepted";
};

function changeAcceptButtonRDC() {
  document.getElementById("HaveReadAndAgreedRDC").classList.add("confirmbutton-accepted");
  document.getElementById("HaveReadAndAgreedRDC").innerHTML = "Accepted";
};

function changeAcceptButtonCGE() {
  document.getElementById("HaveReadAndAgreedCGE").classList.add("confirmbutton-accepted");
  document.getElementById("HaveReadAndAgreedCGE").innerHTML = "Accepted";
};

function changeAcceptButtonCGMO() {
  document.getElementById("HaveReadAndAgreedCGMO").classList.add("confirmbutton-accepted");
  document.getElementById("HaveReadAndAgreedCGMO").innerHTML = "Accepted";
};

function changeAcceptButtonCDLE() {
  document.getElementById("HaveReadAndAgreedCDLE").classList.add("confirmbutton-accepted");
  document.getElementById("HaveReadAndAgreedCDLE").innerHTML = "Accepted";
};

function changeAcceptButtonCDMO() {
  document.getElementById("HaveReadAndAgreedCDMO").classList.add("confirmbutton-accepted");
  document.getElementById("HaveReadAndAgreedCDMO").innerHTML = "Accepted";
};
// function changeAcceptButton() {
//   const buttons = document.querySelectorAll(".confirmbutton");
//   buttons.forEach(
//     function(button) {
//     button.classList.add("confirmbutton-accepted");
//     button.innerHTML = "Accepted";
//   });
// };
