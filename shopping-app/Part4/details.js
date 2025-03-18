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
  const image =  document.getElementById("details-image");
  image.src = item.image;
  // change details-name to name
  // change details-description to description
  // change details-price to price
}

window.addEventListener("load", onLoadFunction);