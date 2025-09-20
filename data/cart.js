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
    { id: "PRD-A15P-9X7Q4", quantity: 2 },
    { id: "PRD-S24U-8K3R2", quantity: 1 }
];






//dynamically changing the number of items in the cart which is shown on the top of the cart
export const updateCartQuantity = () => {

    let countQuantity = 0;;
    cartItem.forEach((item) => {
        return countQuantity += item.quantity;
    })

 
    document.querySelector('.item-count').innerText = countQuantity;
   
    saveCartToLocalStorage(cartItem);

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