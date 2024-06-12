export function accumulatorFunc(arg: number | undefined = 0) {
  let sum: number = arg;
  
  function summator(arg: number) {
    sum += +arg;
    return summator;
  }
  summator.toString = function () {
    return sum;
  };
  return summator;
}
