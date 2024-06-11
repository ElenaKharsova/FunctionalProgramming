import { addForm } from "./addForm";

const appEl = document.querySelector("#app")
if (!appEl) {
    throw new Error('There is no the element #app')
}
addForm(appEl);
