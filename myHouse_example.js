MyHouse = function() {
	this.windows = 5;
	this.doors = 2;
}
MyHouse.prototype = new Object();

console.log("Printing MyHouse.prototype: ");
console.log(MyHouse.prototype);

joshsHouse = new MyHouse();

console.log("Josh's house definition:");
console.log(joshsHouse);

console.log("Josh's House has " + joshsHouse.windows + " windows and " + joshsHouse.doors + " doors.");

// Done defining Josh's house

YourHouse = function() {
	this.windows = this.windows + 3;
	this.skylights = 3;
}

YourHouse.prototype = new MyHouse();

katiesHouse = new YourHouse();

console.log("Katie's house definition before adding doors:");
console.log(katiesHouse);

katiesHouse.doors += 1;

console.log("Katie's house definition after adding doors:");
console.log(katiesHouse);

console.log("Katie's house has " + katiesHouse.windows + " windows, " + katiesHouse.doors + " doors and " + katiesHouse.skylights + " skylights");

poesHouse = new YourHouse();

console.log("Poe's house definition:");
console.log(poesHouse);

console.log("Poe's house has " + poesHouse.windows + " windows, " + poesHouse.doors + " doors and " + poesHouse.skylights + " skylights");