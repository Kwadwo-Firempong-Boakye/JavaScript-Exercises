const fibonacci = function (value) {
	let cleanValue = +value; // turn strings to numbers
	let error = "OOPS";

	//check for non-number and negative number
	if (isNaN(cleanValue) || cleanValue <= 0) {
		return error;
	}

	let fibSeq = []; //empty array that will populate fibonacci sequence

	//fibonacci sequence is basically pushing the sum of the last 2 indexes of an array
	for (let i = 1; i <= cleanValue; i++) {
		//i is not 0 because you cannot have the zeroth fibonacci number. it can only start from the first fibonacci number
		if (fibSeq.length == 0 || fibSeq.length == 1) {
			fibSeq.push(1); //for an empty array populate it with the first 2 digits of the sequence => [1, 1] in the first 2 loops
		} else {
			fibSeq.push(fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2]); //push sum of the last 2 indexes of fibSeq array
		}
	}

	return fibSeq[fibSeq.length - 1]; //return the last index
};

console.log(fibonacci("10"));
// Do not edit below this line
module.exports = fibonacci;
