//setting cart on localstorage
// function saveCartToLocalStorage(cartItem){
//     localStorage.setItem('cartItem', JSON.stringify(cartItem));
// }
// let storedItem = localStorage.getItem('cartItem');
// export let cartItem = storedItem ? JSON.parse(storedItem) : [
//                 {
//                     id: "PRD-A15P-9X7Q4",
//                     quantity:2,
//                 },
//                 {
//                     id: "PRD-S24U-8K3R2",
//                     quantity: 1,
//                 }
//             ]



function getCartFromLocalStorage() {
    try {
        let storedItem = localStorage.getItem('cartItem');
        return storedItem ? JSON.parse(storedItem) : null;
    } catch (e) {
        console.warn("Invalid cart data in localStorage, resetting...");
        return null; // fallback will be used
    }
}
export function saveCartToLocalStorage(cartItem){
    localStorage.setItem('cartItem', JSON.stringify(cartItem));
}

export let cartItem = getCartFromLocalStorage() || [
    { id: "PRD-A15P-9X7Q4", quantity: 2,deliveryOptionsId : '2' },
    { id: "PRD-S24U-8K3R2", quantity: 1 , deliveryOptionsId : '1' }
];


//updating the product quantity already present in the cart via using update button
export function updateProductQuantity(productId, newQuantity){
    let matchingItem ;
    cartItem.forEach((item)=>{
        if(productId === item.id){
            matchingItem = item;
            
        }
    })
    
    matchingItem.quantity  = newQuantity
    saveCartToLocalStorage(cartItem)


}



//dynamically changing the number of items in the cart which is shown on the top of the cart
export let updateCartQuantity = () => {

    let countQuantity = 0;
    cartItem.forEach((item) => {
        return countQuantity += item.quantity;
    })

    //stored the cart quantity in the local storage

    localStorage.setItem('cartQuantity', countQuantity);
    //getting the cart quantity from the local storage
    try {
    let storedCountQuanity = localStorage.getItem('cartQuantity') ;
    let getStoredCountQuantity = storedCountQuanity ? JSON.parse(storedCountQuanity) : 0;
    let itemCountEl = document.querySelector('.item-count');

    //Defensive coding: Even if the DOM isn’t ready, you can prevent a crash:
    if (itemCountEl) {
    itemCountEl.innerText = getStoredCountQuantity;
    }
     saveCartToLocalStorage(cartItem);
     return getStoredCountQuantity
    } catch(e) {
        console.warn("Invalid cart quantity data in localStorage, resetting...");
        let getStoredCountQuantity = 0; // fallback will be used
    }


 
    console.log(countQuantity);
   
    
}
   
       
    

   
   



//removing product from the cart

export function deleteProductFromCart(productId){
    // let newCartAfterDeleting=[];

    // cartItem.forEach((item)=>{
    //     if(item.id !== productId){
    //         newCartAfterDeleting.push(item)
    //     }
    // })
    // cartItem = newCartAfterDeleting;
    // console.log(cartItem)
    // saveCartToLocalStorage(cartItem);


    cartItem.splice(0, cartItem.length, ...cartItem.filter(item => item.id !== productId));
    console.log(cartItem);
    saveCartToLocalStorage(cartItem);
}


export function updateDeliveryDate(productId, deliveryOptionsId){
    console.log(productId, deliveryOptionsId)
     let matchingItem ;
    cartItem.forEach((item)=>{
        if(productId === item.id){
            matchingItem = item;
            
        }
    })
    
    matchingItem.deliveryOptionsId  = deliveryOptionsId
    console.log(matchingItem)
    saveCartToLocalStorage(cartItem)

}