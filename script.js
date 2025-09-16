console.log("consoling")
let products = [
    {
        img : "./images/socks.jpg",
        name: "Black and gray athletic cotton socks",
        rating: {
            stars: 4.5,
            count : 54,
        },
        priceCents: 1090,
        
    },
    {
        img : "./images/socks.jpg",
        name: "Black and gray athletic cotton socks",
        rating: {
            stars: 4.5,
            count : 54,
        },
        priceCents: 1090,
        
    },
    {
        img : "./images/socks.jpg",
        name: "Black and gray athletic cotton socks",
        rating: {
            stars: 4.5,
            count : 54,
        },
        priceCents: 1090,
        
    }
]


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
                    <button class="add-to-cart">Add to cart</button>
                </div>
    `
})

document.querySelector('.js-product-grid').innerHTML = productHtml;