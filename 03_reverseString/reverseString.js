const reverseString = function(str) {
    let arrayedString = [...str];
    let reversedArray = [];
    let reversedString;
    
    for (let i = 0; i < arrayedString.length; i++) {
        reversedArray.unshift(arrayedString[i]);
    }

    reversedString = reversedArray.join("");
    
    return reversedString;
};
reverseString("buei");
// Do not edit below this line
module.exports = reverseString;
