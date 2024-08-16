'use strict';


const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
  console.log(elem)
}


const sections = document.querySelectorAll("[data-section]");

console.log(sections)
const scrollReveal = () => {
  sections.forEach((fadeIn) => {
    if (fadeIn.getBoundingClientRect().top < window.innerHeight / 1.5) {
      fadeIn.classList.add("active");
    } else {
      fadeIn.classList.remove("active");
    }
  });
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);

