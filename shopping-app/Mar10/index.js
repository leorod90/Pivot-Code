// create a list called fake products
// create and obj: {}; id: 0, name, price: number, image
// 3 items
const fakeProducts = [
  // batman item
  {
    id: 0,
    name: "Batman Plush",
    price: 20,
    image: "https://m.media-amazon.com/images/I/61YiGW9dHgL._AC_UF894,1000_QL80_.jpg"
  },
  // spiderman item
  {
    id: 1,
    name: "Spiderman Plush",
    price: 15,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCe_fz1nlNMKmgj_PHT6bZm0yGrU-Z_ja16Q&s"
  }
];

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

    cardDiv.append(text);
    productsList.append(cardDiv);
  }

}

// window.onload = onLoad;
window.addEventListener("load", onLoadFunction);

