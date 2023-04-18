
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
    if (this === videoCards[c]) {
      if(e.target.classList.contains('player__button_mute')){
        updateVolume()
        return
      }
      video.paused ? video.play() : video.pause()
      console.log(video, this, e.target)
      return
    }
    videoCards[c].classList.remove("video_slider_active");
    videoCards[c].querySelector(".video_slider_card").pause();
    
       
    }
  
   if( !this.classList.contains('video_slider_active')){
    console.log('on', c)
    this.classList.add("video_slider_active");
    video.play(); 
     
   }   
    
    function updateButton() {
      
      const icon = video.paused ? '►' : '❚❚';      
      videoPlay.textContent = icon;
    }
    function updateVolume() {
      (video.volume === 1) ? video.volume = 0 : video.volume = 1
      const icon = (video.volume === 1) ? 'off' : 'on';      
      videoVolume.textContent = icon;
    }
    /* video.addEventListener('click', togglePlay); */
    video.addEventListener('play', updateButton);
    video.addEventListener('pause', updateButton);
}
 
videoCards.forEach((item) => item.addEventListener('click', toggleSlider))
 


//course
const course = document.querySelector('.request_section')
const courseList = course.querySelectorAll('.request_title_section')
let nameSourse = "plus";
function toggleSourse(e) {
  if(nameSourse === e.target.id){
    return
  }
  
  document.getElementById(nameSourse).classList.remove("request_title_section_active") 
  nameSourse = e.target.id
  e.target.classList.add("request_title_section_active")
}
courseList.forEach((item) => item.addEventListener('click', toggleSourse))