import "../style/style.scss";

const items = document.querySelectorAll(".menu-item");
const backgroundPattern = document.querySelector<HTMLElement>(".menu-background-pattern");

items.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    backgroundPattern.style.setProperty("--active-index", `${index + 1}`);
  });
});


const menu = document.querySelector("#menu-items");
const burgerMenuButton = document.querySelector(".burger-menu");
burgerMenuButton.addEventListener("click", function () {
  menu.classList.toggle("shown");
  this.classList.toggle("active");
});
