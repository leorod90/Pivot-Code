// DOM (DOCUMENT OBJECT MODEL) - LETS US INTERACT WITH DOC
// target doc, get id , ONLY PASS ID
const h1Text = document.getElementById("test");
// add a prompt that takes a color and change the text color

let specialColor = prompt("enter a color");

h1Text.textContent = "Leo";
h1Text.style.color = specialColor;

  //querySelector("h1"), querySelector("p")
  // document.querySelector(".red"), document.querySelector("#test")
// ONLY RETURN FIRST ITEM
document.querySelector(".red").style.color = "red";
// [#]ID, [.]CLASS

const arrayList = document.querySelectorAll(".item-red");

// allRed = [..., ..., ...]
// LOOP THE LIST/ARRAY; FOR/FOREACH

for (let i = 0; i < arrayList.length; i++) {
  arrayList[i].style.color = "green";
}
