export function carryingFunc(func: Function) {
  const funcArgumentsCount: number = func.length;
  return (...args: any) => {
    let argList: Array<any> = [];
    function curr(...args: any) {
      args.forEach((el: any) => argList.push(el));
      return argList.length < funcArgumentsCount ? curr : func(...argList);
    }
    return curr(...args);
  };
}