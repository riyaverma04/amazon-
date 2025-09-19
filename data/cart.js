export const cartItem = [
    {
         id: "PRD-A15P-9X7Q4",
         quantity:2,
    },
    {
        id: "PRD-S24U-8K3R2",
        quantity: 1,
    }
]
//dynamically changing the number of items in the cart which is shown on the top of the cart
export const updateCartQuantity = () => {

    let countQuantity = 0;;
    cartItem.forEach((item) => {
        return countQuantity += item.quantity;
    })


    document.querySelector('.item-count').innerText = countQuantity;

}