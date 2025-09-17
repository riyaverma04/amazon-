


let productHtml = ``
products.forEach((item)=>{
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
                    <button class="add-to-cart" data-product-name="${item.name}">Add to cart</button>
                </div>
    `
})

document.querySelector('.js-product-grid').innerHTML = productHtml;
document.querySelectorAll(".add-to-cart").forEach((button)=>{
    button.addEventListener('click',()=>{
       const addedItem = button.dataset.productName;
       let matchingItem;
        cartItem.forEach((item)=>{
            if(addedItem === item.name){
                matchingItem = item
            }
        })

        if(matchingItem){
            matchingItem.quantity++;
        }else{
            cartItem.push({
                name: addedItem,
                quantity: 1
            })
        }
       

       
   
       
        //dynamically changing the number of items in the cart which is shown on the top of the cart
       document.querySelector('.item-count').innerText = cartItem.length;
    })
})





