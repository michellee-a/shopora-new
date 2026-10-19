// ===============================
// SHOPORA JAVASCRIPT
// ===============================


// Cart
let cart = [];


// ===============================
// ADD TO CART
// ===============================

const addButtons = document.querySelectorAll(".product button");

addButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const product = button.closest(".product");

        const productName = product.querySelector("h3").textContent;

        const priceText = product.querySelector("h4").textContent;

        const price = Number(
            priceText.replace("₦", "").replace(/,/g,"")
        );

        // check if product is already in cart
        const existingProduct = cart.find(
            item => item.name === productName
        );

        if(existingProduct){
            existingProduct.quantity++;
        } else {
            cart.push({
            name: productName,
            price: price,
            quantity: 1
        });
        }


        updateCart();

        alert(productName + "added to cart🛒");

        console.log(cart);
    });

});


// ===============================
// UPDATE CART
// ===============================

function updateCart() {

   const cartCount = document.querySelector("#cartCount");

   if (cartCount){
    let totalItems = 0;

    cart.forEach(function(item){
        totalItems += item.quantity;
    })

    cartCount.textContent = totalItems;
}

}


// ===============================
// SHOW CART
// ===============================

const cartButton = document.querySelector(".cart-button");

    if(cartButton){
        cartButton.addEventListener("click",function(){

    if (cart.length === 0) {
        alert("Your cart is empty 🛒");
        return;
    }

    let message = "🛒 YOUR CART\n\n";

    let total = 0;

    cart.forEach(function(item, index) {

        const itemTotal = item.price *item.quantity;

        total += itemTotal;

        message +=
            (index + 1) +
            ". " +
            item.name + "\n" +
            " Price: ₦" +
            item.price.toLocaleString() + "\n" +
            " Quantity:" +
            item.quantity + "\n" +
            " Subtotal: ₦" +
            itemTotal.toLocaleString() +
            "\n\n";

       
    });

    message +=
        "\n--------------------\n" +
        "Total: ₦" +
        total.toLocaleString();

    alert(message);
});

}


// ===============================
// SEARCH PRODUCTS
// ===============================

const searchInput = document.querySelector(
    'input[type="text"]'
);

if (searchInput) {

    searchInput.addEventListener("keyup", function() {

        const searchValue =
            searchInput.value.toLowerCase();

        const products =
            document.querySelectorAll(".product");

        products.forEach(function(product) {

            const productName =
                product.querySelector("h3");

            if (productName) {

                const name =
                    productName.textContent.toLowerCase();

                if (name.includes(searchValue)) {
                    product.style.display = "";
                } else {
                    product.style.display = "none";
                }

            }

        });

    });

}


// ===============================
// SEARCH BUTTON
// ===============================

const searchButton =
    document.querySelector(".search button");

if (searchButton) {

    searchButton.addEventListener("click", function() {

        const value = searchInput.value.trim();

        if (value === "") {

            alert("Please enter a product to search 🔍");

        } else {

            showMessage(
                "Searching for " + value + " 🔍"
            );

        }

    });

}


// ===============================
// SHOP NOW BUTTON
// ===============================

const buttons =
    document.querySelectorAll("button");

buttons.forEach(function(button) {

    if (button.textContent.includes("Shop Now")) {

        button.addEventListener("click", function() {

            document.querySelector(".product-section")
                .scrollIntoView({
                    behavior: "smooth"
                });

        });

    }

});


// ===============================
// CATEGORY MESSAGE
// ===============================

const categories =
    document.querySelectorAll(".category");

categories.forEach(function(category) {

    category.addEventListener("click", function() {

        showMessage(
            "You selected " +
            category.textContent
        );

    });

});


// ===============================
// NOTIFICATION
// ===============================

function showMessage(message) {

    const notification =
        document.createElement("div");

    notification.textContent = message;

    notification.style.position = "fixed";
    notification.style.top = "20px";
    notification.style.right = "20px";
    notification.style.backgroundColor = "#3B0A57";
    notification.style.color = "white";
    notification.style.padding = "15px 20px";
    notification.style.borderRadius = "8px";
    notification.style.zIndex = "9999";
    notification.style.boxShadow =
        "0 4px 10px rgba(0,0,0,0.3)";

    document.body.appendChild(notification);


    setTimeout(function() {

        notification.remove();

    }, 2500);

}
function showSignup(){
    let name = prompt("Enter your name:");

    if (name === null || name === ""){
        return;
    }
    
    let email = prompt("Enter your email:");

    if (email === null || email === ""){
        return;
    }

    let password = prompt("Create a password:");
    
    if (password === null || password === ""){
        return;
    }

    alert("Account created successfully!🎉\nWelcome to Shopora, "+ name + "!");
}