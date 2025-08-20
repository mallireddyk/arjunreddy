const cart = {};

const cartCountEl = document.getElementById('cart-count');
const cartItemsEl = document.getElementById('cart-items');
const cartModal = document.getElementById('cart-modal');
const closeCartBtn = document.getElementById('close-cart');
const cartIcon = document.getElementById('cart-icon');

// Function to update the cart display
function updateCartDisplay() {
  cartItemsEl.innerHTML = '';
  let totalItems = 0;

  for (const id in cart) {
    const item = cart[id];
    totalItems += item.quantity;
    const li = document.createElement('li');
    li.textContent = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
    cartItemsEl.appendChild(li);
  }

  cartCountEl.textContent = totalItems;
}

// Add event listeners to all add-to-cart buttons
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
  button.addEventListener('click', e => {
    const productCard = e.target.closest('.product-card');
    const id = productCard.getAttribute('data-id');
    const name = productCard.getAttribute('data-name');
    const price = parseFloat(productCard.getAttribute('data-price'));

    if (cart[id]) {
      cart[id].quantity++;
    } else {
      cart[id] = { name, price, quantity: 1 };
    }

    updateCartDisplay();
    alert(`${name} added to cart!`);
  });
});

// Show cart modal when cart icon clicked
cartIcon.addEventListener('click', () => {
  cartModal.style.display = 'block';
});

// Close cart modal
closeCartBtn.addEventListener('click', () => {
  cartModal.style.display = 'none';
});
  