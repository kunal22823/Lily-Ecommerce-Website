function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem('cartProductLS')) || [];
    const cartCount = cartItems.length;
    
    // Update the cart count in the span
    document.getElementById('cart-count').textContent = cartCount;
}

// Call this function when the page loads
document.addEventListener('DOMContentLoaded', updateCartCount);