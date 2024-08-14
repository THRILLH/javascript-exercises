const sumAll = function(num1, num2) {
    if ((typeof num1 !== 'number') || (typeof num2 !== 'number')) {
        return "ERROR";
    }
    else if ((num1 < 0 ) || (num2 < 0)) {
        return "ERROR";
    }
    else if ((num1 % 1 !== 0) || num2 % 1 !== 0) {
        return "ERROR";
    }
    
    // Swap variables if num1 is bigger than num2
    else if (num1 > num2) {
        let tmp = num1;
        num1 = num2;
        num2 = tmp;
    }
    let newArray = [];
    newArray.push(num1)
    for (i = num1; i < num2; i++) {
        if (newArray.at(-1) < num2) {
            newArray.push((newArray.at(-1)) + 1);
        }
    }
    console.log(newArray);
    let result = newArray.reduce((a, b) => a + b, 0);
    return result;

};
// Do not edit below this line
module.exports = sumAll;
