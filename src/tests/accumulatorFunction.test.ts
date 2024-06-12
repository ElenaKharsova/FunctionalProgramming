import { accumulatorFunc } from "../accumulatorFunction";

describe("Accumulator function", () => {
  const sum: Function = accumulatorFunc;
  it("sum() = 0", () => {
    expect(sum().toString()).toBe(0);
  });
  describe("s", () => {
    let s: Function = beforeEach(()=>{
      s = sum();
    })
    it("s(1) = 1", () => {
      expect(s(1).toString()).toBe(1);
    });
    it("s(1)(2) = 3", () => {
      expect(s(1)(2).toString()).toBe(3);
    });
    it("s(3)(4)(5) = 12", () => {
      expect(s(3)(4)(5).toString()).toBe(12);
    });
  });
  describe("s3", () => {
    let s3: Function = beforeEach(()=>{
      s3 = sum(3);
    });
    it("s3(5) = 8", () => {
      expect(s3(5).toString()).toBe(8);
    });
    it("s3(6) = 9", () => {
      expect(s3(6).toString()).toBe(9);
    });
  });
});
