const body = document.querySelector("body");
const hamBurger = document.querySelector(".hero__navbar--hamburger");
const navBar = document.querySelector(".hero__navbar--links");
const overLay = document.querySelector(".overlay");
const navLinks = document.querySelectorAll(".hero__navbar--links__link");

hamBurger.addEventListener("click", () => {
  body.classList.toggle("active");
  overLay.classList.toggle("active");
  navBar.classList.toggle("active");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navBar.classList.contains("active")) {
        body.classList.remove("active");
        overLay.classList.remove("active");
        navBar.classList.remove("active");
      } else {
        return;
      }
    });
  });
});
