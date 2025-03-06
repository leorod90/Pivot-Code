// CREATE AN ARRAY CALLED NUMBERS; FILL IT WITH NUMBERS 1-10
// CONSOLE LOG THE NUMBER 9 FROM THE ARRAY
// CREATE AN OBJECT CALLED PERSON
// GIVE IT A NAME AND AGE
// CONSOLE LOG THE AGE
const numberArray = [1, "2", "3", 4, 5, 6, 7, 8, 9, 10];
console.log(numberArray[8]);

const person = {
  name: "Alex",
  age: 18
}

console.log(person.age)
// LOOPS
let indexExample = 0;

for (
  let index = 0;
  index < numberArray.length;
  index++
) {
  console.log(numberArray[index]);
}
console.log("Welcome to the team, James");
console.log("Welcome to the team, Amy");
console.log("Welcome to the team, Rose");
console.log("Welcome to the team, Derick");
console.log("Welcome to the team, Cynthia");

// CREATE A VARIABLE ARRAY CALLED TEAM WITH 5 NAMES
const team = [
  "James",
  "Amy",
  "Rose",
  "Derick",
  "Cynthia",
  "James"
];

for (
  let index = 0;
  index < team.length;
  index++
) {
  // CONSOLE EACH NAME; ONLY 1 LINE OF CODE
  // ADD TO BEGINNING;   Welcome to the team, 
  //   !CONCAT STRING

  console.log("Welcome to the team," + team[index]);
}
// FOR EACH
// numberArray.forEach()
// numberArray.forEach(()=>{})
// numberArray.forEach((number)=>{console.log(number)})
numberArray.forEach(
  (number) => {
    // console.log(number);
  }
);

// WHILE LOOP
let i = 0;
while (i < 10) {
  // console.log("The number is " + i);
  i++;
  break
}

// VARIABLE CALLED PLAY GAME; MAKE IT TRUE;
// CREATE A WHILE LOOP THAT CHECKS GAME EQUAL TRUE

// INSIDE PROMPT USER USER FOR THEIR NAME AND STORE IN VARIABLE
// CREATE AND IF STATEMENT

// IF NAME EQUALS YOUR NAME (USE YOUR NAME: Leo)


// MAKE PLAY GAME FALSE OR USE BREAK
// AFTER WHILE LOOP CONSOLE LOG; HELLO (YOUR NAME)
let loop = true;

while (loop === true) {
  const userName = prompt("what is your password?");
  
  if (userName === "123") {
    // change play game to false// or use break
    loop = false;
    break;

  }
}

// CREATE ARRAY CALLED PEOPLE

// CREATE TWO OBJECT INSIDE {}
// EACH WITH A KEY CALLED NAME AND AGE; FILL THOSE VALUES

// FOR LOOP THROUGH THE ARRAY; AND LOG THE ITEM
// CONSOLE LOG EACH NAME
const people = [
  {
    name: "Leo",
    age: "32"
  },
  {
    name: "Amy",
    age: "22"
  }
];

for (let index = 0; index < people.length; index++) {
  console.log(people[index].name + " is " + people[index].age)
}

