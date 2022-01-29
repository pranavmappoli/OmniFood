"use strict";

// ????????????mobile button
const menuButton = document.querySelectorAll(".mobile-btn");
const mainNav = document.querySelector(".main-nav");
const headsec = document.querySelector(".head-sec");
const body = document.querySelector("body");

menuButton.forEach((elem) =>
  elem.addEventListener("click", () => {
    document.querySelector("header").classList.toggle("mobile-active");
  })
);

mainNav.addEventListener("click", (e) => {
  const elem = e.target.closest(".sec-item");
  if (!elem) return;
  document.querySelector("header").classList.remove("mobile-active");
});

// Sticky Navigation
const options = {
  root: null,
  rootMargin: "-80px",
  threshold: 0,
};
const callbackfun = (entries) => {
  const ent = entries[0];
  if (!ent.isIntersecting) {
    body.classList.add("sticky-nav");
  } else {
    body.classList.remove("sticky-nav");
  }
};
const observer = new IntersectionObserver(callbackfun, options);
observer.observe(headsec);

//smooth scrolling

const buttons = document.querySelectorAll("a:link");
buttons.forEach((elm) => {
  elm.addEventListener("click", (e) => {
    e.preventDefault();
    const href = elm.getAttribute("href");
    if (href == "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (href.startsWith("#")) {
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    }
  });
});
