function addToCart(productName, productPrice) {
  // Retrieve the existing cart from localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Add the new product to the cart
  cart.push({ productName, productPrice });

  // Update the cart in localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Update the cart count dynamically
  document.getElementById('cart-count').textContent = cart.length;
}
