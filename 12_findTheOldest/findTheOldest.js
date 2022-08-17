const findTheOldest = function (arr) {
	let presentYear = new Date().getFullYear();

	let ages = arr.map((item) => {
		if (item["yearOfDeath"] == undefined) {
			item.yearOfDeath = presentYear;
		}
		return item.yearOfDeath - item.yearOfBirth;
	});
	// console.log(ages);
	// console.table(people);

	let oldest = ages[0];
	let oldestIndex = 0;

	for (let i = 1; i < ages.length; i++) {
		if (ages[i] > oldest) {
			oldest = ages[i];
			oldestIndex = i;
		}
	}
	// console.log(oldestIndex);
	return arr[oldestIndex];
};

// console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
