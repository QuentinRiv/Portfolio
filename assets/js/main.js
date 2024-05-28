/*=============== SHOW SIDEBAR ===============*/


/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */


/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */


/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll("[data-target]"),
      tabContents = document.querySelectorAll("[data-content]");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const target = document.querySelector(tab.dataset.target);

      tabContents.forEach((tabContent) => {
        tabContent.classList.remove("skills__active");
        tabContent.style.transform = "translateX(10%)"
      });

      target.classList.add("skills__active");

      tabs.forEach((tab) => {
        tab.classList.remove("skills__active");
      });

      tab.classList.add("skills__active");

      var tabs_ar = Array.prototype.slice.call(tabs); // Now it's an Array.
      var total = document.querySelectorAll(".skills__arrow").length;

      let pourcent = tabs_ar.indexOf(tab) / (total - 1);

      target.style.top = (pourcent * 100).toString() + "%";
      target.style.transform = `translateX(0%) translateY(-${pourcent * 100}%)`;
      console.log(target); 

    });
})

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
  selectors: {
    target: ".work__card"
  },
  animation: {
    duration: 300
  }
})

/*===== Link Active Work =====*/
const linkWork = document.querySelectorAll('.work__item');

function activeWork() {
  linkWork.forEach(l => l.classList.remove('active-work'));
  this.classList.add('active-work');
}

linkWork.forEach(l => l.addEventListener('click', activeWork));

/*===== Work Popup =====*/
document.addEventListener("click", (e) => {
  if(e.target.classList.contains('work__button')) {
    togglePortfolioPopup();
    portfolioItemDetails(e.target.parentElement);
  }
})

function togglePortfolioPopup() {
  document.querySelector('.portfolio__popup').classList.toggle('open');
}

document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortfolioPopup);

function portfolioItemDetails(portfolioItem) {
  document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src;
  document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(".work__title").innerHTML;
  document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}

/*=============== SERVICES MODAL ===============*/


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== INPUT ANIMATION ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/


// fleche = document.querySelectorAll(".skills__arrow").length;
// console.log(fleche);