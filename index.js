
// слайдер с анимацией курсов
const panels = document.querySelectorAll('.slider_anim_box');
/*  function toggleText(e){
   this.classList.toogle('open-active')
  /* if (e.propertyName.includes('width')) {
        this.classList.toggle('open-active');
         
      } */
      
//}  
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
  this.classList.add('slider_active');
   
    
}
panels.forEach((item) => item.addEventListener('click', toggleImage));
/* panels.forEach((item) => item.addEventListener('transitionend', toggleText)); */


//слайдер с видео
const videoCards = document.querySelectorAll('.video_slider_box');



let arrayNew = Array.from(videoCards); 

function toggleSlider(e) {
  let videoPlay = this.querySelector('.player__button_play');
  let videoVolume = this.querySelector('.player__button_mute');
  const video = this.querySelector(".video_slider_card");

  let a = arrayNew
    .map((item) => item.classList.contains("video_slider_active"))
    .some((item) => item === true);

  let b = arrayNew.map((item) =>
    item.classList.contains("video_slider_active")
  );
  let c = b.indexOf(true);

  if (a) {
    videoCards[c].classList.remove("video_slider_active");
    videoCards[c].querySelector(".video_slider_card").pause();
    if (this === videoCards[c]) {
      video.paused ? video.play() : video.pause()
      console.log(video)
       
    }
  }
   if( !this.classList.contains('video_slider_active')){
    console.log('on', c)
    this.classList.add("video_slider_active");
    this.querySelector(".video_slider_card").play();
     
     
    
    function updateButton() {
      console.log(6)
      const icon = video.paused ? '►' : '❚❚';      
      videoPlay.textContent = icon;
    }
    /* video.addEventListener('click', togglePlay); */
    video.addEventListener('play', updateButton);
    video.addEventListener('pause', updateButton);

  } 
  
}
 
videoCards.forEach((item) => item.addEventListener('click', toggleSlider))
 
