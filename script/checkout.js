import { cartItem, deleteProductFromCart, saveCartToLocalStorage, updateCartQuantity, updateProductQuantity, updateDeliveryDate } from '../data/cart.js';
import { deliveryOptions, getDeliveryOptions } from '../data/deliveryOptions.js';
import { getProduct, products } from '../data/product.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js'
import { renderPaymentSummary } from './renderPaymentSummary.js';






console.log(cartItem)
//displaying the cart items count on the top of the cart
let checkoutItemsCount= document.querySelector('.checkout-items-number-count');
checkoutItemsCount.innerText =`( ${updateCartQuantity()} items )`;

const orderContainer = document.querySelector('.order-checkout-container');
function renderCartSummary()
{
    renderPaymentSummary(updateCartQuantity());
    renderPaymentSummary(updateCartQuantity());
    console.log("hey",getProduct("PRD-A15P-9X7Q4"))
let cartSummaryHtml = ``;



cartItem.forEach((product)=>{
    let productId = product.id;
    let matchingItem = getProduct(productId);
    console.log(matchingItem)
   
     let deliveryOptionsId = product.deliveryOptionsId;
     let deliveryOption = getDeliveryOptions(deliveryOptionsId)
     
     
       let today = dayjs();
        let deliveryDate = today.add(deliveryOption.day,'day').format('dddd, MMMM D');

    cartSummaryHtml += `
    <div class="order-container js-order-container-${matchingItem.id}">
     <div class="delivery-date-selected">Delivery date : ${deliveryDate}

                    </div>
                    <div class="order-info">
                        <div class="order-product-image">
                            <img src="${matchingItem.img}" alt="" srcset="">

                        </div>
                        <div class="order-product-info">
                            <p class="order-product-name">${matchingItem.name}</p>
                            <p class="order-product-price">$ ${(matchingItem.priceCents /100).toFixed(2)}</p>
                            <p class="order-product-quantity js-product-quantity-${product.id}">quantity: ${product.quantity}</p>
                             <div class="order-product-update">
                                
                                    <p class="update   js-update-quantity-${product.id}" data-product-id="${product.id}">update</p>
                                    <input type='number'class="quantity-hide-input  js-input-${product.id}" >
                                    <span class="quantity-hide-save js-save-${product.id} js-save" data-product-id="${product.id}"> save </span>
                                

                                <p class="delete" data-product-id="${product.id}">delete</p>
                            </div>
                        </div>
                        <div class="order-delivery-info">
                            <div class="order-delivery-heading">
                                choose a delivery date
                            </div>
                            <div class="delivery-date-form">
                            ${generateDeliveryOptionsHtml(matchingItem.id ,product)}
                                
                                
                            </div>


                        </div>
                    </div>
                     </div>
    `
})
orderContainer.innerHTML = cartSummaryHtml



//generating deliveryoption html 
function generateDeliveryOptionsHtml(matchingItemId,cartItem){
   
    let deliveryOptionsHtml = ``;           
    deliveryOptions.forEach((option)=>{
        let deliveryPrice = (option.deliveryPriceCents / 100).toFixed(2);
        let isChecked = option.id == cartItem.deliveryOptionsId  ;
       
        let today = dayjs();
        let deliveryDate = today.add(option.day,'day').format('dddd, MMMM D');
        deliveryOptionsHtml +=  `
         <div class="delivery-option-container">
                                <div class="delivery-date-select js-delivery-date-select"
                                data-product-id="${matchingItemId}"
                                data-delivery-option-id="${option.id}"
                                
                                >
                                <input type="radio" 
                                ${isChecked ? "checked" : ""}
                                class="delivery-date-select-input"
                                name="${matchingItemId}-delivery-date"data-product-id="${matchingItemId}"  id="delivery-date">
                                <span class="delivery-date">${deliveryDate}</span>
                                </div>
                                <div class="delivery-date-discription">
                                <p>${`$${deliveryPrice}`} - shipping</p>
                                </div>
                                </div>

        
        `



    })
return deliveryOptionsHtml;}

document.querySelectorAll('.delivery-date-select-input').forEach((input) => {
    input.addEventListener('change', (event) => {
        let productId = event.target.dataset.productId; 
        let selected = document.querySelector(`input[name="${productId}-delivery-date"]:checked`);
            if (selected) {
           console.log("Selected value:", selected.value);
            } else {
            console.log("No option selected yet.");
            }
        // console.log("Product ID:", productId);
        // // You can access the selected value using event.target.value
        // console.log("Selected value:", event.target.value);
    });
});


//deleting the item from the cart
document.querySelectorAll('.delete')
.forEach((deleteItem)=>{
    deleteItem.addEventListener('click',()=>{
        let productId = deleteItem.dataset.productId;
        deleteProductFromCart(productId)
        let container = document.querySelector(`.js-order-container-${productId}`);
       
        container.remove();
        updateCartQuantity()
       checkoutItemsCount.innerText =`( ${updateCartQuantity()} items )`;
       renderPaymentSummary(updateCartQuantity());

        console.log(cartItem);
      
    })
})







// document.querySelectorAll('.delivery-date-4').forEach((date)=>{
//     date.innerText = deliveryDateAfter4Days;
// })
// document.querySelectorAll('.delivery-date-2').forEach((date)=>{
//     date.innerText = deliveryDateAfter2Days;
// });

//displaying  input and save button to update quantity 
document.querySelectorAll('.update').forEach((updateItem)=>{
    updateItem.addEventListener('click',()=>{
        let productId = updateItem.dataset.productId;
        let quantityInput = document.querySelector(`.js-input-${productId}`)
        let quantitySaveElement = document.querySelector(`.js-save-${productId}`)
        quantityInput.classList.remove('quantity-hide-input');
        quantityInput.classList.add('quantity-show-input');
        quantitySaveElement.classList.remove('quantity-hide-save');
        quantitySaveElement.classList.add('quantity-show-save');
        
        


       


        
    })
})


//updating and saving quantity and  hiding the input and save buttton again
document.querySelectorAll('.js-save').forEach((saveItem)=>{
    saveItem.addEventListener('click',()=>{
        console.log("hey")
        let productId = saveItem.dataset.productId;
        let inputt = document.querySelector('.quantity-show-input')
        let inputValue = inputt.value
        console.log(inputValue);
        console.log('productOd ',productId)
        updateProductQuantity(productId, parseInt(inputValue));
        console.log(cartItem);
       
        saveCartToLocalStorage(cartItem)
       
        document.querySelector(`.js-product-quantity-${productId}`).innerText = `quantity: ${parseInt(inputValue)}`;
        updateCartQuantity();
        checkoutItemsCount.innerText =`( ${updateCartQuantity()} items )`;
        renderPaymentSummary(updateCartQuantity())



        
       
        inputt.classList.remove('quantity-show-input');
        inputt.classList.add('quantity-hide-input');
        let quantitySaveElement = document.querySelector('.quantity-show-save')
        quantitySaveElement.classList.remove('quantity-show-save');
        quantitySaveElement.classList.add('quantity-hide-save');
        
        


        

})
})



//adding event listner to the date selected 
document.querySelectorAll('.js-delivery-date-select').forEach((element)=>{
    element.addEventListener('click',function(){
        console.log('clicked')
        let productId = element.dataset.productId;
        let deliveryOptionId = element.dataset.deliveryOptionId;
        console.log(productId, deliveryOptionId)
        updateDeliveryDate(productId, deliveryOptionId)
        renderCartSummary()
        renderPaymentSummary(updateCartQuantity());
        

    })
})


}
renderCartSummary()
