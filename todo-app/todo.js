// DOM: WAY FOR JS TO INTERACT WITH HTML
// store in a variable called: textInput
const textInput = document.getElementById("textInput");
// do the same for the button call it: addButton
const addButton = document.getElementById("addButton");
//get the element and store in
      // variable called taskList
const taskList = document.getElementById("taskList");

// create function called addTask, that alerts hello
// function lets us reuse code blocks

// NEXT Challenge: .value, instead alert hello
// alert value of text input
// change name and alert

function addTask() {
  // STORE INPUT VALUE
  const input = textInput.value;

  // CREATE li TAG
  const newLi = document.createElement("li");
  // CREATE "button" TAG and call deleteBtn
  const deleteBtn= document.createElement("button");

  // FILL LI TAG WITH TEXT
  newLi.textContent = input;
  // ADD CSS
  newLi.classList.add("li-style");
  // FILL BUTTON WITH "X"
  deleteBtn.textContent = "X";
  deleteBtn.style.color = "red";
  deleteBtn.style.marginLeft = "5px";

  // create function called deleteTask, console.log(input)

  function deleteTask() {
      // REMOVE FROM UL
    taskList.removeChild(newLi);
  }

  // add a click event to the button
  deleteBtn.addEventListener("click", deleteTask);

  // append the btn to newLi; has to be on top
  // PARENT ADD CHILD
  // APPEND MEANS TO ADD INSIDE ANOTHER ELEMENT
  newLi.appendChild(deleteBtn);
  taskList.appendChild(newLi);

  textInput.value = "";
}

addButton.addEventListener(
  "click", addTask
);
