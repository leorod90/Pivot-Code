  // CHALLENGE 1, GUESS THE OUTPUTS TRUE OR FALSE
  console.log(5 === 5); // true
  console.log(0 > 3 && 10 < 11); // false and true: false 
  console.log(10 < 21 || 2 === 5); // true or false: true 

  // CHALLENGE 2, ASK THE USER FOR A NUMBER THEN MULTIPLY BY 2,
  //   !variables, !prompt

  let userNumber = prompt("enter a number");
  console.log(userNumber * 2);

  // IF ELSE STATEMENT
  //   CREATE FAKE PASSWORD VAR
  //   CREATE A PROMPT WITH USER_PASSWORD 
  //      COMPARE IF THE SAME

  const password = "abc";
  const userPassword = prompt("What is your password!");
  
  if (password === userPassword) {
    alert("you logged in!");
  } else {
    alert("error!!!!");
  }

  // CREATE A NEW IF/ELSE
  // PROMPT IN YOUR AGE
  // IF 21 OR OLDER; YOU CAN DRINK, ELSE; YOUR A MINOR
  // CREATE VAR THAT TAKES USER AGE, !prompt
  // CHECK IF 21 OR OLDER
  // ALERT; YOU CAN DRINK, NOT ALLOWED IN, !alert
  const userUser = prompt("what is your age?");
  
  if (userUser >= 21) {
    alert("You can drink!");
  } else {
    alert("You cannot enter!!!");
  }

  // CREATE IF STATEMENT (JUST IF)
  const grade = prompt("What was ur grade");

  if (grade === "A") {
      alert("You did amazing!");

  } else if (grade === "B") {
      alert("You did great!");

  } else if (grade === "C") {
      alert("You did good!");

  } else {
      alert("Invalid Input");
  }

  // CREATE TWO VARIABLE 
  // ONE CALLED AGE: 20, SECOND CALLED MEMBER: TRUE (BOOLEAN)
  // CREATE IF/ELSE
  // FIRST CHECK IF A MEMBER IS TRUE
  // NESTED: INSIDE CODE BLOCK THE FIRST IF PUT ANOTHER IF/ELSE INSIDE
  // CHECK IF 18 OR OLDER;
  const age = 33;
  let member = false;

  if (member === true) {
      if (age > 18) {
        alert("you can enter!");
      } else {
        alert("wait until your're 18.");
      }
  } else {
    alert("go away!");
  }