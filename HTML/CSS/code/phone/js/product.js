const getProducts = async() => {
    try {
        const result = await fetch("data/products.json");
        const data = await result.json();
        const products = data.products;
        return products;
    } catch (error) {
        console.log(error);
    }
};

/* Load Category Products */
const catCenter = document.querySelector(".category__center");

window.addEventListener("DOMContentLoaded", async function() {
    const products = await getProducts();
    displayProductItems(products);
});

const displayProductItems = items => {
    let displayProduct = items.map(
        product => `
            <div class="product category__products">
                <div class="product__header">
                    <img src=${product.image} alt="product">
                </div>
                <div class="product__footer">
                    <h3>${product.title}</h3>
                    <div class="rating">
                        <svg>
                            <use xlink:href="images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                            <use xlink:href="images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                            <use xlink:href="images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                            <use xlink:href="images/sprite.svg#icon-star-empty"></use>
                        </svg>
                        <svg>
                            <use xlink:href="images/sprite.svg#icon-star-empty"></use>
                        </svg>
                    </div>
                    <div class="product__price">
                        <h4>$ ${product.price}</h4>
                    </div>
                    <a href="#"><button class="product__btn">Add To Cart</button></a>
                </div>
                <ul>
                    <li>
                        <a href="#" data-tip="Quick View" data-place="left">
                            <svg>
                                <use xlink:href="images/sprite.svg#icon-eye"></use>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" data-tip="Add To Wishlist" data-place="left">
                            <svg>
                                <use xlink:href="images/sprite.svg#icon-heart-o"></use>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" data-tip="Add To Compare" data-place="left">
                            <svg>
                                <use xlink:href="images/sprite.svg#icon-loop2"></use>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        `
    );
    displayProduct = displayProduct.join("");
    if (catCenter) {
        catCenter.innerHTML = displayProduct;
    }
};

/* Filter */
const filterBtn = document.querySelectorAll(".filter-btn"); // lay tung title filter
const catContainer = document.getElementById("category"); // section chua list Product

if (catContainer) {
    catContainer.addEventListener("click", async e => {
        const target = e.target.closest(".section__title"); //add event cho section__title
        if (!target)
            return;

        const id = target.dataset.id; //lay data-id cua section__title
        const products = await getProducts(); //get JSON san pham

        if (id) {
            //remove active from buttons
            Array.from(filterBtn).forEach(btn => {
                btn.classList.remove("active"); //xoa tat ca nut boi den
            });
            target.classList.add("active"); //boi den nut chon

            //Load Products
            let menuCategory = products.filter(product => {
                if (product.category === id) {
                    return product;
                }
            });

            if (id === "All Products") {
                displayProductItems(products);
            } else {
                displayProductItems(menuCategory);
            }
        }
    });
}