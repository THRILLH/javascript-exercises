const fibonacci = function(num) {
    let fibA = 0;
    let fibB = 1;
    let fibC;
    if (num == 0) return fibA;
    if (num < 0) return "OOPS";
    for (i = 1; i < num; i++) {
        fibC = fibB;
        fibB += fibA;
        fibA = fibC;
    }
    return fibB;
};
console.log(fibonacci(4));
// Do not edit below this line
module.exports = fibonacci;
