    // CREATE A VARIABLE CALLED STUDENT
    // MAKE IT TRUE
    // CREATE IF ELSE
    // IF TRUE; ALERT "YOUR A STUDENT"
    // ELSE; ALERT "YOUR A TEACHER"
    let student = false;

    if(student === true){
      alert("you are a student");
    }else {
      alert("you are a teacher")
    }
    // string: "", integer: 0, boolean: true or false, arrays: [], objects: {}
    // ARRAY: INDEX
    let purple = "purple";
    let red = "red";
    let blue = "blue";
    let white = "white";
    let black = "black";

    // <li></li>        // 0    // 1     // 2   // 3      // 4
    let colorsArray = ["purple", "red", "blue", "white", "black"];
    // console log array
    console.log(colorsArray);
    console.log(colorsArray[1]);
    // override blue in array
    colorsArray[2] = "pink";
    console.log(colorsArray) 
    console.log(colorsArray.length)

    if (colorsArray.length > 10) {
      alert("thats alot of colors");
    } else {
      alert("need more");
    }
    let colorsArray = ["purple", "red", "blue", "white", "black"];
    console.log(colorsArray);
    // POPS OFF LAST ITEM
    let lastItem = colorsArray.pop();
    console.log(lastItem);
    console.log(colorsArray);

    // PUSHED TO THE END
    colorsArray.push("yellow");
    console.log(colorsArray);

    // SHIFT: TAKES OFF FIRST ITEM
    let firstItem = colorsArray.shift();
    console.log(firstItem);
    console.log(colorsArray);

    // UNSHIFT: ADD TO FIRST ITEM; "ORANGE"
    colorsArray.unshift("orange");
    console.log(colorsArray);

    let carsArray = ["BMW", "Lexus", "Honda", "Nissan"];

    // string, integer, arrays, object
    // OBJECT
    let me = {
      id: "jlkjds-askjskl-wq213",
      name: "Leo",
      occupation: "Teacher",
      age: 32,
      phoneNumber: "212 222 222",
      email: "test@test.com"
    }
    // const members = []
    const members = [
      {
        // 0
        id: 1,
        name: "Leo",
        email: "test@test.com"
      },
      {
        // 1
        id: 2,
        name: "Jamie",
        email: "hello@hello.com"
      },
      {
        // 2
        id: 3,
        name: "Bob",
        email: "code@code.com"
      }
    ];
    
    const person = members[2];

  // ADD A THIRD PERSON
  // CONSOLE LOG THAT PERSON, (console index of that person)
  // hints: array starts at 0, use square brackets
  // console the id of the 3rd person

  console.log(members[2].id);