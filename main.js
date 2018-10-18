"use strict";
// svg animation //
import TweenMax from "gsap/TweenMax";

TweenMax.staggerFrom(
  " #firkanter_1_ path",
  1,
  {
    ease: Power4.easeOut,
    y: -1500
  },
  0.03
);

// svg animation slut //

// sticky menu //
const nav = document.querySelector("#navigation");
const navTop = nav.offsetTop;

window.addEventListener("scroll", stickyNavigation);

function stickyNavigation() {
  if (window.scrollY >= navTop) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }
}

// sticky menu slut //
