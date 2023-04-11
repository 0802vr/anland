////burger //
const burger = document.querySelector(".header__list_burger");
const burgerOpen = document.querySelector(".burger");
const closeButton = document.querySelector(".burger_btn_close");

function openBurger() {
  burgerOpen.classList.remove('close')
  burgerOpen.classList.add('open');
   
}
function closeBurger(e) {
  if(e.target.className == 'burger_btn_close' ){
    burgerOpen.classList.add('close')
    burgerOpen.classList.remove('open')
    
  }
  return
}
burger.addEventListener('click', openBurger)
closeButton.addEventListener('click', closeBurger)