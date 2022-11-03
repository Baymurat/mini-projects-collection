import "../style/style.scss";

const trailer = document.querySelector<HTMLDivElement>("#trailer");

const mouseMoveListener = (e: MouseEvent) => {
  const x = e.clientX - trailer.offsetWidth / 2;
  const y = e.clientY - trailer.offsetHeight / 2;

  const interactable = (e.target as HTMLDivElement).closest(".interactable");
  const interacting = interactable !== null;

  const keyframes: PropertyIndexedKeyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 1.5 : 1})`,
  };

  trailer.animate(keyframes, {
    duration: 800,
    fill: "forwards",
  });
};

window.addEventListener("mousemove", mouseMoveListener);
