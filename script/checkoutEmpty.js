import { cartItem } from "../data/cart.js";

export function checkoutEmpty(){
    let checkoutEmptyMain = document.querySelector(".js-checkout-main");
    
    if(cartItem.length === 0){
        checkoutEmptyMain.classList.add("checkout-main");
    let checkoutMain = document.querySelector(".checkout-main");
    console.log(checkoutMain)
        checkoutMain.innerHTML = `<div class="empty-cart-message">
        <h2>Your cart is empty</h2>
        <p>Your shopping cart is empty. Please add items to your cart before proceeding to checkout.</p>
    </div>`;
    }else{
        checkoutEmptyMain.classList.remove("checkout-main");
    }

}