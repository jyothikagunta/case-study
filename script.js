const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}


document.addEventListener('DOMContentLoaded', function() {
    displayCartItems();
    calculateCartTotal();
});

// Function to update cart count
function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    document.getElementById('cart-count').innerText = cartItems.length;
}

// Call updateCartCount on page load
document.addEventListener('DOMContentLoaded', updateCartCount);

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

function calculateCartTotal() {
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    var total = 0;

    for (var i = 0; i < cartItems.length; i++) {
        var item = cartItems[i];
        total += item.price * item.quantity;
    }

    var subtotalPriceElement = document.querySelector('.sub-total-price');
        subtotalPriceElement.textContent = '$' + total.toFixed(2);

    var totalPriceElement = document.querySelector('.total-price');
        totalPriceElement.textContent = '$' + total.toFixed(2);
}

function removeCartItem(event) {
    var buttonClicked = event.target.closest('.cart-remove');
    var itemId = buttonClicked.getAttribute('data-id');

    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    var updatedCartItems = cartItems.filter(item => item.id !== itemId);

    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

    displayCartItems();
    calculateCartTotal();
}


function quantityChanged(event) {
    var input = event.target;
    if(isNaN(input.value) || input.value <=0){
        input.value=1;
    }
    var newQuantity = parseInt(input.value);
    var itemId = input.getAttribute('data-id');

    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    var updatedCartItems = cartItems.map(item => {
        if (item.id === itemId) {
            item.quantity = newQuantity;
        }
        return item;
    });

    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

    displayCartItems();
    calculateCartTotal();
}
