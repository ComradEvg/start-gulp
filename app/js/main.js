/* Многостраничный комментарий - alt+shift+a */

const burger = document.querySelector(".burger");
const nav = document.querySelector(".menu");
const headerBG = document.querySelector('.header');
const btnNav = document.querySelector(".header__btn-inner");
const mainBgPicture = document.querySelector("#imageBg");
const $mainScreen = document.querySelector('.main-screen');
const $mainScreenBg = document.querySelector('.main-screen__bg-image');
const $burgerArticles = document.querySelector(".articles__burger");

const pageWidth = document.documentElement.clientWidth
const pageHeight = document.documentElement.clientHeight


function ibgmy() {
   const ibgs = document.getElementsByClassName('ibg');
   for (let ibg of ibgs) {
      const img = ibg.children[0];
      const imgsrc = img.getAttribute("src");
      ibg.style.backgroundImage = `url("${imgsrc}")`;
   }
}
ibgmy();

function startNavigation(){
const styleDisplayBurger = getComputedStyle(burger).display;
   
if(styleDisplayBurger === "block"){
   new BurgerNavigation (burger, nav, btnNav); /* btnNav необходимо сделать не обзяательной см. про оператор "?." */
}
else{
   nav.addEventListener("click", BurgerNavigation.ScrollNav)
}
};
startNavigation();

function mainScreenBg(){
   if ((mainBgPicture.clientWidth / pageWidth)*100 >= 76){
      $mainScreen.classList.add('height-active');
      $mainScreen.style.height = `${pageHeight*0.8}px`;     
      $mainScreenBg.style.width = "100%"
      mainBgPicture.setAttribute('style', `width: ${pageWidth * 0.7}px; object-fit: cover; margin-left: auto;`)
      /* Данная функция отменяет main-screen на 100% экрана, в связи с этим меняются стили фотограф, все изменнеия просчитываются в зависимости от ширины экрана */
   }
};

mainScreenBg();

$burgerArticles.addEventListener('click', ()=>{
   $burgerArticles.classList.toggle('active-burger-articles')
})

// window.addEventListener('scroll', function () {
//    if (50 < window.pageYOffset && window.innerWidth >= 769 && window.innerHeight >= 769) {
//       menuIcon.classList.add("deactive")
//       headerBG.classList.add("active")
//    }
//    else {
//       menuIcon.classList.remove("deactive")
//       headerBG.classList.remove("active")
//    }
// });


const select = new Select('#select', {
   placeholder: "Device Repair",
   data: [
      { id: '1', value: "iPhone" },
      { id: '2', value: "Google" },
      { id: '3', value: "All Smartphones" },
      { id: '4', value: "Tablet" },
      { id: '4', value: "Computer" },
      { id: '4', value: "Game Console" },
      { id: '4', value: "Gadgets" }
   ],
   onSelect(item) {

   }
})

const swiper = new Swiper(".swiper-gallery", {
   breakpoints:{
      319: {
         slidesPerView: 1.1,
      },
      450: {
         slidesPerView: 2.1,
      }
   }, 
   preloadImages: false,
   lazy: {
      loadOnTransitionStart: false,
      loadPrevNext: true,
   },
   watchSlidersProgress: true,
   watchSlidersVisibility: true,
})


function sliderOn(){
   if (pageWidth <= 915){
      const sliderElements = document.querySelectorAll('.services__card')
      const sliderInner = document.querySelector('.services__card-inner')
      sliderInner.classList.add('swiper')
      sliderInner.classList.remove('services__card-inner')
      if(sliderInner.classList.contains('swiper')){
         sliderElements.forEach(elem =>{
            elem.remove()
         })
         sliderInner.insertAdjacentHTML('beforeend', `<div class="swiper-wrapper"></div>
         <div class="swiper-pagination"></div>`);
         for (let i = 0; i <= sliderElements.length-1; i++){
            sliderInner.children[0].insertAdjacentHTML('beforeend', `<div class="swiper-slide">${sliderElements[i].outerHTML}</div>`);
            
         }
               new Swiper(".swiper", {
                  pagination: {
                     el: ".swiper-pagination",
                     clickable: true,
                  },
               })
      }

   }
}
sliderOn()




// Сделать это действие по определенному экрану


/*                < div class="swiper" >
							< !--Additional required wrapper-- >
							<div class="swiper-wrapper">
								<!-- Slides -->
								<div class="swiper-slide">
								</div>
								
							</div>
							<div class="swiper-pagination"></div>
						</div >
 */
   