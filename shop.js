let shop = document.getElementById('prods');

let shopItemsData = [
{
    id: 1,
    Brand:"Adidas",
    name:"Cartoons Astronaut T-Shirts",
    price:45,
    imag :"img/products/f1.jpg",
    desc :"The Gildan Ultra Cotton T-Shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classis fit preshrunk jersey knit provides unmatched comfort with each wear.Featuring a taped neck and shoulder and a seamless double-needle collar and available in a range of colors,it offers it all in the ultimate head-turning package."
},
{
    id: 2,
    Brand:"Retro Vibes",
    name:"Cartoons Astronaut T-Shirts",
    price:55,
    imag :"img/products/f2.jpg",
    desc :"The Gildan Ultra Cotton T-Shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classis fit preshrunk jersey knit provides unmatched comfort with each wear.Featuring a taped neck and shoulder and a seamless double-needle collar and available in a range of colors,it offers it all in the ultimate head-turning package."
},

{
    id: 3,
    Brand:"Urban Wanderer",
    name:"Cartoons Astronaut T-Shirts",
    price:65,
    imag :"img/products/f3.jpg",
    desc :"The Gildan Ultra Cotton T-Shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classis fit preshrunk jersey knit provides unmatched comfort with each wear.Featuring a taped neck and shoulder and a seamless double-needle collar and available in a range of colors,it offers it all in the ultimate head-turning package."

},
{
    id: 4,
    Brand:"Adidas",
    name:"Cartoons Astronaut T-Shirts",
    price:45,
    imag :"img/products/f4.jpg",
    desc :"The Gildan Ultra Cotton T-Shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classis fit preshrunk jersey knit provides unmatched comfort with each wear.Featuring a taped neck and shoulder and a seamless double-needle collar and available in a range of colors,it offers it all in the ultimate head-turning package."

},
{
    id: 5,
    Brand:"Bookworm",
    name:"Cartoons Astronaut T-Shirts",
    price:35,
    imag :"img/products/f5.jpg",
    desc :"The Gildan Ultra Cotton T-Shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classis fit preshrunk jersey knit provides unmatched comfort with each wear.Featuring a taped neck and shoulder and a seamless double-needle collar and available in a range of colors,it offers it all in the ultimate head-turning package."

},
{
    id: 6,
    Brand:"Adidas",
    name:"Cartoons Astronaut T-Shirts",
    price:40,
    imag :"img/products/f6.jpg",
    desc :"The Gildan Ultra Cotton T-Shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classis fit preshrunk jersey knit provides unmatched comfort with each wear.Featuring a taped neck and shoulder and a seamless double-needle collar and available in a range of colors,it offers it all in the ultimate head-turning package."

},
{
    id: 7,
    Brand:"Vintage Soul",
    name:"Cartoons Astronaut T-Shirts",
    price:60,
    imag :"img/products/f7.jpg",
    desc :"The Gildan Ultra Cotton T-Shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classis fit preshrunk jersey knit provides unmatched comfort with each wear.Featuring a taped neck and shoulder and a seamless double-needle collar and available in a range of colors,it offers it all in the ultimate head-turning package."

},
{
    id: 8,
    Brand:"Urban Wanderer",
    name:"Cartoons Astronaut T-Shirts",
    price:55,
    imag :"img/products/f8.jpg",
    desc :"The Gildan Ultra Cotton T-Shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classis fit preshrunk jersey knit provides unmatched comfort with each wear.Featuring a taped neck and shoulder and a seamless double-needle collar and available in a range of colors,it offers it all in the ultimate head-turning package."

},
{
    id: 9,
    Brand:"Adidas",
    name:"Cartoons Astronaut T-Shirts",
    price:35,
    imag :"img/products/n1.jpg",
    desc :"The Gildan Ultra Cotton T-Shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classis fit preshrunk jersey knit provides unmatched comfort with each wear.Featuring a taped neck and shoulder and a seamless double-needle collar and available in a range of colors,it offers it all in the ultimate head-turning package."

},
{
    id: 10,
    Brand:"Adidas",
    name:"Cartoons Astronaut T-Shirts",
    price:25,
    imag :"img/products/n2.jpg",
    desc :"The Gildan Ultra Cotton T-Shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classis fit preshrunk jersey knit provides unmatched comfort with each wear.Featuring a taped neck and shoulder and a seamless double-needle collar and available in a range of colors,it offers it all in the ultimate head-turning package."

},
{
    id: 11,
    Brand:"Bookworm",
    name:"Cartoons Astronaut T-Shirts",
    price:65,
    imag :"img/products/n3.jpg",
    desc :"The Gildan Ultra Cotton T-Shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classis fit preshrunk jersey knit provides unmatched comfort with each wear.Featuring a taped neck and shoulder and a seamless double-needle collar and available in a range of colors,it offers it all in the ultimate head-turning package."

},
{
    id: 12,
    Brand:"Adidas",
    name:"Cartoons Astronaut T-Shirts",
    price:35,
    imag :"img/products/n4.jpg",
    desc :"The Gildan Ultra Cotton T-Shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classis fit preshrunk jersey knit provides unmatched comfort with each wear.Featuring a taped neck and shoulder and a seamless double-needle collar and available in a range of colors,it offers it all in the ultimate head-turning package."

},
{
    id: 13,
    Brand:"Urban Wanderer",
    name:"Cartoons Astronaut T-Shirts",
    price:25,
    imag :"img/products/n5.jpg",
    desc :"The Gildan Ultra Cotton T-Shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classis fit preshrunk jersey knit provides unmatched comfort with each wear.Featuring a taped neck and shoulder and a seamless double-needle collar and available in a range of colors,it offers it all in the ultimate head-turning package."

},
{
    id: 14,
    Brand:"Adidas",
    name:"Cartoons Astronaut T-Shirts",
    price:55,
    imag :"img/products/n6.jpg",
    desc :"The Gildan Ultra Cotton T-Shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classis fit preshrunk jersey knit provides unmatched comfort with each wear.Featuring a taped neck and shoulder and a seamless double-needle collar and available in a range of colors,it offers it all in the ultimate head-turning package."

},
{
    id: 15,
    Brand:"Vintage Soul",
    name:"Cartoons Astronaut T-Shirts",
    price:45,
    imag :"img/products/n7.jpg",
    desc :"The Gildan Ultra Cotton T-Shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classis fit preshrunk jersey knit provides unmatched comfort with each wear.Featuring a taped neck and shoulder and a seamless double-needle collar and available in a range of colors,it offers it all in the ultimate head-turning package."

},
{
    id: 16,
    Brand:"Urban Wanderer",
    name:"Cartoons Astronaut T-Shirts",
    price:40,
    imag :"img/products/n8.jpg",
    desc :"The Gildan Ultra Cotton T-Shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classis fit preshrunk jersey knit provides unmatched comfort with each wear.Featuring a taped neck and shoulder and a seamless double-needle collar and available in a range of colors,it offers it all in the ultimate head-turning package."

},
]

let generateShop = () =>{
    return (shop.innerHTML=shopItemsData.map((x)=>{
        return `
        <div id=prod-id-${x.id} class="pro" >
                <img src=${x.imag} alt="" style="cursor:context-menu"}>
                <div class="des" onclick="redirectToProduct(${x.id})">
                    <span>${x.Brand}</span>
                    <h5 class="product-title">${x.name}</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>$${x.price}</h4>
                </div>
                <button class="add-to-cart" data-id=${x.id} data-brand=${x.Brand} data-name=${x.name} data-price=${x.price} data-imag=${x.imag}>
                    <i class="fal fa-shopping-cart cart"></i>
                </button>
            </div>
    `

    }).join(""));
};

generateShop();



// Function to handle adding items to cart
function addToCartClicked(event) {
    var button = event.target;
    var product = button.parentElement;

    // Extract product details
    var id = product.getAttribute('data-id');
    var brand = product.getAttribute('data-brand');
    var name = product.getAttribute('data-name');
    var price = parseFloat(product.getAttribute('data-price'));
    var imag = product.getAttribute('data-imag');

    // Store item in Local Storage as JSON
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    var existingItem = cartItems.find(item => item.id == id);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push({
            id: id,
            brand: brand,
            name: name,
            price: price,
            quantity: 1,
            image: imag
        });
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Optionally update UI (e.g., change cart icon state, show notification)
    alert('Item added to cart!');

    // Update the cart display and total
    displayCartItems();
    calculateCartTotal();

        
}

function displayCartItems() {
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    

    var cartItemsHTML = cartItems.map(item => `
        <tr class="cart-box">
            <td><a href='#' class="cart-remove" data-id="${item.id}"><i class="far fa-times-circle"></i></a></td>
            <td><img src=${item.image} alt=""></td>
            <td>${item.name}</td>
            <td class="cart-price">$${item.price}</td>
            <td><input type="number" value="${item.quantity}" class="cart-quantity" data-id="${item.id}"></td>
            <td class="sub-total">$${(item.price * item.quantity).toFixed(2)}</td>
        </tr>
    `).join('');

     document.querySelector('.cart-content tbody').innerHTML = cartItemsHTML;

    
    

    // Add event listeners to quantity inputs and remove buttons
    var quantityInputs = document.getElementsByClassName('cart-quantity');
    for (var i = 0; i < quantityInputs.length; i++) {
        quantityInputs[i].addEventListener('change', quantityChanged);
    }

    var removeButtons = document.getElementsByClassName('cart-remove');
    for (var i = 0; i < removeButtons.length; i++) {
        removeButtons[i].addEventListener('click', removeCartItem);
    }
}

// Event listener for 'Add to Cart' button clicks
document.addEventListener('DOMContentLoaded', function() {
    var addToCartButtons = document.getElementsByClassName('add-to-cart');

    for (var i = 0; i < addToCartButtons.length; i++) {
        addToCartButtons[i].addEventListener('click', addToCartClicked);
    }
});



// // Function to handle navigation to product detail page
function redirectToProduct(productId) {
    // Find the selected product from shopItemsData (assuming it's globally available)
    let selectedProduct = shopItemsData.find(product => product.id === productId);
    console.log(selectedProduct);

    // Encode product details as URL parameters
    let params = new URLSearchParams();
    params.append('id', selectedProduct.id);
    // params.append('brand', selectedProduct.Brand);
    params.append('name', selectedProduct.name);
    params.append('price', selectedProduct.price);
    params.append('imag', selectedProduct.imag);
    params.append('desc',selectedProduct.desc);

    console.log(params);

    // // Redirect to sproduct.html with encoded parameters
    window.location.href = `sproduct.html?${params.toString()}`;
}