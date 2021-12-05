
class ArticlesLibrary {
   constructor(link, articles) {
      this.link = link;
      this.articles = articles;

      this.Start.bind(this)()
   }



   Start() {
      const arrLink = document.querySelectorAll(this.link)
      arrLink.forEach(linkActive => {
         linkActive.addEventListener("click", this.Search.bind(this))
      })
   }

   Search(event) {
      event.preventDefault();
      for (let key in this.articles) {
         if (event.target.dataset.article.toLowerCase() === key.toLowerCase()) {
            /* Тут из-за конфликта в слайдере я сделал вставку кода статьи в section родитель, если предка section не будет, думаю случится беда */
            event.target.closest('section').insertAdjacentHTML('afterend', this.PopHtmlCreate(this.articles[key]))
            this.bodyBody.classList.add('lock')
            this.closePop.bind(this)()
         }
         else {
            event.target.closest('section').insertAdjacentHTML('afterend', this.PopHtmlCreate(null))
            this.bodyBody.classList.add('lock')
            this.closePop.bind(this)()
         }
      }
   }

   get bodyBody() {
      return document.querySelector("body");
   }

   get $burgerArticles(){
      return document.querySelector(".articles__burger");
   }

   closePop() {
     this.$burgerArticles.addEventListener('click', (event) => {
        const timestr = getComputedStyle(this.$burgerArticles).transitionDuration
        const timefloat = parseFloat(timestr.substring(0, timestr.length - 1))
         this.$burgerArticles.classList.add('active-burger-articles')
         const $removeEl = event.currentTarget.closest('.articles')
         setTimeout(()=>{
            $removeEl.remove()
            this.bodyBody.classList.remove("lock")
         }, timefloat*1000)
      })
   }

   PopHtmlCreate(data) {
      const arrData = data;
      if (arrData === null) {
         return `<div class="articles">
                           <div class="articles__inner">
                              <div class="articles__burger">
                                 <span></span>
                                 <span></span>
                              </div>
                              <div class="articles__title">Unfortunately there is no data yet...</div>
                           </div>
                        </div>`
      }
      else {
         const innerhtml = arrData.textPop.map(item => {
            return `<li class="opinion__inner">
                   <p class="opinion__title">${item.titleArticle}</p>
                   <p class="opinion__articles">${item.descriptionArticle}</p>
                 </li>`
         })
         return `<div class="articles">
                           <div class="articles__inner">
                              <div class="articles__burger">
                                 <span></span>
                                 <span></span>
                              </div>
                              <div class="articles__title">${data.captionPop}</div>
                              <ul class="articles__opinions-inner">${innerhtml.join('')}</ul>
                           </div>
                        </div>`
      }
   }

}