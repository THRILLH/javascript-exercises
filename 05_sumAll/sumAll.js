const sumAll = function(num1, num2) {
    let newArray = [];
    newArray.push(num1)
    for (i = num1; i < num2; i++) {
        if (newArray.at(-1) < num2) {
            newArray.push((newArray.at(-1)) + 1);
        }
    }
    console.log(newArray);
    let result = newArray.reduce((a, b) => a + b, 0);
    return console.log(result);
};
sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;
