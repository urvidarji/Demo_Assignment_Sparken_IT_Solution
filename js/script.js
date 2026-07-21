// ========================================
// CART COUNTER
// ========================================

let cartTotal = 0;

function addToCart(button) {

    const productCard = button.closest(".product-card");

    const quantityInput =
        productCard.querySelector(".quantity input");

    const quantity =
        parseInt(quantityInput.value) || 1;

    cartTotal += quantity;

    document.getElementById("cartCount").innerText =
        cartTotal;


    // Change button temporarily

    const originalHTML = button.innerHTML;

    button.innerHTML =
        '<i class="bi bi-check-circle"></i> Added';

    button.disabled = true;


    setTimeout(function () {

        button.innerHTML = originalHTML;

        button.disabled = false;

    }, 1200);
}


// ========================================
// PRODUCT SEARCH
// ========================================

const searchInput =
    document.getElementById("searchInput");


if (searchInput) {

    searchInput.addEventListener(
        "keyup",
        function () {

            const searchValue =
                this.value.toLowerCase();

            const products =
                document.querySelectorAll(
                    ".product-card"
                );


            products.forEach(function (product) {

                const productName =
                    product.innerText.toLowerCase();


                if (
                    productName.includes(searchValue)
                ) {

                    product.parentElement.style.display =
                        "";

                } else {

                    product.parentElement.style.display =
                        "none";

                }

            });

        }
    );
}


// ========================================
// HERO SLIDER
// ========================================

const heroSlider =
    document.querySelector("#heroSlider");


if (heroSlider) {

    new bootstrap.Carousel(
        heroSlider,
        {
            interval: 4000,
            ride: "carousel",
            pause: "hover"
        }
    );

}


// ========================================
// BRAND SLIDER
// ========================================

const brandSlider =
    document.querySelector("#brandSlider");


if (brandSlider) {

    new bootstrap.Carousel(
        brandSlider,
        {
            interval: 3000,
            ride: "carousel",
            pause: "hover"
        }
    );

}