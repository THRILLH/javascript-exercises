const getTheTitles = function(array) {
    let newArray = [];
    for (let i in array) {
        newArray.push(array[i].title);
}
    return newArray;
};


// Do not edit below this line
module.exports = getTheTitles;
