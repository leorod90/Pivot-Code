//add a load event to windows
//create a function that alerts or console.log:TEST

function onLoadFunction() {
  const cartItemsJSON = localStorage.getItem('cart');
                       // undo: turns to string
  const cartItems = JSON.parse(cartItemsJSON);
  // change the img, title price
  // get element by id, use correct html id
  console.log(cartItems);
  const imageHTML = document.getElementById("cart-img");
  imageHTML.src = cartItems.image;
  // .textContent
  const nameHTML = document.getElementById("cart-name");
  nameHTML.textContent = cartItems.name;
 
  const priceHTML = document.getElementById("cart-price");
  priceHTML.textContent = cartItems.price;
}

window.addEventListener("load", onLoadFunction);
