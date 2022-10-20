import "../style/style.scss";

// const cards = document.querySelectorAll(".card");

// const handleMouseMove = (e) => {
//   const { currentTarget: target } = e;
//   const rect = target.getBoundingClientRect();
//   const x = e.clientX - rect.left;
//   const y = e.clientY - rect.top;

//   target.style.setProperty("--mouse-x", `${x}px`);
//   target.style.setProperty("--mouse-y", `${y}px`);
// };

// cards.forEach((card) => {
//   card.addEventListener("mousemove", handleMouseMove);
// });

document.querySelector("#cards")
  .addEventListener("mousemove", (e: MouseEvent) => {
    const cards: NodeListOf<HTMLElement> = document.querySelectorAll(".card");

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });
