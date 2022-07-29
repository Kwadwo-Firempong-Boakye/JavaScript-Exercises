const removeFromArray = function(arr, ...value) {

    //console.log("arr is", arr);
    //console.log("value is", value);
    
    let loopCount = value.length;

    for (let i = 0; i < loopCount; i ++){
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === value[i]) {
                arr.splice(j,1);
            }
        }
    }
    
    return arr;
    
}
removeFromArray([1, 2, 3, 4], 2, 3, 4);


// Do not edit below this line
module.exports = removeFromArray;
