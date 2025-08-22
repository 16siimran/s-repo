let cart = [];
let total = 0;

function addToCart(product, price) {
  cart.push({ product, price });
  total += price;
  displayCart();
}

function removeFromCart(index) {
  total -= cart[index].price; // decrease total
  cart.splice(index, 1);      // remove product
  displayCart();
}

function displayCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  
  cart.forEach((item, index) => {
    let li = document.createElement("li");
    li.innerHTML = `
      ${item.product} - $${item.price} 
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartItems.appendChild(li);
  });

  document.getElementById("total").textContent = total.toFixed(2);
}
