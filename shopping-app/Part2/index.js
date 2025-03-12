// create a list called fake products
// create and obj: {}; id: 0, name, price: number, image
// 3 items
const fakeProducts = [
  // batman item
  {
    id: 0,
    name: "Batman Plush",
    description: "This is a cool batman plush",
    price: 20,
    image: "https://m.media-amazon.com/images/I/61YiGW9dHgL._AC_UF894,1000_QL80_.jpg"
  },
  // Spider-Man item
  {
    id: 1,
    name: "Spider-Man Plush",
    description: "This is a rare Spider-Man",
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
    // create an img element and call it image
    const image = document.createElement("img");
    // add src, class: card-img-top and alt
    image.src = fakeProducts[i].image;
    image.alt = fakeProducts[i].name;
    image.classList.add("card-img-top");

    // create div class card-body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    //h5, class card-title
    // change text content to the name
    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = fakeProducts[i].name; // change element to title

    // create p tag, class card-text
    // create a tag, class btn btn-primary

    // create body div; append all 3
    cardBody.appendChild(title);

    // structure html
    cardDiv.appendChild(image);
    // cardDiv.append(text);
    cardDiv.append(cardBody);
    productsList.append(cardDiv);
  }

}

// window.onload = onLoad;
window.addEventListener("load", onLoadFunction);