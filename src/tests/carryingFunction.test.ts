import { carryingFunc } from "../carryingFunction";

describe("Carrying function", () => {
  const func: Function = (a:number, b:number, c:number, d:number, e:number) => a + b + c + d + e;
  const hof: Function = carryingFunc(func);
  it("hof(1, 2, 3, 4, 5) = 15", () => {    
    expect(hof(1, 2, 3, 4, 5)).toBe(15);
  });
  it("hof(2, 3, 4)(5, 6) = 20", () => {    
    expect(hof(2, 3, 4)(5, 6)).toBe(20);
  });
  it("(3, 4)(5, 6)(7) = 25", () => {
    expect(hof(3, 4)(5, 6)(7)).toBe(25);
  });
  it("(4, 5)(6)(7, 8) = 30", () => {
    expect(hof(4, 5)(6)(7, 8)).toBe(30);
  });
  it("(5)(6)(7)(8)(9) = 35", () => {
    expect(hof(5)(6)(7)(8)(9)).toBe(35); 
  });
});
