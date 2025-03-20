import { fakeProducts } from "./data.js";

// create a function called onLoad
// console log fake products
function onLoadFunction() {
  // get product list is
  const productsList = document.getElementById("products-list");
  // console.log(fakeProducts);
  // loop through your data
  for (let i = 0; i < fakeProducts.length; i++) {
    // test
    const text = document.createElement("p");
    text.textContent = fakeProducts[i].name;
    // productsList.append(text);

    // create a div in js and call card div
    const cardDiv = document.createElement("div");
    // add a class card and item-width
    cardDiv.classList.add("card");
    cardDiv.classList.add("item-width");
    // create an img element and call it image
    const image = document.createElement("img");
    // add src, class: card-img-top and alt
    image.src = fakeProducts[i].image;
    image.classList.add("card-img-top");
    image.alt = fakeProducts[i].name;
    
    // create div class card-body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    //h5, class card-title
    // change text content to the name
    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = fakeProducts[i].name; // change element to title

    // create p tag, class card-text, 
    // content description
    const description = document.createElement("p");
    description.classList.add("card-text");
    description.textContent = fakeProducts[i].description;
    
    // create "a" tag call it button
    const button = document.createElement("a");
    // add class "btn"
    button.classList.add("btn");
    // add class "btn-primary"
    button.classList.add("btn-primary");
    // text content equals: "go to details"
    button.textContent = "Go to Details";
    // anything after ? is a PARAMETER
    button.href = "details.html?id=" + fakeProducts[i].id;

    // create body div; append all 3
    cardBody.appendChild(title);
    cardBody.appendChild(description);
    cardBody.appendChild(button);

    // structure html
    cardDiv.appendChild(image);
    // cardDiv.append(text);
    cardDiv.append(cardBody);
    productsList.append(cardDiv);
  }
}

// window.onload = onLoad;
window.addEventListener("load", onLoadFunction);