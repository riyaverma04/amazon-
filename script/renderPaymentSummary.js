// import { getProduct } from "../data/product.js";
import { cartItem } from "../data/cart.js";
import { getProduct } from "../data/product.js";
import { deliveryOptions, getDeliveryOptions } from "../data/deliveryOptions.js";
import { formatCurrency } from "./money.js";



export function renderPaymentSummary (updateCartQuantity){
    



    let checkoutOrderSummery = document.querySelector(".checkout-order-summary-info");
    let totalOrderPrice = document.querySelector(".js-total-price");
    // console.log("rendering fron renderpyamensummary ", getProduct("PRD-A15P-9X7Q4"))
    let itemsPriceTotalCents = 0;
    let shippingPriceTotalCents = 0;
    cartItem.forEach(element => {
        let matchingItem = getProduct(element.id);
        console.log(element)
        
        let deliveryOption = getDeliveryOptions(element.deliveryOptionsId)
        console.log("riya",deliveryOption)
        console.log(element.deliveryOptionsId)
        console.log(deliveryOption.id)
        if(element.deliveryOptionsId === deliveryOption.id){
            shippingPriceTotalCents += deliveryOption.deliveryPriceCents

        }
       
       itemsPriceTotalCents += matchingItem.priceCents  * element.quantity;

        
    });
    const totalBeforeTaxCents = itemsPriceTotalCents + shippingPriceTotalCents;
    const EstimatedTaxCents = totalBeforeTaxCents * 0.1; 
    const orderTotalCents = totalBeforeTaxCents + EstimatedTaxCents;  

    
    checkoutOrderSummery.innerHTML =    `
        <div class="row">
                        <p>items (${updateCartQuantity})</p>
                        <p>${formatCurrency(itemsPriceTotalCents)}</p>
                    </div>
                    <div class="row"><p>shipping & handling</p>
                        <p>${formatCurrency(shippingPriceTotalCents)}</p>
                    </div>
                    <div class="row"><p>total before tax</p>
                        <p>${formatCurrency(totalBeforeTaxCents)}</p>
                    </div>
                    <div class="row"><p>Estimated tax (10%)</p>
                        <p>${formatCurrency(EstimatedTaxCents)}</p>
                    </div>
    `




    totalOrderPrice.innerText = formatCurrency(orderTotalCents);
}