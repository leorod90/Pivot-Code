import { fakeProducts } from "./data.js";

// create the func
function onLoadFunction() {  
  // GET URL PARAMETERS                      CURRENT URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  // basic version
  const item = fakeProducts[productId];

  console.log(item);
}

window.addEventListener("load", onLoadFunction);