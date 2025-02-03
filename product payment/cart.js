
function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear existing items
  
    let totalPrice = 0;
  
    cart.forEach((item, index) => {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('product');
      itemDiv.innerHTML = `
        <p class="product-name">${item.productName}</p>
        <p class="product-price">$${item.productPrice.toFixed(2)}</p>
        <button onclick="removeFromCart(${index})">Remove</button>
      `;
      cartItemsContainer.appendChild(itemDiv);
      totalPrice += item.productPrice;
    });
  
    document.getElementById('total-price').textContent = `$${totalPrice.toFixed(2)}`;
    console.log(totalPrice);
  }
  
  // Remove an item from the cart
  function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1); // Remove item at the specified index
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart(); // Reload the cart
  }
  
  // Proceed to payment
  function proceedToPayment() {
    const totalPrice = document.getElementById('total-price').textContent.replace('$', '');
    window.location.href = `payment.html?totalPrice=${totalPrice}`; // Redirect to payment.html with the total price as a query parameter
  }
  
  // Load the cart on page load
  window.onload = loadCart;
  