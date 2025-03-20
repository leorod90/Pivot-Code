//add a load event to windows
//create a function that alerts or console.log:TEST

function onLoadFunction() {
  // this is wrong, from w3schools
  // you have to change "lastname" to what we are getting
  // store in a variable called item
  // console log the variable
  const item = localStorage.getItem("cart");
  console.log(JSON.parse(item))
}

window.addEventListener("load", onLoadFunction);
