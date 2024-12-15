
const paymentBtn = document.querySelector('.confirmOrderBTN');

paymentBtn.addEventListener('click', () => {
  fetch('/stripe-checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      items: JSON.parse(localStorage.getItem('cartProductLS')),
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.url) {
        // Redirect to the Stripe checkout page
        location.href = data.url;

      } else {
        console.error('Error:', data.error); // Handle any server errors
      }
    })
    .catch((error) => console.error('Fetch error:', error));
});
