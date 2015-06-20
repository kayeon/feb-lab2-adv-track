/*********************************************************
LAB 2: SORTING AND CAMPY SCI-FI

Welcome to Lab 2 =)

Be sure to read all the comments!

All of the instructions are inline with the assignment below.
Look for the word TODO in comments.  Each TODO will have a
description of what is required.

To run this file (in the terminal) use: node lab2.js

*********************************************************/
// SETUP
//*********************************************************

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log("assertion failure: ", failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob. 20 points
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

 hr | persons consumed  |  rate of consumption
 -------------------|---------------------
  0      0          |       1/hour
  1      1          |       2/hour
  2      3          |       3/hour
  3      6          |       4/hour
  4      10         |       5/hour

 TODO: First, make a constructor function, called Blob, that makes blobs.

 TODO: Next, create an instance of Blob named blob.

 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington.
*/

// TODO: Katie's Code for First Part
function Blob () {
  this.lifespan = 0;
  this.rate = 0;
  this.eatPeople = function() {
    this.rate =+ 1;
    return this.rate;
  }
}

Blob.prototype.consumption = function() { // same as line 55

}

// console.log('***', Blob.prototype);
var katie = new Blob();

var peopleEaten = 0;
while (peopleEaten <= 1000) {
  peopleEatenThisHour = katie.eatPeople();
  peopleEaten += peopleEatenThisHour;
  katie.lifespan++;
  console.log("Hour " + katie.lifespan + ".");
  console.log("Ate " + peopleEatenThisHour + " this hour, " + peopleEaten + " in total.");
}

// exit;

var hoursSpentInDowington = katie.lifespan;

// TODO: assign me the value of the
                           // above calculation

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

function hoursToOoze(population, peoplePerHour) {
  // TODO: implement me based on the instructions above. Be sure to then
  // assign me to the Blob's prototype.

  var katie = new Blob();

  var peopleEaten = 0;
  katie.rate = peoplePerHour
  while (peopleEaten <= population) {
    peopleEatenThisHour = katie.eatPeople();
    peopleEaten += peopleEatenThisHour;
    katie.lifespan++;
    console.log("Hour " + katie.lifespan + ".");
    console.log("Ate " + peopleEatenThisHour + " this hour, " + peopleEaten + " in total.");
  }
}

Blob.prototype.hoursToOoze = hoursToOoze;

assert(blob.hoursToOoze(0, 1) === 0, "no people means no time needed.");
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  "hoursSpentInDowington should match hoursToOoze\"s result for 1000");
// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.

assert(typeof(blob.__proto__.consumption) === "function", "Blob's proto
  consumption is not a function" )
exit;


















