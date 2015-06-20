// quiz 4
// question 1

// Use a literal to create an object of your choosing. Make sure your object
// has at least two properties that are data (primitives, array, or objects),
// and at least one property that is a method (a function).


// Your Answer:


var dog1 = {
  dog: dog
  name: 'Poe',
  color: 'Black',
  age: 11,
  weight: 65,
  litterMates: ['Bob', 'Nancy', 'Spot'],
  getOlder: function () {
//    this.age += 1 (age = age +1)
  }
  isOverWeight: function () {
    if this.weight > 60
        return true;
      } else {
        return false;
      }
    }
}

var dog2 = {
  name: 'Poe2',
  color: 'Blackky',
  age: 11,
  weight: 129,
  litterMates: ['Bob', 'Nancy', 'Spot'],
  isOverWeight: function () {
    if this.weight > 60
        console.log('yes, he\'s a fatty');
      }
}

// Dog fat camp program

function candidates(dogs) {
  var goingToCamp = [];
  for (var i = 0; i < dogs.length; i++) {
    dog = dogs[i];
    if dog.isOverweight() {
      goingToCamp.push(dog);
    }
  }
  return goingToCamp;
}



fatDogs = candidates([dog1, dog2])

