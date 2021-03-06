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

 persons consumed  |  rate of consumption
 ------------------|---------------------
        0          |       1/hour
        1          |       2/hour
        2          |       3/hour
        3          |       4/hour

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
  };
}

Blob.prototype.consumption = function() { // same as line 55

};

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

var hoursSpentInDowington = katie.lifespan;  // TODO: assign me the value of the
                           // above calculation

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

function hoursToOoze(population, peoplePerHour) {
  // TODO: implement me based on the instructions above. Be sure to then assign me to the Blob's prototype.
  var katie = new Blob();

  var peopleEaten = 0;
  katie.rate = peoplePerHour;
  while (peopleEaten <= population) {
    peopleEatenThisHour = katie.eatPeople();
    peopleEaten += peopleEatenThisHour;
    katie.lifespan++;
    console.log("Hour " + katie.lifespan + ".");
    console.log("Ate " + peopleEatenThisHour + " this hour, " + peopleEaten + " in total.");
  }
}

assert(blob.hoursToOoze(0, 1) === 0, "no people means no time needed.");
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  "hoursSpentInDowington should match hoursToOoze\"s result for 1000");
// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.

//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: "nuqneH",  // home planet is Qo"noS
  romulan: "Jolan\"tru", // home planet is Romulus
  "federation standard": "hello" // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method called sayHello.

function SentientBeing (language, planet) {
  this.language = language;
  this.planet = planet;
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
}

// sb is a SentientBeing object
function sayHello (sb) {
  console.log(hello[this.language]);
  return (hello[sb.language]);
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating

    //TODO: put this on the SentientBeing prototype
  }

SentientBeing.prototype.sayHello = sayHello;

// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).

function Klingon() {
  // TODO
  this.language = "klingon";
  this.planet = "Qo\"noS";
}

Klingon.prototype = new SentientBeing();



function Human() {
  this.language = "federation standard";
  this.planet = "Earth";
}

Human.prototype = new SentientBeing();


function Romulan() {
  this.language = "romulan";
  this.planet = "Romulus";
}

Romulan.prototype = new SentientBeing();



//var theHuman = new Human();
//var theKlingon = new Klingon();
//assert(theHuman.sayHello(theKlingon) === "nuqneH",

// var test = ((new Human()).sayHello(new Klingon()) === "nuqneH");
// if (!test) {
//  console.log("the klingon should hear nuqneH")
// }

assert((new Human()).sayHello(new Klingon()) === "nuqneH",
  "the klingon should hear nuqneH");


// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.

assert((new Human()).sayHello(new Romulan()) === "Jolan\"tru",
  "the romulan should hear Jolan\"tru");


assert((new Romulan()).sayHello(new Human()) === "hello",
  "the human should hear hello");

assert((new Romulan()).sayHello(new Klingon()) === "nuqneH",
  "the klingon should hear nuqneH");

assert((new Klingon()).sayHello(new Human()) === "hello",
  "the human should hear hello");

assert((new Klingon()).sayHello(new Romulan()) === "Jolan\"tru",
  "the romulan should hear Jolan\"tru");



//*********************************************************
// PROBLEM 3: Sorting. 20 points.
//
// Implement the following functions. Write at least 2
// assertions for each one
//*********************************************************
function lastLetterSort(stringArray) {
  function byLastLetter(a, b) {
    //TODO: implement me. sort the strings in alphabetical
    // order using their last letter
    // read this: http://www.w3schools.com/jsref/jsref_sort.asp

    var aLastLetter = a.slice(-1);
    var bLastLetter = b.slice(-1);


   if(aLastLetter == bLastLetter) {
   return 0;
    }

  if(aLastLetter > bLastLetter) {
   return 1;
    }

  if(aLastLetter < bLastLetter) {
   return -1;
    }
  }

  stringArray.sort(byLastLetter);
}



function sumArray(numberArray) {
  var sum = 0;
  // TODO: implement me using forEach
  return sum;
}

function sumSort(arrayOfArrays) {
  arrayOfArrays.sort(function(a, b) {
    // TODO: implement me using sumArray
    //  order the arrays based on the sum of the numbers
    //  inside each array
  });
}

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
