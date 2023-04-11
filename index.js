//слайдер с 3 банерами
document.addEventListener('DOMContentLoaded', function () {
  new Splide('#slider', {
    type   : 'loop',
    drag   : 'free',
    focus  : 'start',       
    autoWidth: true,   
    start:0,      
    pagination: false, 
    arrows:false,
    flickPower: number = 10,
    autoScroll: {
      speed: .1,
      pauseOnHover: boolean = false,
    },
  }).mount( window.splide.Extensions );
});

// слайдер с анимацией курсов
const panels = document.querySelectorAll('.slider_anim_box');
 function toggleText(e){
   
  if (e.propertyName.includes('width')) {
        this.classList.toggle('open-active');
         
      }
} 
let array = Array.from(panels);
function toggleImage(){   
  let a = array   
  .map(item => item.classList.contains('slider_active'))
  .some( item => item === true)
  
  if (a){
    let b = array
    .map(item => item.classList.contains('slider_active'))
    let c = b.indexOf(true)
    panels[c].classList.remove('slider_active')
    if(this === panels[c]){
      return
    }
  }
  this.classList.add('slider_active')
   
    
}
panels.forEach((item) => item.addEventListener('click', toggleImage))
panels.forEach((item) => item.addEventListener('transitionend', toggleText))

//слайдер с видео
const videoCards = document.querySelectorAll('.video_slider_box');
 function toggleVideo(e){
   console.log(e)
   if (e.propertyName.includes('height')) {
        this.classList.toggle('open-active');
         
      } 
} 
 let arrayNew = Array.from(videoCards); 
function toggleSlider(){   
   let a = arrayNew   
  .map(item => item.classList.contains('video_slider_active'))
  .some( item => item === true)
  
  if (a){
    let b = arrayNew
    .map(item => item.classList.contains('video_slider_active'))
    let c = b.indexOf(true)
    videoCards[c].classList.remove('video_slider_active')
    if(this === videoCards[c]){
      return
    }
  } 
  this.classList.add('video_slider_active')
   
    
}
videoCards.forEach((item) => item.addEventListener('click', toggleSlider))
videoCards.forEach((item) => item.addEventListener('transitionend', toggleVideo))