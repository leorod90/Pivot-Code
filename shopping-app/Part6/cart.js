//add a load event to windows
//create a function that alerts or console.log:TEST

function onLoadFunction() {
  // this is wrong, from w3schools
  // you have to change "lastname" to what we are getting
  // store in a variable called item
  // console log the variable
  const cat = localStorage.getItem("myCat");
  console.log(cat)
  // const item = JSON.parse(localStorage.getItem("cart"));

  // retreive your name from storage
  // console log it



    // IGNORE BELOW
  var retrievedObject = localStorage.getItem('cart');
console.log('retrievedObject: ', JSON.parse(retrievedObject));
}

window.addEventListener("load", onLoadFunction);
