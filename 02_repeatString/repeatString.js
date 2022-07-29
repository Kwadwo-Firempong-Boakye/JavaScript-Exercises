const repeatString = function(string, num) {
    let finalString = "";
    if (num < 0) {
        finalString = "ERROR";
    } else {
        for (let i = 0; i < num; i++) {
            finalString += string;
        }
    }
    return finalString;
};
console.log(repeatString("yo", 2));
// Do not edit below this line

module.exports = repeatString;
