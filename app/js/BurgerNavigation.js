
class BurgerNavigation {
   constructor(burger, nav, navBtn) {
      this.burger = burger;
      this.nav = nav;
      this.navBtn = navBtn; /* Данную переменную необходимо сделать не обязательной */

      this.BtnAdd.bind(this)()
      this.AddListenerBurgerFunc = this.AddListenerBurgerFunc.bind(this);
      this.burger.addEventListener('click', this.AddListenerBurgerFunc);
   };
   AddListenerBurgerFunc(event) {
      event.stopPropagation();
      
      event.currentTarget.classList.toggle("active");
      if (this.burger.classList.contains("active")) {
         this.nav.classList.add("active");
         this.navBtn.classList.add("active");
         this.AddListenerMenuOn();
      }
      else {
         this.nav.classList.remove("active");
         document.removeEventListener('click', this.ClickInMenu);
         this.nav.removeEventListener('touchstart', function (e) {
            this.TouchStart(e);
         }, { passive: true });
         this.nav.removeEventListener('touchmove', function (e) {
            this.TouchMove(e);
         }, { passive: true });
      }
   };

   AddListenerMenuOn() {
      this.ClickInMenu = this.ClickInMenu.bind(this);
      this.TouchStart = this.TouchStart.bind(this);
      this.TouchMove = this.TouchMove.bind(this);
      document.addEventListener('click', this.ClickInMenu);
      this.nav.addEventListener('touchstart', this.TouchStart, { passive: true });
      this.nav.addEventListener('touchmove', this.TouchMove, { passive: true });
   };


   ClickInMenu(event) {
      event.preventDefault();
      const target = event.target;
      const targetMenu = target == this.nav || this.nav.contains(target);
      const targetBurger = target == this.burger;
      const menuActive = this.nav.classList.contains('active');

      if (!targetMenu && !targetBurger && menuActive) {
         this.nav.classList.remove("active");
         this.burger.classList.remove("active");
      }
      else {
         BurgerNavigation.ScrollNav(event);
      }
   }


   set pointStart(pointstart) {
      this._pointstart = pointstart;
   }

   get pointStart() {
      return this._pointstart;
   }

   set pointMove(pointmove) {
      this._pointmove = pointmove;
   }

   get pointMove() {
      return this._pointmove;
   }

   TouchStart(event) {
      event.stopPropagation()
      this.pointStart = event.targetTouches[0].clientX;
   };
   TouchMove(event) {
      event.stopPropagation()
      this.pointMove = event.targetTouches[0].clientX;
      if (this.pointStart + 100 < this.pointMove) {
         this.nav.classList.remove("active");
         this.burger.classList.remove("active");
         this.nav.classList.remove("active");
         document.removeEventListener('click', this.ClickInMenu);
         this.nav.removeEventListener('touchstart', this.TouchStart, { passive: true });
         this.nav.removeEventListener('touchmove', this.TouchMove, { passive: true });
      }
   };

   static ScrollNav(event) {
      event.preventDefault();
      const stringEventLower = event.target.text.toLowerCase()
      const sections = document.querySelectorAll("[data-section]")
      const pageHeight = document.documentElement.clientHeight
      sections.forEach(section => {
         if (section.dataset.section === stringEventLower) {
            window.scrollTo(0, section.offsetTop - pageHeight / 8)
         }
      })
   }

   BtnAdd(){
      const navElments = this.nav;                                                                        
      const btn = this.navBtn
      navElments.insertAdjacentElement('beforeEnd', btn);
      this.navBtn.classList.add("active");
      /* Код добавляет кнопки в низ страницы и также внутрь самого элемента nav, кнопки изначально не входили в состав nav  */
   }
}








