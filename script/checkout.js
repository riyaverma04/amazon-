import { cartItem, deleteProductFromCart } from '../data/cart.js';
import { products } from '../data/product.js';

const orderContainer = document.querySelector('.order-checkout-container');
let cartSummaryHtml = ``;



cartItem.forEach((product)=>{
    let productId = product.id;
    let matchingItem ;
    products.forEach((productItem)=>{
        if(productItem.id === productId){
            matchingItem = productItem;
        }

     })

    cartSummaryHtml += `
    <div class="order-container js-order-container-${matchingItem.id}">
     <div class="delivery-date">Delivery date : Tuesday, june 21

                    </div>
                    <div class="order-info">
                        <div class="order-product-image">
                            <img src="${matchingItem.img}" alt="" srcset="">

                        </div>
                        <div class="order-product-info">
                            <p class="order-product-name">${matchingItem.name}</p>
                            <p class="order-product-price">$ ${(matchingItem.priceCents /100).toFixed(2)}</p>
                            <p class="order-product-quantity">quantity: ${product.quantity}</p>
                             <div class="order-product-update">
                                <p class="update">update</p>
                                <p class="delete" data-product-id="${product.id}">delete</p>
                            </div>
                        </div>
                        <div class="order-delivery-info">
                            <div class="order-delivery-heading">
                                choose a delivery date
                            </div>
                            <div class="delivery-date-form">
                                <div class="delivery-date-select"><input type="radio" name="${matchingItem.id}-delivery-date" id="delivery-date">after 2 days</div>
                                
                               <div class="delivery-date-select"> <input type="radio" name="${matchingItem.id}-delivery-date" id="delivery-date">
                                after 4days</div>
                               <div class="delivery-date-select"><input type="radio" name="${matchingItem.id}-delivery-date" id="delivery-date">
                                after 6 days</div>
                                
                            </div>


                        </div>
                    </div>
                     </div>
    `
})
orderContainer.innerHTML = cartSummaryHtml
//deleting the item from the cart
document.querySelectorAll('.delete')
.forEach((deleteItem)=>{
    deleteItem.addEventListener('click',()=>{
        let productId = deleteItem.dataset.productId;
        deleteProductFromCart(productId)
        let container = document.querySelector(`.js-order-container-${productId}`);
       
        container.remove();

        console.log(cartItem);
      
    })
})

