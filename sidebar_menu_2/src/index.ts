import "../style/style.scss";

const lists = document.querySelectorAll("li");
let currentActive = document.querySelector(".active");

lists.forEach((list) => {
  list.addEventListener("click", () => {
    list.classList.add("active");
    currentActive.classList.remove("active");
    currentActive = list;
  });
});
