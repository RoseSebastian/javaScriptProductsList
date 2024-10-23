let products = [];
var container = document.getElementById("productContainer");

let displayProducts = (list) => {
  var productlist = document.createElement("div");
  productlist.id = "productList";
  productlist.className = "row gy-3 gx-3";
  list.forEach((item) => {
    var el = document.createElement("div");
    el.className = "col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3";
    const content = `
          <div class="card">
              <img src="${item.image}" class="card-img-top item-image">
              <div class="card-body">
                  <h5 class="card-title title">${item.title}</h5>
                  <p class="text-success">${item.price}</p>
                  <p class="card-text text">${item.description}</p>
              </div>
          </div>
      `;
    el.innerHTML = content;
    productlist.appendChild(el);
  });
  container.appendChild(productlist);
};

$(document).ready(function () {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      products = json;
      displayProducts(products);
    });
});
