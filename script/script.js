 
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#product', {
      type   : 'loop',
      drag   : 'free',
      focus  : 'start', 
      start:1,
      autoWidth: true, 
      pagination: false, 
      arrows:false,
      flickPower: number = 10,
      autoScroll: {
        speed: .1,
        pauseOnHover: boolean = false,
        
      },
    }).mount( window.splide.Extensions );
  });  
  document.addEventListener('DOMContentLoaded', function () {
    new Splide('#partnets_cards', {
      type   : 'loop',
      drag   : 'free',
      focus  : 'start',       
      autoWidth: true,
      gap:"20px",
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
  document.addEventListener('DOMContentLoaded', function () {
    new Splide('#banner', {
      type   : 'loop',
      drag   : 'free',
      focus  : 'start',       
      autoWidth: true, 
      start:1,       
      pagination: false, 
      arrows:false,
      flickPower: number = 10,
      autoScroll: {
        speed: .1,
        pauseOnHover: boolean = false,
      },
    }).mount( window.splide.Extensions );
  });
  document.addEventListener('DOMContentLoaded', function () {
    new Splide('#sadari', {
      type   : 'loop',       
      focus  : 'start',       
      autoWidth: true, 
      start:1,           
      pagination: false, 
      arrows:false,      
      noDrag: '.banner_main_runline', 
      autoScroll: {
        speed: .1,
        pauseOnHover: boolean = false,
        allowTouchMove: boolean = false, 
        draggable: boolean = false,
        
      },
    }).mount( window.splide.Extensions );
  }); 
  document.addEventListener('DOMContentLoaded', function () {
    new Splide('#banner_partners', {
      type   : 'loop',
      drag   : 'false',
      focus  : 'start',       
      autoWidth: true, 
      start:1,           
      pagination: false, 
      arrows:false,
      flickPower: number = 10,
      autoScroll: {
        speed: .1,
        pauseOnHover: boolean = false,
      },
    }).mount( window.splide.Extensions );
  });
  document.addEventListener('DOMContentLoaded', function () {
    new Splide('#catalog', {
      type   : 'loop',
      drag   : 'free',
      focus  : 'start',  
      start:1,      
      pagination: false,
      flickPower: number = 10, 
      arrows:false,
      autoScroll: {
        speed: 1,
        
      },
    }).mount( window.splide.Extensions );
  }); 

  