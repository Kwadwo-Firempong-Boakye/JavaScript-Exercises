const sumAll = function(a, b) {
    let sumNum = 0;

    let biggerNum;
    let smallerNum;

    if (typeof a != "number" || typeof b != "number"){
        return "ERROR";
    } else if (a < 0 || b < 0) {
        return "ERROR";
    } else if (a > b) {
        biggerNum = a;
        smallerNum = b;
    } else if (b > a) {
        biggerNum = b;
        smallerNum = a;
    } else {
        return a;
    }

    

    for (let i = biggerNum; i >= smallerNum; i--) {
        sumNum += i;
    }

    return sumNum;
};

sumAll(6, 15);


// Do not edit below this line
module.exports = sumAll;
