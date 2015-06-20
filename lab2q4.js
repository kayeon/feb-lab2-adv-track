function lastLetterSort(stringArray) {
  function byLastLetter(a, b) {

    console.log("comparing: " + a + " and " + b);

    var aLastLetter = a.slice(-1);
    var bLastLetter = b.slice(-1);

    console.log("last letter: " + aLastLetter + " and " + bLastLetter);

   if(aLastLetter == bLastLetter) {
    console.log("letter were the same");
   return 0;
    }

  if(aLastLetter > bLastLetter) {
    console.log("letter is positive: " + a + " goes after " + b);
   return 1;
    }

  if(aLastLetter < bLastLetter) {
    console.log("letter is negative: " + b + " goes after " + a);
   return -1;
    }
  }

  stringArray.sort(byLastLetter);
console.log(stringArray)
}


// > lastLetterSort(["bear", "bean", "cat", "polarbear"]);
// [ 'bean', 'bear', 'polarbear', 'cat' ]
