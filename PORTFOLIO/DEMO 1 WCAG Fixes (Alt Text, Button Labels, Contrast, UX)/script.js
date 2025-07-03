// მცირე UX გაუმჯობესება — ღილაკის დაჭერის შემდეგ შეტყობინება
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('button');
  if (btn) {
    btn.addEventListener('click', () => {
      alert('Product added to cart!');
    });
  }
});
