const ftoc = function(f) {
let celcius = ((5/9) * (f -32));
return +(celcius.toFixed(1));
};

const ctof = function(c) {
let fahrenheit = (c * (9/5) + 32);
return +(fahrenheit.toFixed(1));
};

"fah-to-cel", ftoc(100);
"cel-to-fah", ctof(0);

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
