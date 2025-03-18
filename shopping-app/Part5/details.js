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
  price.textContent = item.priceHTML;
}

window.addEventListener("load", onLoadFunction);
