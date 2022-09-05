// import "../style/style.scss";

// const lists = document.querySelectorAll("li");
// let currentActive = document.querySelector(".active");

// lists.forEach((list) => {
//   list.addEventListener("click", () => {
//     list.classList.add("active");
//     currentActive.classList.remove("active");
//     currentActive = list;
//   });
// });

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = createRoot(container);
root.render(<App />);
