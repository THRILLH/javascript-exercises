const repeatString = function(text, num) {
    let result = "";
    for (let i = 0; i < num; i++) {
        result = result.concat(text); 
    }
    if (num < 0) return "ERROR"
    else return result;
};
// Do not edit below this line
module.exports = repeatString;
