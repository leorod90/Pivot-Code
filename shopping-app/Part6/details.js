import { fakeProducts } from "./data.js";

// create the func
function onLoadFunction() {
  // GET URL PARAMETERS                      CURRENT URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  // basic version
  const item = fakeProducts[productId];
  // const item = fakeProducts.find(o => o.id == productId);

  // get image and store in var called image
  // change the image src
  const imageHTML =  document.getElementById("details-image");
  imageHTML.src = item.image;
  // !hint .textContent
  // change details-name to name
  const nameHTML = document.getElementById("details-name");
  nameHTML.textContent = item.name;

  // change details-description to description
  const descriptionHTML = document.getElementById("details-description");
  descriptionHTML.textContent = item.description;
  
  // change details-price to price
  const priceHTML = document.getElementById("details-price");
  priceHTML.textContent = "$" + item.price;

  // create 3 files called cart.html, cart.js, cart.css
  // link the js css to cart.html and !dont forget to test, change bg and use alert
  // in details.html give the btn an id
  // in details.js, then get the btn element
  // get the button
  // EXTRA: create the addToCart function
  // make it alert hi, when add to cart btn we get 

  function addToCart() {
    //                   key(nickname)  value
    localStorage.setItem("myCat", "Tom");
    // create set item the key should be called myName
    // the value is (put you first name)
    alert("added to cart: testin");
    
    // IGNORE BELOW
    

    localStorage.setItem('cart', JSON.stringify(item));

  }

  const btnHTML = document.getElementById("details-button");
  // HARDEST: change href to the file location; !this is the file location
  // btnHTML.href = "cart.html"
  // add an event lister to btn event called "click"
  // call the function addToCart
  btnHTML.addEventListener("click", addToCart);
}

window.addEventListener("load", onLoadFunction);