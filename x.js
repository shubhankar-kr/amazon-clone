const products = [
  {
    id: "bc2847e9-5323-403f-b7cf-57fde044a955",
    image: "images/products/men-cozy-fleece-zip-up-hoodie-red.jpg",
    name: "Men's Full-Zip Hooded Fleece Sweatshirt",
    rating: {
      stars: 4.5,
      count: 3157,
    },
    priceCents: 2400,
    keywords: ["sweaters", "hoodies", "apparel", "mens"],
  },
];

let html=(document.querySelector('.main').innerHTML);
products.forEach((products,index)=>{
  html += `<div class="product">
                <div > 
                    <img class="product-img" src=${products.image}>
                </div>
                <div class="product-info">
                    <div class="product-name-js product-name">${products.name}</div>
                    <div class="product-rating">
                        <img class="product-rating-img"src="images/ratings/rating-${products.rating.stars*10}.png">
                        ${products.rating.count}
                    </div>
                    <div class="product-price">Price : $${products.priceCents}</div>
                    <label>Quantity:</label>
                    <select class="quantity">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                    </select>
                    <div class="p-line-4">
                       <button class="add-to-cart-button"><span>Add to Cart</span></button>
                    </div>
                    
                </div>

            </div>`;
})
console.log(html);
document.querySelector(".main").innerHTML=html;