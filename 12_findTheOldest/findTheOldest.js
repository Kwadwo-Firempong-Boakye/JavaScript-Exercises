/*const people = [
	{
		name: "Carly",
		yearOfBirth: 1942,
		yearOfDeath: 1970,
	},
	{
		name: "Ray",
		yearOfBirth: 1962,
		yearOfDeath: 2011,
	},
    {
		name: "Test",
		yearOfBirth: 1910,
		yearOfDeath: 1941,
	},
	{
		name: "Jane",
		yearOfBirth: 1912,
		yearOfDeath: 1941,
	},
];*/

const getAge = function (death, birth) {
    if(!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
};

const findTheOldest = function (arr) {
	return arr.reduce((oldest, current) => {
		const oldestAge = getAge(oldest.yearOfDeath, oldest.yearOfBirth);
		const currentAge = getAge(current.yearOfDeath, current.yearOfBirth);
        return currentAge > oldestAge ? current : oldest;
	});

	
	/*
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
    */
};

console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
