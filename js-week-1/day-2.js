let name = "Leo";
let age = 34;
let isTeaching = true;

console.log(name)
console.log(age)
console.log(isTeaching)

let numOne = 10;
let numTwo = 3;

console.log(numOne + numTwo);
console.log(numOne - numTwo);
console.log(numOne / numTwo);
console.log(numOne * numTwo);

 //OPERATORS / VARIABLES LET & CONST
let equalsOperator = "=";
let example;
 //WRONG: let example = "hello there";
example = "hello there";
console.log(example);

example = "goodbye";
console.log(example);

// LET IS FOR REASSIGN / CONST NEVER CHANGES
let exampleLet = "let";
const exampleConst = "const";

exampleLet = "new word is here";
// exampleConst = "this should not work";

console.log(exampleLet);
console.log(exampleConst)
// SHORTHANDS: x =+ 5; SAME AS x = x + 5;
let x = 0;
console.log(x);
x += 5;
console.log(x);
x = x + 5;
console.log(x);
x = x + 5;
console.log(x)

// COMPARISON OPERATORS
let a = 10;
let b = 10;
let c = 100;
// ARE THEY THE SAME?
console.log(a === b);
console.log(b === c);
// ARE THEY GREATER / LESS?
console.log(a > b);
console.log(a < c);
// ARE THEY GREATER OR THE SAME / LESS OR THE SAME
console.log(a >= b);
console.log(a <= b);
// ARE THEY DIFFERENT
console.log(a !== b);
console.log(a !== c);

// LOGICAL OPERATORS
// OR: ONLY ONE HAS TO BE TRUE
console.log(
  a === c // FALSE
  ||
  a === b // TRUE
)
// AND: BOTH HAVE TO BE TRUE
console.log(
  a === c // FALSE
  &&
  a === b // TRUE
)
let y = 0;
let z = 1;
let w = 9;
// MAKE TRUE ||
if(y < z && w > z){
  alert("hello world!");
}