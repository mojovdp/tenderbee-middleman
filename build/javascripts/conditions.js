function toggleOpacityPDC(){return $("#cond-PDC-Expanded")[0].scrollTop===$("#cond-PDC-Expanded")[0].scrollHeight-$("#cond-PDC-Expanded")[0].offsetHeight}function toggleOpacityRDC(){return $("#cond-RDC-Expanded")[0].scrollTop===$("#cond-RDC-Expanded")[0].scrollHeight-$("#cond-RDC-Expanded")[0].offsetHeight}function toggleOpacityCGE(){return $("#cond-CGE-Expanded")[0].scrollTop===$("#cond-CGE-Expanded")[0].scrollHeight-$("#cond-CGE-Expanded")[0].offsetHeight}function toggleOpacityCGMO(){return $("#cond-CGMO-Expanded")[0].scrollTop===$("#cond-CGMO-Expanded")[0].scrollHeight-$("#cond-CGMO-Expanded")[0].offsetHeight}function toggleOpacityCDLE(){return $("#cond-CDLE-Expanded")[0].scrollTop===$("#cond-CDLE-Expanded")[0].scrollHeight-$("#cond-CDLE-Expanded")[0].offsetHeight}function toggleOpacityCDMO(){return $("#cond-CDMO-Expanded")[0].scrollTop===$("#cond-CDMO-Expanded")[0].scrollHeight-$("#cond-CDMO-Expanded")[0].offsetHeight}function checkCheckboxPDC(){!0===document.getElementById("legalCheck1").checked?(document.getElementById("HaveReadAndAgreedPDC").classList.add("confirmbutton-green"),document.getElementById("HaveReadAndAgreedPDC").removeAttribute("disabled")):document.getElementById("HaveReadAndAgreedPDC").classList.remove("confirmbutton-green")}function checkCheckboxRDC(){!0===document.getElementById("legalCheck2").checked?(document.getElementById("HaveReadAndAgreedRDC").classList.add("confirmbutton-green"),document.getElementById("HaveReadAndAgreedRDC").removeAttribute("disabled")):document.getElementById("HaveReadAndAgreedRDC").classList.remove("confirmbutton-green")}function checkCheckboxCGE(){!0===document.getElementById("legalCheck3").checked?(document.getElementById("HaveReadAndAgreedCGE").classList.add("confirmbutton-green"),document.getElementById("HaveReadAndAgreedCGE").removeAttribute("disabled")):document.getElementById("HaveReadAndAgreedCGE").classList.remove("confirmbutton-green")}function checkCheckboxCGMO(){!0===document.getElementById("legalCheck4").checked?(document.getElementById("HaveReadAndAgreedCGMO").classList.add("confirmbutton-green"),document.getElementById("HaveReadAndAgreedCGMO").removeAttribute("disabled")):document.getElementById("HaveReadAndAgreedCGMO").classList.remove("confirmbutton-green")}function checkCheckboxCDLE(){!0===document.getElementById("legalCheck5").checked?(document.getElementById("HaveReadAndAgreedCDLE").classList.add("confirmbutton-green"),document.getElementById("HaveReadAndAgreedCDLE").removeAttribute("disabled")):document.getElementById("HaveReadAndAgreedCDLE").classList.remove("confirmbutton-green")}function checkCheckboxCDMO(){!0===document.getElementById("legalCheck6").checked?(document.getElementById("HaveReadAndAgreedCDMO").classList.add("confirmbutton-green"),document.getElementById("HaveReadAndAgreedCDMO").removeAttribute("disabled")):document.getElementById("HaveReadAndAgreedCDMO").classList.remove("confirmbutton-green")}function changeAcceptButtonPDC(){document.getElementById("HaveReadAndAgreedPDC").classList.add("confirmbutton-accepted"),document.getElementById("HaveReadAndAgreedPDC").innerHTML="Accepted"}function changeAcceptButtonRDC(){document.getElementById("HaveReadAndAgreedRDC").classList.add("confirmbutton-accepted"),document.getElementById("HaveReadAndAgreedRDC").innerHTML="Accepted"}function changeAcceptButtonCGE(){document.getElementById("HaveReadAndAgreedCGE").classList.add("confirmbutton-accepted"),document.getElementById("HaveReadAndAgreedCGE").innerHTML="Accepted"}function changeAcceptButtonCGMO(){document.getElementById("HaveReadAndAgreedCGMO").classList.add("confirmbutton-accepted"),document.getElementById("HaveReadAndAgreedCGMO").innerHTML="Accepted"}function changeAcceptButtonCDLE(){document.getElementById("HaveReadAndAgreedCDLE").classList.add("confirmbutton-accepted"),document.getElementById("HaveReadAndAgreedCDLE").innerHTML="Accepted"}function changeAcceptButtonCDMO(){document.getElementById("HaveReadAndAgreedCDMO").classList.add("confirmbutton-accepted"),document.getElementById("HaveReadAndAgreedCDMO").innerHTML="Accepted"}$(document).ready(function(){var e,t=document.getElementsByClassName("collapsible");for(e=0;e<t.length;e++)t[e].addEventListener("click",function(){this.classList.toggle("active");var e=this.nextElementSibling;"block"===e.style.display?e.style.display="none":e.style.display="block"})}),document.querySelector("#cond-PDC").addEventListener("click",function(){$("html,body").animate({scrollTop:$("#cond-PDC").offset().top},"slow"),document.getElementById("iHaveReadAndAgree").classList.toggle("visibility"),document.getElementById("iHaveReadAndAgree2").classList.remove("visibility"),document.getElementById("iHaveReadAndAgree3").classList.remove("visibility"),document.getElementById("iHaveReadAndAgree4").classList.remove("visibility"),document.getElementById("iHaveReadAndAgree5").classList.remove("visibility"),document.getElementById("iHaveReadAndAgree6").classList.remove("visibility"),document.getElementById("cond-RDC").nextElementSibling.style.display="none",document.getElementById("cond-CGE").nextElementSibling.style.display="none",document.getElementById("cond-CGMO").nextElementSibling.style.display="none",document.getElementById("cond-CDLE").nextElementSibling.style.display="none",document.getElementById("cond-CDMO").nextElementSibling.style.display="none",document.getElementById("cond-RDC").classList.remove("active"),document.getElementById("cond-CGE").classList.remove("active"),document.getElementById("cond-CGMO").classList.remove("active"),document.getElementById("cond-CDLE").classList.remove("active"),document.getElementById("cond-CDMO").classList.remove("active")}),document.querySelector("#cond-RDC").addEventListener("click",function(){$("html,body").animate({scrollTop:$("#cond-PDC").offset().top},"slow"),document.getElementById("iHaveReadAndAgree2").classList.toggle("visibility"),document.getElementById("iHaveReadAndAgree").classList.remove("visibility"),document.getElementById("iHaveReadAndAgree3").classList.remove("visibility"),document.getElementById("iHaveReadAndAgree4").classList.remove("visibility"),document.getElementById("iHaveReadAndAgree5").classList.remove("visibility"),document.getElementById("iHaveReadAndAgree6").classList.remove("visibility"),document.getElementById("cond-PDC").nextElementSibling.style.display="none",document.getElementById("cond-CGE").nextElementSibling.style.display="none",document.getElementById("cond-CGMO").nextElementSibling.style.display="none",document.getElementById("cond-CDLE").nextElementSibling.style.display="none",document.getElementById("cond-CDMO").nextElementSibling.style.display="none",document.getElementById("cond-PDC").classList.remove("active"),document.getElementById("cond-CGE").classList.remove("active"),document.getElementById("cond-CGMO").classList.remove("active"),document.getElementById("cond-CDLE").classList.remove("active"),document.getElementById("cond-CDMO").classList.remove("active")}),document.querySelector("#cond-CGE").addEventListener("click",function(){$("html,body").animate({scrollTop:$("#cond-RDC").offset().top},"slow"),document.getElementById("iHaveReadAndAgree3").classList.toggle("visibility"),document.getElementById("iHaveReadAndAgree").classList.remove("visibility"),document.getElementById("iHaveReadAndAgree2").classList.remove("visibility"),document.getElementById("iHaveReadAndAgree4").classList.remove("visibility"),document.getElementById("iHaveReadAndAgree5").classList.remove("visibility"),document.getElementById("iHaveReadAndAgree6").classList.remove("visibility"),document.getElementById("cond-PDC").nextElementSibling.style.display="none",document.getElementById("cond-RDC").nextElementSibling.style.display="none",document.getElementById("cond-CGMO").nextElementSibling.style.display="none",document.getElementById("cond-CDLE").nextElementSibling.style.display="none",document.getElementById("cond-CDMO").nextElementSibling.style.display="none",document.getElementById("cond-PDC").classList.remove("active"),document.getElementById("cond-RDC").classList.remove("active"),document.getElementById("cond-CGMO").classList.remove("active"),document.getElementById("cond-CDLE").classList.remove("active"),document.getElementById("cond-CDMO").classList.remove("active")}),document.querySelector("#cond-CGMO").addEventListener("click",function(){$("html,body").animate({scrollTop:$("#cond-CGE").offset().top},"slow"),document.getElementById("iHaveReadAndAgree4").classList.toggle("visibility"),document.getElementById("iHaveReadAndAgree").classList.remove("visibility"),document.getElementById("iHaveReadAndAgree2").classList.remove("visibility"),document.getElementById("iHaveReadAndAgree3").classList.remove("visibility"),document.getElementById("iHaveReadAndAgree5").classList.remove("visibility"),document.getElementById("iHaveReadAndAgree6").classList.remove("visibility"),document.getElementById("cond-PDC").nextElementSibling.style.display="none",document.getElementById("cond-RDC").nextElementSibling.style.display="none",document.getElementById("cond-CGE").nextElementSibling.style.display="none",document.getElementById("cond-CDLE").nextElementSibling.style.display="none",document.getElementById("cond-CDMO").nextElementSibling.style.display="none",document.getElementById("cond-PDC").classList.remove("active"),document.getElementById("cond-RDC").classList.remove("active"),document.getElementById("cond-CGE").classList.remove("active"),document.getElementById("cond-CDLE").classList.remove("active"),document.getElementById("cond-CDMO").classList.remove("active")}),document.querySelector("#cond-CDLE").addEventListener("click",function(){$("html,body").animate({scrollTop:$("#cond-CGMO").offset().top},"slow"),document.getElementById("iHaveReadAndAgree5").classList.toggle("visibility"),document.getElementById("iHaveReadAndAgree").classList.remove("visibility"),document.getElementById("iHaveReadAndAgree2").classList.remove("visibility"),document.getElementById("iHaveReadAndAgree3").classList.remove("visibility"),document.getElementById("iHaveReadAndAgree4").classList.remove("visibility"),document.getElementById("iHaveReadAndAgree6").classList.remove("visibility"),document.getElementById("cond-PDC").nextElementSibling.style.display="none",document.getElementById("cond-RDC").nextElementSibling.style.display="none",document.getElementById("cond-CGE").nextElementSibling.style.display="none",document.getElementById("cond-CGMO").nextElementSibling.style.display="none",document.getElementById("cond-CDMO").nextElementSibling.style.display="none",document.getElementById("cond-PDC").classList.remove("active"),document.getElementById("cond-RDC").classList.remove("active"),document.getElementById("cond-CGE").classList.remove("active"),document.getElementById("cond-CGMO").classList.remove("active"),document.getElementById("cond-CDMO").classList.remove("active")}),document.querySelector("#cond-CDMO").addEventListener("click",function(){$("html,body").animate({scrollTop:$("#cond-CDLE").offset().top},"slow"),document.getElementById("iHaveReadAndAgree6").classList.toggle("visibility"),document.getElementById("iHaveReadAndAgree").classList.remove("visibility"),document.getElementById("iHaveReadAndAgree2").classList.remove("visibility"),document.getElementById("iHaveReadAndAgree3").classList.remove("visibility"),document.getElementById("iHaveReadAndAgree4").classList.remove("visibility"),document.getElementById("iHaveReadAndAgree5").classList.remove("visibility"),document.getElementById("cond-PDC").nextElementSibling.style.display="none",document.getElementById("cond-RDC").nextElementSibling.style.display="none",document.getElementById("cond-CGE").nextElementSibling.style.display="none",document.getElementById("cond-CDLE").nextElementSibling.style.display="none",document.getElementById("cond-CGMO").nextElementSibling.style.display="none",document.getElementById("cond-PDC").classList.remove("active"),document.getElementById("cond-RDC").classList.remove("active"),document.getElementById("cond-CGE").classList.remove("active"),document.getElementById("cond-CDLE").classList.remove("active"),document.getElementById("cond-CGMO").classList.remove("active")}),$("#cond-PDC-Expanded").scroll(function(){toggleOpacityPDC()&&(document.getElementById("iHaveReadAndAgree").style.opacity=1,document.getElementById("legalCheck1").classList.add("pointer"))}),$("#cond-RDC-Expanded").scroll(function(){toggleOpacityRDC()&&(document.getElementById("iHaveReadAndAgree2").style.opacity=1,document.getElementById("legalCheck2").classList.add("pointer"))}),$("#cond-CGE-Expanded").scroll(function(){toggleOpacityCGE()&&(document.getElementById("iHaveReadAndAgree3").style.opacity=1,document.getElementById("legalCheck3").classList.add("pointer"))}),$("#cond-CGMO-Expanded").scroll(function(){toggleOpacityCGMO()&&(document.getElementById("iHaveReadAndAgree4").style.opacity=1,document.getElementById("legalCheck4").classList.add("pointer"))}),$("#cond-CDLE-Expanded").scroll(function(){toggleOpacityCDLE()&&(document.getElementById("iHaveReadAndAgree5").style.opacity=1,document.getElementById("legalCheck5").classList.add("pointer"))}),$("#cond-CDMO-Expanded").scroll(function(){toggleOpacityCDMO()&&(document.getElementById("iHaveReadAndAgree6").style.opacity=1,document.getElementById("legalCheck6").classList.add("pointer"))});