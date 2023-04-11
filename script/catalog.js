/*  const swiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  speed: 500,
  swiperSlideSize: "auto",
});  */

          
           const swiper = new Swiper(".swiper-container", {
            loop: true,
            slidesPerView: '8',
            centeredSlides: true,
            speed: 500,
            clickable: true,
            slideToClickedSlide: true,
            breakpoints: {
              300: {
               slidesPerView: '3',
              },
              768: {
                slidesPerView: '4',
                
              },
              1024: {
                slidesPerView: '6',
                
              },
      
            }
          }
          );  
const catalog = document.querySelectorAll(".swiper-container");
const names = document.querySelectorAll(".catalog_card_name");
const initialCards = [
  {
    name: "Груша",
    link: "./image/catalog/Pear.png",
    text: "Классический грушевый лимонад может оказаться особенным, если он из Грузии. Sadari Груша приятно удивляет выразительным ароматом, знакомым с детства.",
    position: "1 / 12",
    georg: "მსხალი",
    picture: "./image/груша текст.svg"
  },
  {
    name: "Тархун",
    link: "./image/catalog/Tarhoo.png",
    text: "Настоящая легенда не одного поколения. Неповторимый освежающий аромат эстрагона, особая текстура, глубокий изумрудный оттенок — Тархун будто само воплощение природы Грузии.",
    position: "2 / 12",
    georg: "ტარხუნა",
    picture: "./image/тархун текст.svg"
  },
  {
    name: "Саперави",
    link: "./image/catalog/Wine.png",
    text: "Саперави — это не только грузинское вино, но в первую очередь виноград. Знаменитый сорт теперь нашёл яркое воплощение в новом напитке. Густой, насыщенный вкус создаёт особое настроение.",
    position: "3 / 12",
    georg: "საფერავი",
    picture:"./image/саперави текст.svg"
  },
  {
    name: "Лимон",
    link: "./image/catalog/Lemon.png",
    text: "Лучше лимонада может быть только лимонад по грузинскому рецепту. И Sadari Лимон — это улучшенная классическая формула с выдержанным балансом между лимонной кислинкой и сладостью.",
    position: "4 / 12",
    georg: "ლიმონი ",
    picture:"./image/лемон текст.svg"
  },
  {
    name: "Крем-сливки",
    link: "./image/catalog/Cream.png",
    text: "В этом напитке сосредоточен вкус полноценного сливочного десерта. За такое неожиданное сочетание его и любят. А грузинские мастера сумели особенно подчеркнуть нотки свежего сливочного крема.",
    position: "5 / 12",
    georg: "კრემის კრემი",
    picture: "./image/крем текст.svg"
  },
  {
    name: "Фейхоа",
    link: "./image/catalog/Feijoa.png",
    text: "Фейхоа — воплощение субтропической экзотики, и к климату Грузии хорошо приспособлен. Sadari Фейхоа раскрывает всё богатство аромата и вкуса этого дивного фрукта.",
    position: "6 / 12",
    georg: "ფეიხოა",
    picture:"./image/фейхоа текст.svg"
  },
  {
    name: "Барбарис",
    link: "./image/catalog/Barberry.png",
    text: "Барбарис сочетает нежно-терпкий вкус с кислинкой и самобытный аромат, который ни с чем не спутать. Всё это ярко выражено в напитке и уравновешено умеренной сладостью.",
    position: "7 / 12",
    georg: "კოწახური",
    picture: "./image/барбарис текст.svg"
  },
  {
    name: "Мохито",
    link: "./image/catalog/Mohito.png",
    text: "Мохито от Sadari содержит всё лучшее от одного из самых знаменитых в мире коктейлей. Хорошо узнаваемое сочетание лайма и мяты теперь в новом лимонаде. Настоящий взрыв свежести и прохлады.",
    position: "8 / 12",
    georg: "მოხიტო",
    picture:"./image/мохито текст.svg"
  },
  {
    name: "Кола",
    link: "./image/catalog/Cola.png",
    text: "Вкус, который не нуждается в описании. Но грузинские мастера привнесли в Sadari Кола толику уникальности. Еле уловимые акценты подарят новые ощущения при каждом глотке.",
    position: "9 / 12",
    georg: "კოლა",
    picture: "./image/кола текст.svg"
  },
  {
    name: "Космополитен",
    link: "./image/catalog/kosmop.png",
    text: "Безалкогольный напиток, дарящий незабываемый вкус сахарной клюквы, свежего цитруса с легкой ноткой мяты.",
    position: "10 / 12",
    georg: "კოსმოპოლიტი",
    picture: "./image/кола текст.svg"
  },
  {
    name: "Просекко",
    link: "./image/catalog/pross.png",
    text: "Безалкогольный лимонад, созданный из лучшего урожая по традиционному грузинскому рецепту. Воплощение природного вкуса ягод, выращенных на богатейшей почве в безупречном климате.",
    position: "11 / 12 ",
    georg: "პროსეკო",
    picture: "./image/кола текст.svg"
  },
  {
    name: "Пино Колада",
    link: "./image/catalog/Pina.png",
    text: "Безалкогольный лимонад с освежающим вкусом спелых фруктов. Экзотический букет из субтропиков с грузинской эстетикой.",
    position: "12 / 12",
    georg: "პინო კოლადა",
    picture: "./image/кола текст.svg"
  },
];
   
function change(e) {
    target = e;
    /* console.log(target) */
   if(target.srcElement.classList.contains("catalog_card_name_active")){
      return
    } 
    /* if(!target.target.classList.contains("swiper-slide-active")){
      return
    } */
     
     img = document.querySelector('.catalog_box_img');
     img.src = "";      
     names.forEach(function(item){
      if(item.classList.contains("catalog_card_name_active")){
        item.classList.remove("catalog_card_name_active")
        
        
      }
      
    })  
    /*console.log(names) */
 target.target.classList.add("catalog_card_name_active"); 
  initialCards.forEach(function(item){
    if(item.name == target.target.innerText){
        document.querySelector('.catalog_card_description').textContent = item.name;
        document.getElementById("pozition").textContent = item.position;
        document.getElementById('card_name').textContent = item.georg;
        img.src = item.link;           
        document.querySelector('.catalog_text_p').textContent = item.text;    
         
        
        
      }
    return
  })
   
}
/* catalog.addEventListener("click", change); */

catalog.forEach(function(el){
  el.addEventListener("click", change);
})
/* console.log(2); */