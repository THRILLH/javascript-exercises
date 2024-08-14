const removeFromArray = function(array, ...args) {
    let newArray = [];
        newArray = array.filter(val => !args.includes(val));

    return newArray;
};

//return array.filter(val => !args.includes(val))
// val => val !== args
// Do not edit below this line
module.exports = removeFromArray;
