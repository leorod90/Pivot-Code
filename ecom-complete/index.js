const products = [
  { 
    id: 1, name: "Shoe", price: 10, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ9GYyTYif38P0SXLNjGiDJbsxo2Pe2OvYxA&s" },
  { id: 2, name: "Car", price: 20, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyOmvn8iTB6g66y0PvuC4XJJpm3a7WscxTw&s"}
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.addEventListener("DOMContentLoaded", () => {
  console.log("Script loaded and DOM is ready.");
  
  const productsContainer = document.getElementById("products");
  if (productsContainer) {
      console.log("Products container found.");
      products.forEach(product => {
          console.log(`Adding product: ${product.name}`);
          const div = document.createElement("div");
          div.innerHTML = `<a href="product.html?id=${product.id}">${product.name} - $${product.price}</a>`;
          productsContainer.appendChild(div);
      });
  } else {
      console.error("Products container not found.");
  }
  
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  if (productId) {
      const product = products.find(p => p.id == productId);
      if (product) {
          document.getElementById("product-detail").innerText = `${product.name} - $${product.price}`;
          document.getElementById("product-image").src = product.image;
          const addToCartButton = document.getElementById("add-to-cart");
          if (addToCartButton) {
              addToCartButton.addEventListener("click", () => addToCart(product));
          }
      }
  }
  
  const cartContainer = document.getElementById("cart");
  const totalAmount = document.getElementById("total-amount");
  if (cartContainer) {
      console.log("Cart container found.");
      if (cart.length > 0) {
          cartContainer.innerHTML = cart.map((item, index) => `<p>${item.name} - $${item.price} <button onclick="removeFromCart(${index})">Remove</button></p>`).join("");
          
          const total = cart.reduce((sum, item) => sum + item.price, 0);
          totalAmount.innerText = total;
      } else {
          cartContainer.innerHTML = "<p>Your cart is empty.</p>";
          totalAmount.innerText = "0";
      }
  } else {
      console.error("Cart container not found.");
  }
});

function addToCart(product) {
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  const cartMessage = document.getElementById("cart-message");
  if (cartMessage) {
      cartMessage.style.display = "block";
      setTimeout(() => {
          cartMessage.style.display = "none";
      }, 2000);
  }
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload(); // Refresh to update the cart
}