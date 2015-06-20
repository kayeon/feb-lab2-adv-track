
var x = function() {
  var peopleEaten = 0;
  peopleEaten = 1000;
  return peopleEaten;
};

var xResult = x();
console.log(xResult);     // xResult = 1000
console.log(peopleEaten); // peopleEaten = 0
