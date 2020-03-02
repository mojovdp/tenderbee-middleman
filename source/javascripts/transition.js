const btn = document.querySelector(".experienceButtonContainer a")
const body = document.querySelector('body')
const text = document.querySelector('.experienceContainerText')
const bee = document.querySelector('.experienceBeeImage')

btn.addEventListener('click', function(event){
  event.preventDefault()
  body.style.transition = "all ease 3s";
  body.style.opacity = 0;
  setTimeout(function(){
    text.style.transform = "translate(-100vw)"
  }, 500);
  setTimeout(function(){
    bee.style.transform = "translate(-100vw)"
  }, 600);
  setTimeout(function(){
    console.log(window.location.href)
    console.log(btn.attributes.href.value)
    window.location.href = btn.attributes.href.value
  }, 3000);
});

