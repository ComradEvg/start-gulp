/* Многостраничный комментарий - alt+shift+a */

const burger = document.querySelector(".burger");
const nav = document.querySelector(".menu");
const headerBG = document.querySelector('.header');
const btnNav = document.querySelector(".header__btn-inner");
const mainBgPicture = document.querySelector("#imageBg");
const $mainScreen = document.querySelector('.main-screen');
const $mainScreenBg = document.querySelector('.main-screen__bg-image');
const $captionSpoiler = document.querySelector('.iphone-repairs__top')
const $textSpoiler = document.querySelector('.iphone-repairs__opinions-inner')
const $articlesIcon = document.querySelector('.iphone-repairs__icon')

const heghtSpoilerArticles = function () {
   let height = 0
   for (let iterator of $textSpoiler.children) {
      height += iterator.clientHeight
   }
   return height
}/* Функция служит для вычисления в спойлере размера статей для дальнейшей анимации height (см. $captionSpoiler.addEventListener)*/

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

function startNavigation() {
   const styleDisplayBurger = getComputedStyle(burger).display;

   if (styleDisplayBurger === "block") {
      new BurgerNavigation(burger, nav, btnNav); /* btnNav необходимо сделать не обзяательной см. про оператор "?." */
   }
   else {
      nav.addEventListener("click", BurgerNavigation.ScrollNav)
   }
};
startNavigation();

function mainScreenBg() {
   if ((mainBgPicture.clientWidth / pageWidth) * 100 >= 76) {
      $mainScreen.classList.add('height-active');
      $mainScreen.style.height = `${pageHeight * 0.8}px`;
      $mainScreenBg.style.width = "100%"
      mainBgPicture.setAttribute('style', `width: ${pageWidth * 0.7}px; object-fit: cover; margin-left: auto;`)
      /* Данная функция отменяет main-screen на 100% экрана, в связи с этим меняются стили фотограф, все изменнеия просчитываются в зависимости от ширины экрана */
   }
};

mainScreenBg();



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
   breakpoints: {
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


function sliderOn() {
   if (pageWidth <= 915) {
      const sliderElements = document.querySelectorAll('.services__card')
      const sliderInner = document.querySelector('.services__card-inner')
      sliderInner.classList.add('swiper')
      sliderInner.classList.remove('services__card-inner')
      if (sliderInner.classList.contains('swiper')) {
         sliderElements.forEach(elem => {
            elem.remove()
         })
         sliderInner.insertAdjacentHTML('beforeend', `<div class="swiper-wrapper"></div>
         <div class="swiper-pagination"></div>`);
         for (let i = 0; i <= sliderElements.length - 1; i++) {
            sliderInner.children[0].insertAdjacentHTML('beforeend', `<div class="swiper-slide">${sliderElements[i].outerHTML}</div>`);

         }
         const swiper1 = new Swiper(".swiper", {
            pagination: {
               el: ".swiper-pagination",
               clickable: true,
            },
         })


      }

   }
}
sliderOn()

new ArticlesLibrary('.pop-up-link', {
   SmartphoneRepair: {
      captionPop: 'Smartphones Repair',
      textPop: [
         {
            titleArticle: 'Broken Screens',
            descriptionArticle: 'Lorem ipsum dolor sit amet, consectetur adipisicingelit.Iusto voluptates dolorem, odit enim! Aspernatur quos ipsa,sit! Repudiandae, laboriosam enim aliquam, similique suscipit quas dicta voluptate repellendus distinctio laborum at!'
         },
         {
            titleArticle: 'Liquid Damage',
            descriptionArticle: 'Lorem ipsum dolor sit amet, consectetur adipisicingelit.Iusto voluptates dolorem, odit enim! Aspernatur quos ipsa,sit! Repudiandae, laboriosam enim aliquam, similique suscipit quas dicta voluptate repellendus distinctio laborum at!'
         },
         {
            titleArticle: 'Camera Replacement',
            descriptionArticle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto voluptatesdolorem, odit enim! Aspernatur quos ipsa, sit! Repudiandae, laboriosam enim aliquam, similique suscipit quas dicta voluptate repellendus distinctio laborum at!'
         },
         {
            titleArticle: 'Not charging',
            descriptionArticle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto voluptates dolorem, odit enim! Aspernatur quos ipsa,sit! Repudiandae, laboriosam enim aliquam, similique suscipit quas dicta voluptate repellendus distinctio laborum at!'
         },

      ]
   }
})


$captionSpoiler.addEventListener('click', ()=>{
      $articlesIcon.classList.toggle('rotate')
      $textSpoiler.classList.toggle('active-spoiler')
   if ($textSpoiler.classList.contains('active-spoiler')){
      const heightSpoiler = heghtSpoilerArticles();
      animate ({
         duration: 300,

         timing: (progress)=> {return Math.pow (progress, 2)},

         draw: function (progress){
            $textSpoiler.style.height = progress * heightSpoiler + "px"}
      })
   }

   else{
      $textSpoiler.style.height = 0 + "px"
   }
})

function animate({duration, timing, draw}){
   let start = performance.now();
   console.log(start)
   requestAnimationFrame(function animate(time){
      let timePassed = (time - start) / duration;
      if (timePassed > 1){
         timePassed = 1
      }
      let progress = timing(timePassed)
      draw (progress)
      if(timePassed < 1){
         requestAnimationFrame(animate);
      }
   })
}




/* 1. Сделать отмеену выбора в выпадающем списке элемента, чтоб девайс репаир всегда оставался в главе списка 
2. Поубирать лишние классы в scss
3. Просмотерть код, на наличие задач*/