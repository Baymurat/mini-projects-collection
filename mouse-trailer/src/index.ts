import "../style/style.scss";

const trailer = document.querySelector<HTMLDivElement>("#trailer");
const trailerIcon = document.querySelector("#trailer-icon");

const getInteractingIcon = (type: string): string => {
  switch (type) {
    case "video":
      return "fa-solid fa-play";
    default:
      return "fa-solid fa-arrow-up-right-from-square";
  }
};

const mouseMoveListener = (e: MouseEvent) => {
  const x = e.clientX - trailer.offsetWidth / 2;
  const y = e.clientY - trailer.offsetHeight / 2;

  const interactable = (e.target as HTMLDivElement).closest<HTMLDivElement>(".interactable");
  const interacting = interactable !== null;

  trailerIcon.className = "";

  if (interacting) {
    trailerIcon.className = getInteractingIcon(interactable.dataset.type);
  }

  const keyframes: PropertyIndexedKeyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 4 : 1})`,
  };

  trailer.animate(keyframes, {
    duration: 800,
    fill: "forwards",
  });
};

window.addEventListener("mousemove", mouseMoveListener);
