const palindromes = function (string) {
    let newString = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    let newNewString = newString.replace(/\s+/g, '');
    let newNewNewString = newNewString.toLowerCase();
    let textArray = newNewNewString.split("");
    let reverseArray = textArray.reverse();
    let finalString = reverseArray.join("");
    console.log(newNewString);
    console.log(finalString);
    if (newNewNewString === finalString) return true;
    else return false;
};
palindromes("Racecar!");
// Do not edit below this line
module.exports = palindromes;
