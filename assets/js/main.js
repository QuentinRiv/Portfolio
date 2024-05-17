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

      var translateY = -(pourcent * 100);
      target.style.top = (pourcent * 100).toString() + "%";
      target.style.transform = `translateX(0%) translateY(${translateY}%)`;
      console.log(target); 

    });
})

/*=============== MIXITUP FILTER PORTFOLIO ===============*/


/*===== Link Active Work =====*/


/*===== Work Popup =====*/


/*=============== SERVICES MODAL ===============*/


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== INPUT ANIMATION ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/


// fleche = document.querySelectorAll(".skills__arrow").length;
// console.log(fleche);