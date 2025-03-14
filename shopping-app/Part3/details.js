import { fakeProducts } from "./data.js";

// create the func
function onLoadFunction() {  
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  console.log(fakeProducts[productId]);
}

window.addEventListener("load", onLoadFunction);