let count = 0;
const cartBtn = document.getElementById('cart-btn');

function addToCart() {
    count++;
    cartBtn.innerText = `Cart (${count})`;
    alert("Added to bag! Nice choice.");
}