const palindromes = function (str) {
	let cleanStr = str
		.toLowerCase()
		.split("")
		.filter((item) => item.match(/\w/))
		.join("");

	let revCleanStr = "";
	for (let i = cleanStr.length - 1; i >= 0; i--) {
		revCleanStr += cleanStr[i];
	}

	return cleanStr === revCleanStr;
};

// Do not edit below this line
module.exports = palindromes;
