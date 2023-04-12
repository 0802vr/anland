document.addEventListener('DOMContentLoaded', function () {
    new Splide('#slider', {
       type   : 'loop', 
      drag   : 'free',
      focus  : 'start',    
      /* autoStart: false, */
     /*  autoPlay: false, */
      autoScroll: false,   
      autoWidth: true,   
      start:0,      
      pagination: false, 
      arrows:false,
      flickPower: number = 10,    
       /* autoScroll: {
        autoplay: 'pause',
        pauseOnHover: boolean = true,
      }, */ 
    }).mount( window.splide.Extensions );
  });