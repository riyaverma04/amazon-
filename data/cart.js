export const cartItem = []
//dynamically changing the number of items in the cart which is shown on the top of the cart
export const updateCartQuantity = () => {

    let countQuantity = 0;;
    cartItem.forEach((item) => {
        return countQuantity += item.quantity;
    })


    document.querySelector('.item-count').innerText = countQuantity;

}