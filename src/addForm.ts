//import { carryingFunc } from "./carryingFunction";
export function addForm(el: Element) {
  const button: HTMLElement = document.createElement("button");
  el.appendChild(button);
  button.innerHTML = "Click"
  //button.addEventListener("click", carryingFunc);
}


