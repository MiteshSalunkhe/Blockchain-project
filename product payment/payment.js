// Function to fetch the total price from localStorage or sessionStorage
function fetchTotalPrice() {
    const totalPrice = localStorage.getItem('totalPrice');
    if (totalPrice) {
        // Update the total price on the payment page
        document.getElementById('total-price').textContent = `$${totalPrice}`;
    } else {
        // If totalPrice is not available, you can display an error or fallback message
        console.error('Total price not found');
        document.getElementById('total-price').textContent = 'Error: Total price not available';
    }
}

// Call the function to fetch and display total price on page load
window.onload = fetchTotalPrice;
window.onload = function() {
    // Get the totalPrice from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const totalPrice = urlParams.get('totalPrice');
  
    // Update the total price in the payment page
    if (totalPrice) {
      document.getElementById('total-price').textContent = `$${totalPrice}`;
    } else {
      alert('No total price found.');
    }
  };
  