import { cartItem, deleteProductFromCart, saveCartToLocalStorage, updateCartQuantity, updateProductQuantity } from '../data/cart.js';
import { products } from '../data/product.js';






//displaying the cart items count on the top of the cart
let checkoutItemsCount= document.querySelector('.checkout-items-number-count');
checkoutItemsCount.innerText = updateCartQuantity();

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
                                <div class="delivery-date-select"><input type="radio" 
                                class="delivery-date-select-input"
                                name="${matchingItem.id}-delivery-date" id="delivery-date">after 2 days</div>
                                
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
       checkoutItemsCount.innerText = updateCartQuantity();

        console.log(cartItem);
      
    })
})


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
        checkoutItemsCount.innerText = updateCartQuantity();



        
       
        inputt.classList.remove('quantity-show-input');
        inputt.classList.add('quantity-hide-input');
        let quantitySaveElement = document.querySelector('.quantity-show-save')
        quantitySaveElement.classList.remove('quantity-show-save');
        quantitySaveElement.classList.add('quantity-hide-save');
        
        


        

})
})



