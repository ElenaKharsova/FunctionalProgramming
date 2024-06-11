export function carryingFunc(func) {
    const funcArgumentsCount = func.length;
    return (...args) => {
        let argList = [];
        function curr(...args) {
            args.forEach((el) => argList.push(el));
            return argList.length < funcArgumentsCount ? curr : func(...argList);
        }
        return curr(...args);
    };
}
