//для слайдов
const slider = document.querySelector(".popup_photo");
const sliderPhoto = slider.querySelector(".popup__img");
const overlayPhoto = slider.querySelector(".popup__overlay");
const list = document.querySelectorAll(".sertificate_el")
function openImagePopup(evt){
   
  if(evt.target.alt == "Декларация соответствия"){
    sliderPhoto.src = "./image/docum_dec.png";
    sliderPhoto.alt = "Декларация соответствия";    
    openPopup (slider)
  }
  if(evt.target.alt == "Сертификат соотвествия"){
    sliderPhoto.src = "./image/sertificate.png";
    sliderPhoto.alt = "Сертификат соотвествия";    
    openPopup (slider)
  }
  
    
  }
  function openPopup (popup) {
    popup.classList.add ('popup_opened');
    document.addEventListener("keydown", keyHandler);
  }
  function closePopup (popup) {
    popup.classList.remove ('popup_opened');
    document.removeEventListener("keydown", keyHandler);
  }
  function keyHandler(evt) {
    
    if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup (popup);
  }
  } 
  list.forEach(function(item){
    item.addEventListener('click', openImagePopup);
  })
  overlayPhoto.addEventListener('click', function() {
    closePopup(slider)});
    