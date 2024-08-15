const findTheOldest = function(array) {
    const d = new Date();
    let year = d.getFullYear();    
    let iOldest;
    let ageOldest = 0;
    for (let i in array) {
        if (!array[i].yearOfDeath) {
            if ((year - array[i].yearOfBirth) > ageOldest) {
                ageOldest = (year - array[i].yearOfBirth);
                iOldest = i;
            } 
        }
        else if ((array[i].yearOfDeath - array[i].yearOfBirth) > ageOldest) {
            ageOldest = (array[i].yearOfDeath - array[i].yearOfBirth);
            iOldest = i;
        }
    }
   
    return array[iOldest];
};
// Do not edit below this line
module.exports = findTheOldest;
