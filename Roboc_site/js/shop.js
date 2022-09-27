let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

cartIcon.onClick = () => { 
    cart.classList.add("active");
}
closeCart.onClick = () => {
    cart.classList.remove("active");
}