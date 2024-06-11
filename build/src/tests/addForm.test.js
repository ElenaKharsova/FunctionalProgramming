import { addForm } from "../addForm";
describe("addForm", () => {
    it("creates basic markup", () => {
        let el;
        el = document.createElement("div");
        addForm(el);
        expect(el.querySelector("button")).toBeTruthy();
    });
});
