//import { carryingFunc } from "./carryingFunction";
export function addForm(el) {
    const button = document.createElement("button");
    el.appendChild(button);
    button.innerHTML = "Click";
    //button.addEventListener("click", carryingFunc);
}
