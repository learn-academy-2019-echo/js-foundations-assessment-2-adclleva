// ASSESSMENT 2: JAVASCRIPT FOUNDATIONS
// Coding practical questions

// 1. Write a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test cases 15, 0, 385, -7.
// Expected output: "15 is divisible by three",
// "0 is divisible by three",
// "385 is not divisble by three",
// "-7 is not divisble by three".
console.log(`\n1. -------------------------------`);

const divisibleBy3 = (num) => {
  return num % 3 === 0 ? `${num} is divisible by 3`: `${num} is not divisible by 3`  ;
}

console.log(divisibleBy3(15))
console.log(divisibleBy3(0))
console.log(divisibleBy3(385))
console.log(divisibleBy3(-1))

// 2. Create an object called helloMe. Include your firstName, lastName and TWO OTHER properties of you.
// Add a method to your object that will return a sentence using the object properties to describe you.
console.log(`\n2. -------------------------------`);

const helloMe = {
  firstName: 'Arvin',
  lastName: 'Lleva',
  favFood: 'ice cream',
  favHobby: 'coding',
  aboutMe: function() {
    return `${this.firstName} ${this.lastName}'s favourite food is ${this.favFood} and his favourite hobby is ${this.favHobby}`
  }
}

console.log(helloMe.aboutMe())

// ------------------------------------- Consider the variable:

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]

// 3a. Write a function that returns every other item from the array as one string.
// Expected output: "streetlamp teeth nephew database"
console.log(`\n3a. -------------------------------`);

const printEveryOther = array => {
  return array.filter(element => {
    return array.indexOf(element) % 2 == 0;
  });
}

console.log(printEveryOther(randomNouns));

// 3b. Create a function that takes in the variable and returns the array with all the words capitalized.
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]
console.log(`\n3b. -------------------------------`);

const capitalizedWord = word => {
  return word[0].toUpperCase() + word.slice(1).toLowerCase()
}

const capitalizedSentence = array => {
  return array.map(capitalizedWord);
}

console.log(capitalizedSentence(randomNouns));


// 3c. STRETCH: Create a function that returns the length of each string from the randomNouns variable.
// Expected output: [10, 6, 5, 10, 6, 11, 8]
console.log(`\n3c. -------------------------------`);

const findsLength = array => {
    return array.map(string => {
      return string.length
    }
  );
}

console.log(findsLength(randomNouns))

// -------------------------------------- Consider the variables:
var testString1 = "learn"
var testString2 = "academy"
var testString3 = "sandiego"

// 4a. Write a function called alphabetSoup that takes one argument
// and returns a string with all the letters in alphabetical order.
// Use each of the varibales as test cases.
// Expected output: "aelnr" "aacdemy" "adeginos"
console.log(`\n4a. -------------------------------`);

const alphabetSoup = word => {
  return word.split("").sort().join("");
}

console.log(alphabetSoup(testString1))
console.log(alphabetSoup(testString2))
console.log(alphabetSoup(testString3))


// 4b. Write a function that takes in all three variables and returns a string with all the letters in alphabetical order. Expected output: "aaaacddeeegilmnnorsy"
console.log(`\n4b. -------------------------------`);

const combinedAlphaSorted = (...words) => {
  return words.join("").split("").sort().join("");
}

console.log(combinedAlphaSorted(testString1,testString2,testString3))

// ------------------------------------- Consider the variables:
var amounts = [9, 1, 8, 16, 5, 1, 42]
var animals = ["ducks", "elephants", "pangolins", "zebras", "giraffes", "penguins", "llamas"]

// 5a. Write a function that takes the two variables and returns a combined string.
// Expected output: "9 ducks 1 elephants 8 pangolins 16 zebras 5 giraffes 1 penguins 42 llamas"
console.log(`\n5a. -------------------------------`);

const combinedMergedStr = (numArr, eleArr) => {
  return numArr.map((num, index) => {
    return `${num} ${eleArr[index]}`
  })
  .join(" ");
}



console.log(combinedMergedStr(amounts, animals))

// 5b. STRETCH: Create a function that combines the two variables and updates the animal to be singular if the animal's corresponding number is 1. Expected output: "9 ducks 1 elephant 8 pangolins 16 zebras 5 giraffes 1 penguin 42 llamas"
console.log(`\n5b. -------------------------------`);

const convertToSingular = word => word.slice(0,-1)

const combinedMergedStrWithSingular = (numArr, eleArr) => {
  return numArr.map((num, index) => {
    return num > 1 ? `${num} ${eleArr[index]}` :`${num} ${convertToSingular(eleArr[index])}`
  })
  .join(" ");
}

console.log(combinedMergedStrWithSingular(amounts, animals))
