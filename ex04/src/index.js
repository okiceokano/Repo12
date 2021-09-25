function sumFibonacci(num) {
    var first = 0;
    var second = 1;
    var result = 0;
    while (second <= num) {
        if (second % 2 !== 0) {
            result += second;
        }
        second += first;
        first = second - first;
    }    
    return result;
}
console.log(sumFibonacci(20));
module.exports = sumFibonacci;