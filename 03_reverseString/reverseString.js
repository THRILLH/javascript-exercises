const reverseString = function(text) {
    let textArray = text.split("");
    textArray.reverse();
    let textReversed = textArray.join("");
    return textReversed;
};

// Do not edit below this line
module.exports = reverseString;
