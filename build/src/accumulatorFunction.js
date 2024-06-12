export function accumulatorFunc(arg = 0) {
    let sum = arg;
    function summator(arg) {
        sum += +arg;
        return summator;
    }
    summator.toString = function () {
        return sum;
    };
    return summator;
}
