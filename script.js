/* ==========================================
   FAMMAX - FRONTEND E-COMMERCE
========================================== */


const products = [

    {
        id: 1,
        name: "iPhone 17 Pro Max",
        brand: "Apple",
        category: "Mobiles",
        price: 149900,
        oldPrice: 159900,
        rating: 4.9,
        stock: 12,
        icon: "📱",
        description: "Apple's latest premium smartphone.",
        specs: [
            "Display: 6.9 inch",
            "Storage: 256GB",
            "RAM: 12GB",
            "Camera: Pro Camera System",
            "Battery: All-day battery"
        ]
    },

    {
        id: 2,
        name: "Samsung Galaxy S26 Ultra",
        brand: "Samsung",
        category: "Mobiles",
        price: 139999,
        oldPrice: 149999,
        rating: 4.8,
        stock: 8,
        icon: "📱",
        description: "Premium Samsung flagship smartphone.",
        specs: [
            "Display: 6.9 inch AMOLED",
            "Storage: 256GB",
            "RAM: 12GB",
            "Camera: 200MP",
            "5G: Yes"
        ]
    },

    {
        id: 3,
        name: "OnePlus 14",
        brand: "OnePlus",
        category: "Mobiles",
        price: 69999,
        oldPrice: 74999,
        rating: 4.7,
        stock: 15,
        icon: "📱",
        description: "Fast and powerful OnePlus smartphone.",
        specs: [
            "Display: AMOLED",
            "Storage: 256GB",
            "RAM: 12GB",
            "5G: Yes",
            "Fast Charging: Yes"
        ]
    },

    {
        id: 4,
        name: "iPhone 17 Pro Max Clear Case",
        brand: "FAMMAX",
        category: "Cases",
        price: 499,
        oldPrice: 799,
        rating: 4.5,
        stock: 50,
        icon: "📱",
        description: "Premium transparent protective case.",
        specs: [
            "Compatible: iPhone 17 Pro Max",
            "Material: TPU",
            "Protection: Shock Resistant",
            "Design: Clear"
        ]
    },

    {
        id: 5,
        name: "Premium Tempered Glass",
        brand: "FAMMAX",
        category: "Tempered Glass",
        price: 299,
        oldPrice: 499,
        rating: 4.6,
        stock: 100,
        icon: "🛡️",
        description: "9H premium screen protection.",
        specs: [
            "Hardness: 9H",
            "Protection: Scratch Resistant",
            "Clarity: HD",
            "Installation: Easy"
        ]
    },

    {
        id: 6,
        name: "FAMMAX Wireless Headphones",
        brand: "FAMMAX",
        category: "Audio",
        price: 1999,
        oldPrice: 2999,
        rating: 4.4,
        stock: 25,
        icon: "🎧",
        description: "Wireless headphones with immersive sound.",
        specs: [
            "Connection: Bluetooth 5.4",
            "Battery: 40 Hours",
            "Microphone: Yes",
            "Noise Cancellation: Yes"
        ]
    },

    {
        id: 7,
        name: "Type-C Fast Charging Cable",
        brand: "FAMMAX",
        category: "Cables",
        price: 399,
        oldPrice: 699,
        rating: 4.5,
        stock: 75,
        icon: "🔌",
        description: "Durable high-speed USB Type-C cable.",
        specs: [
            "Length: 1.5m",
            "Type: USB-C",
            "Fast Charging: Yes",
            "Data Transfer: High Speed"
        ]
    },

    {
        id: 8,
        name: "65W Fast Charger",
        brand: "FAMMAX",
        category: "Chargers",
        price: 1499,
        oldPrice: 1999,
        rating: 4.6,
        stock: 30,
        icon: "⚡",
        description: "Compact 65W fast charging adapter.",
        specs: [
            "Power: 65W",
            "Port: USB-C",
            "Safety Protection: Yes",
            "Fast Charging: Yes"
        ]
    },

    {
        id: 9,
        name: "FAMMAX Smart Watch Pro",
        brand: "FAMMAX",
        category: "Smartwatch",
        price: 2999,
        oldPrice: 3999,
        rating: 4.3,
        stock: 20,
        icon: "⌚",
        description: "Smartwatch with fitness and notification features.",
        specs: [
            "Display: AMOLED",
            "Bluetooth: Yes",
            "Heart Rate: Yes",
            "Water Resistant: Yes"
        ]
    },

    {
        id: 10,
        name: "Samsung Galaxy Back Case",
        brand: "FAMMAX",
        category: "Cases",
        price: 399,
        oldPrice: 699,
        rating: 4.5,
        stock: 45,
        icon: "📱",
        description: "Protective case for Samsung smartphones.",
        specs: [
            "Material: TPU",
            "Protection: Shockproof",
            "Design: Slim"
        ]
    },

    {
        id: 11,
        name: "Lightning USB Cable",
        brand: "FAMMAX",
        category: "Cables",
        price: 499,
        oldPrice: 799,
        rating: 4.4,
        stock: 60,
        icon: "🔌",
        description: "Fast charging Lightning cable.",
        specs: [
            "Connector: Lightning",
            "Length: 1.2m",
            "Fast Charging: Yes"
        ]
    },

    {
        id: 12,
        name: "Wireless Earbuds Pro",
        brand: "FAMMAX",
        category: "Audio",
        price: 2499,
        oldPrice: 3499,
        rating: 4.6,
        stock: 35,
        icon: "🎧",
        description: "Compact wireless earbuds with rich audio.",
        specs: [
            "Bluetooth: 5.4",
            "Battery: 30 Hours",
            "ANC: Yes",
            "Charging: USB-C"
        ]
    }

];


let cart = JSON.parse(localStorage.getItem("fammaxCart")) || [];
let wishlist = JSON.parse(localStorage.getItem("fammaxWishlist")) || [];


/* ==========================================
   DISPLAY PRODUCTS
========================================== */

function displayProducts(list = products) {

    const grid = document.getElementById("productGrid");

    grid.innerHTML = "";

    if (list.length === 0) {

        grid.innerHTML = `
            <div style="grid-column:1/-1;text-align:center;padding:60px">
                <h2>No products found</h2>
                <p style="color:#777;margin-top:10px">
                    Try another search.
                </p>
            </div>
        `;

        return;
    }


    list.forEach(product => {

        const discount = Math.round(
            ((product.oldPrice - product.price) /
            product.oldPrice) * 100
        );


        const card = document.createElement("div");

        card.className = "product-card";


        card.innerHTML = `

            <div class="product-image">

                <span class="discount">
                    ${discount}% OFF
                </span>

                <button class="wishlist"
                    onclick="toggleWishlist(${product.id})">
                    ${wishlist.includes(product.id) ? "♥️" : "♡"}
                </button>

                <span>${product.icon}</span>

            </div>


            <div class="product-info">

                <span class="brand">
                    ${product.brand}
                </span>

                <h3>${product.name}</h3>

                <div class="rating">
                    ⭐ ${product.rating}
                </div>

                <div class="price">
                    ₹${product.price.toLocaleString("en-IN")}
                    <span class="old-price">
                        ₹${product.oldPrice.toLocaleString("en-IN")}
                    </span>
                </div>

                <div class="stock">
                    ✓ ${product.stock} available
                </div>

                <div class="product-actions">

                    <button class="view-btn"
                        onclick="openProduct(${product.id})">
                        View
                    </button>

                    <button class="add-btn"
                        onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>

                </div>

            </div>
        `;


        grid.appendChild(card);

    });

}


/* ==========================================
   CATEGORY
========================================== */

function filterCategory(category) {

    showHome();

    let filtered;

    if (category === "All") {

        filtered = products;

        document.getElementById("productHeading")
            .textContent = "Featured Products";

    } else {

        filtered = products.filter(
            product => product.category === category
        );

        document.getElementById("productHeading")
            .textContent = category;
    }


    displayProducts(filtered);

    window.scrollTo({
        top: document.querySelector(".products-section").offsetTop - 100,
        behavior: "smooth"
    });

}


/* ==========================================
   SEARCH
========================================== */

function searchProducts() {

    const query =
        document.getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();


    if (!query) {

        displayProducts(products);

        return;
    }


    const results = products.filter(product =>

        product.name.toLowerCase().includes(query) ||

        product.brand.toLowerCase().includes(query) ||

        product.category.toLowerCase().includes(query)

    );


    document.getElementById("productHeading")
        .textContent = `Search Results (${results.length})`;

    displayProducts(results);

}


/* ==========================================
   SORT
========================================== */

function sortProducts() {

    const value =
        document.getElementById("sortSelect").value;


    let sorted = [...products];


    if (value === "low") {

        sorted.sort((a, b) => a.price - b.price);

    }


    if (value === "high") {

        sorted.sort((a, b) => b.price - a.price);

    }


    if (value === "rating") {

        sorted.sort((a, b) => b.rating - a.rating);

    }


    displayProducts(sorted);

}


/* ==========================================
   PRODUCT DETAILS
========================================== */

function openProduct(id) {

    const product =
        products.find(p => p.id === id);


    document.getElementById("productDetails").innerHTML = `

        <div class="product-detail">

            <div class="detail-image">
                ${product.icon}
            </div>

            <div class="detail-info">

                <span class="brand">
                    ${product.brand}
                </span>

                <h1>${product.name}</h1>

                <div class="rating">
                    ⭐ ${product.rating} / 5
                </div>

                <div class="detail-price">
                    ₹${product.price.toLocaleString("en-IN")}
                </div>

                <p>
                    ${product.description}
                </p>

                <div class="specs">

                    ${product.specs
                        .map(spec => `<p>✓ ${spec}</p>`)
                        .join("")}

                </div>

                <p class="stock">
                    ✓ ${product.stock} units available
                </p>

                <button
                    class="shop-btn"
                    style="width:100%;margin-top:20px"
                    onclick="addToCart(${product.id});closeProduct()">

                    Add to Cart

                </button>

            </div>

        </div>
    `;


    document.getElementById("productModal")
        .classList.add("active");

}


function closeProduct() {

    document.getElementById("productModal")
        .classList.remove("active");

}


/* ==========================================
   CART
========================================== */

function addToCart(id) {

    const product =
        products.find(p => p.id === id);


    const existing =
        cart.find(item => item.id === id);


    if (existing) {

        if (existing.quantity < product.stock) {
            existing.quantity++;
        }

    } else {

        cart.push({
            id: id,
            quantity: 1
        });

    }


    saveCart();

    updateCart();

    openCart();

}


function saveCart() {

    localStorage.setItem(
        "fammaxCart",
        JSON.stringify(cart)
    );

}


function updateCart() {

    const count =
        cart.reduce((total, item) =>
            total + item.quantity, 0);


    document.getElementById("cartCount")
        .textContent = count;


    renderCart();

}


function renderCart() {

    const container =
        document.getElementById("cartItems");


    if (cart.length === 0) {

        container.innerHTML = `
            <div style="text-align:center;padding:60px 10px">
                <div style="font-size:60px">🛒</div>
                <h3>Your cart is empty</h3>
                <p style="color:#777;margin-top:10px">
                    Add something from FAMMAX.
                </p>
            </div>
        `;

        document.getElementById("cartTotal")
            .textContent = "₹0";

        return;
    }


    let total = 0;


    container.innerHTML = "";


    cart.forEach(item => {

        const product =
            products.find(p => p.id === item.id);


        const itemTotal =
            product.price * item.quantity;


        total += itemTotal;


        const div =
            document.createElement("div");


        div.className = "cart-item";


        div.innerHTML = `

            <div class="cart-product-image">
                ${product.icon}
            </div>

            <div class="cart-item-info">

                <h4>${product.name}</h4>

                <p>
                    ₹${product.price.toLocaleString("en-IN")}
                </p>

                <div class="quantity">

                    <button onclick="changeQuantity(${product.id}, -1)">
                        −
                    </button>

                    <span>${item.quantity}</span>

                    <button onclick="changeQuantity(${product.id}, 1)">
                        +
                    </button>

                </div>

                <button
                    class="remove-btn"
                    onclick="removeFromCart(${product.id})">

                    Remove

                </button>

            </div>
        `;


        container.appendChild(div);

    });


    document.getElementById("cartTotal")
        .textContent =
        `₹${total.toLocaleString("en-IN")}`;

}


function changeQuantity(id, change) {

    const item =
        cart.find(item => item.id === id);


    const product =
        products.find(p => p.id === id);


    if (!item) return;


    item.quantity += change;


    if (item.quantity <= 0) {

        removeFromCart(id);

        return;
    }


    if (item.quantity > product.stock) {

        item.quantity = product.stock;

    }


    saveCart();

    updateCart();

}


function removeFromCart(id) {

    cart =
        cart.filter(item => item.id !== id);


    saveCart();

    updateCart();

}


function openCart() {

    document.getElementById("cartPanel")
        .classList.add("open");

}


function closeCart() {

    document.getElementById("cartPanel")
        .classList.remove("open");

}


/* ==========================================
   WISHLIST
========================================== */

function toggleWishlist(id) {

    if (wishlist.includes(id)) {

        wishlist =
            wishlist.filter(item => item !== id);

    } else {

        wishlist.push(id);

    }


    localStorage.setItem(
        "fammaxWishlist",
        JSON.stringify(wishlist)
    );


    displayProducts();

}


function showWishlist() {

    showHome();

    const wishlistProducts =
        products.filter(product =>
            wishlist.includes(product.id)
        );


    document.getElementById("productHeading")
        .textContent = "My Wishlist";


    displayProducts(wishlistProducts);

}


/* ==========================================
   LOGIN
========================================== */

function openLogin() {

    document.getElementById("loginModal")
        .classList.add("active");

}


function closeLogin() {

    document.getElementById("loginModal")
        .classList.remove("active");

}


function loginUser() {

    const email =
        document.getElementById("loginEmail").value;


    const password =
        document.getElementById("loginPassword").value;


    if (!email || !password) {

        alert("Please enter email and password.");

        return;
    }


    localStorage.setItem(
        "fammaxUser",
        JSON.stringify({
            email: email
        })
    );


    alert(`Welcome to FAMMAX, ${email}`);

    closeLogin();

}


/* ==========================================
   CHECKOUT
========================================== */

function openCheckout() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;
    }


    closeCart();

    showOnly("checkoutPage");


    renderCheckout();

}


function renderCheckout() {

    const container =
        document.getElementById("checkoutItems");


    let total = 0;


    container.innerHTML = "";


    cart.forEach(item => {

        const product =
            products.find(p => p.id === item.id);


        const itemTotal =
            product.price * item.quantity;


        total += itemTotal;


        container.innerHTML += `

            <div style="
                display:flex;
                justify-content:space-between;
                gap:15px;
                margin-bottom:15px;
                font-size:13px;
            ">

                <span>
                    ${product.name}
                    × ${item.quantity}
                </span>

                <strong>
                    ₹${itemTotal.toLocaleString("en-IN")}
                </strong>

            </div>
        `;

    });


    document.getElementById("checkoutSubtotal")
        .textContent =
        `₹${total.toLocaleString("en-IN")}`;


    document.getElementById("checkoutTotal")
        .textContent =
        `₹${total.toLocaleString("en-IN")}`;

}


/* ==========================================
   PLACE ORDER
========================================== */

function placeOrder() {

    const name =
        document.getElementById("customerName").value;

    const phone =
        document.getElementById("customerPhone").value;

    const email =
        document.getElementById("customerEmail").value;

    const address =
        document.getElementById("customerAddress").value;

    const city =
        document.getElementById("customerCity").value;

    const pincode =
        document.getElementById("customerPincode").value;


    if (
        !name ||
        !phone ||
        !email ||
        !address ||
        !city ||
        !pincode
    ) {

        alert("Please complete all delivery details.");

        return;
    }


    const payment =
        document.querySelector(
            'input[name="payment"]:checked'
        ).value;


    const orderId =
        "FMX" +
        Date.now()
            .toString()
            .slice(-8);


    document.getElementById("orderId")
        .textContent = orderId;


    localStorage.setItem(
        "fammaxLastOrder",
        JSON.stringify({
            orderId,
            name,
            phone,
            email,
            address,
            city,
            pincode,
            payment,
            cart
        })
    );


    document.getElementById("successModal")
        .classList.add("active");

}


function finishOrder() {

    cart = [];

    saveCart();

    updateCart();


    document.getElementById("successModal")
        .classList.remove("active");


    showHome();

}


/* ==========================================
   PAGE NAVIGATION
========================================== */

function showOnly(id) {

    document.getElementById("homePage")
        .classList.add("hidden");

    document.getElementById("aboutPage")
        .classList.add("hidden");

    document.getElementById("contactPage")
        .classList.add("hidden");

    document.getElementById("checkoutPage")
        .classList.add("hidden");


    document.getElementById(id)
        .classList.remove("hidden");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


function showHome() {

    showOnly("homePage");

    displayProducts(products);

}


function showAbout() {

    showOnly("aboutPage");

}


function showContact() {

    showOnly("contactPage");

}


/* ==========================================
   START
========================================== */

displayProducts();

updateCart();