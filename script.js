import { products } from "./data/product.js";
import { cartItem, updateCartQuantity } from "./data/cart.js";


let productHtml = ``
products.forEach((item) => {
    productHtml += `
    <div class="product-container">
                    <img src="${item.img}" alt="" class="product-img">
                    <div class="product-info">
                        <h2 class="product-name">${item.name}</h2>
                        <div class="rating">${item.rating.stars}</div>
                        <div class="product-price">${item.priceCents}</div>
                        <div class="product-quantity">
                            <select name="product-quantity" id="">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </div>
                    <button class="add-to-cart" data-product-id="${item.id}">Add to cart</button>
                </div>
    `
})
const addItemToCart = (addedItem) => {


    let matchingItem;

    cartItem.forEach((item) => {
        if (addedItem === item.id) {
            matchingItem = item
        }
    })

    if (matchingItem) {
        matchingItem.quantity++;
    } else {
        cartItem.push({
            id: addedItem,
            quantity: 1
        })
    }


}





document.querySelector('.js-product-grid').innerHTML = productHtml;
document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener('click', () => {

        const addedItem = button.dataset.productId;
        addItemToCart(addedItem)
        updateCartQuantity()









    })
})





