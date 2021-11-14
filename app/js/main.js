
const burger = document.querySelector(".burger");
const nav = document.querySelector(".menu");
const headerBG = document.querySelector('.header');
const btnNav = document.querySelector(".header__btn-inner")


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
   console.log(styleDisplayBurger)
if(styleDisplayBurger === "block"){
   new BurgerNavigation (burger, nav, btnNav); /* btnNav необходимо сделать не обзяательной см. про оператор "?." */
}
else{
   nav.addEventListener("click", BurgerNavigation.ScrollNav)
}
};
startNavigation();


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









// const swiper = new Swiper(".swiper", {
//    pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//    },
// })
// Сделать это действие по определенному экрану




