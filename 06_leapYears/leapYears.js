const leapYears = function(year) {
    // check if year % 4 = 0 ? progress ELSE nope!
    // check if year % 100 = 0 ? still progress
    // check if year % 400 = 0 ? Yes! ELSE nope!

    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 ==0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
};

leapYears(2000);

// Do not edit below this line
module.exports = leapYears;
