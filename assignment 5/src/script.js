/*global products*/
/* Add any JavaScript you need to this file.
 *
 *   Name: Dhruv Bipinbhai Patel
 *   Student#: 142572197
 *   Email: dbpatel31@myseneca.ca
 */

function filterSelection(c) {
  var allproducts = document.getElementsByClassName('product_f');
  var featuredproducts = document.getElementsByClassName('featured_f');
  var menproducts = document.getElementsByClassName('men_f');
  var womenproducts = document.getElementsByClassName('women_f');
  if (c === 'all') {
    for (let i = 0; i < allproducts.length; i++) {
      allproducts[i].classList.add('show');
    }
  } else if (c === 'featured_f') {
    for (let i = 0; i < allproducts.length; i++) {
      allproducts[i].classList.remove('show');
    }
    for (let i = 0; i < featuredproducts.length; i++) {
      featuredproducts[i].classList.add('show');
    }
  } else if (c === 'men_f') {
    for (let i = 0; i < allproducts.length; i++) {
      allproducts[i].classList.remove('show');
    }
    for (let i = 0; i < menproducts.length; i++) {
      menproducts[i].classList.add('show');
    }
  } else if (c === 'women_f') {
    for (let i = 0; i < allproducts.length; i++) {
      allproducts[i].classList.remove('show');
    }
    for (let i = 0; i < womenproducts.length; i++) {
      womenproducts[i].classList.add('show');
    }
  }
}

window.addEventListener('load', function() {
  var featuredProducts = products.featured;
  for (var p = 0; p < featuredProducts.length; p++) {
    document.getElementsByClassName('products-center')[0].innerHTML +=
      "<article class='product featured'><div class='img-container'><img src='" +
      featuredProducts[p].imageUrl +
      "' alt='product' class='product-img'><button class='bag-btn' data-id=${product.id}><i class='fa fa-shopping-cart'></i>add to cart</button></div><h3>" +
      featuredProducts[p].name +
      '</h3><h4>$' +
      featuredProducts[p].price +
      '</h4></article>';
  }
  var menProducts = products.men;
  for (var m = 0; m < menProducts.length; m++) {
    document.getElementsByClassName('products-men')[0].innerHTML +=
      "<article class='product men'><div class='img-container'><img src='" +
      menProducts[m].imageUrl +
      "' alt='product' class='product-img'><button class='bag-btn' data-id=${product.id}><i class='fas fa-shopping-cart'></i>add to cart</button></div><h3>" +
      menProducts[m].name +
      '</h3><h4>$' +
      menProducts[m].price +
      '</h4></article>';
  }
  var womenProducts = products.women;
  for (var w = 0; w < womenProducts.length; w++) {
    document.getElementsByClassName('products-women')[0].innerHTML +=
      "<article class='product women'><div class='img-container'><img src='" +
      womenProducts[w].imageUrl +
      "' alt='product' class='product-img'><button class='bag-btn' data-id=${product.id}><i class='fas fa-shopping-cart'></i>add to cart</button></div><h3>" +
      womenProducts[w].name +
      '</h3><h4>$' +
      womenProducts[w].price +
      '</h4></article>';
  }

  for (let p = 0; p < featuredProducts.length; p++) {
    if (p < featuredProducts.length) {
      document.getElementsByClassName('allcategory')[0].innerHTML +=
        "<article class='product_f featured_f'><div class='img-container'><img src='" +
        featuredProducts[p].imageUrl +
        "' alt='product' class='product-img'><button class='bag-btn' data-id=${product.id}><i class='fa fa-shopping-cart'></i>add to cart</button></div><h3>" +
        featuredProducts[p].name +
        '</h3><h4>$' +
        featuredProducts[p].price +
        '</h4></article>';
    }
  }
  for (let m = 0; m < menProducts.length; m++) {
    if (m < menProducts.length) {
      document.getElementsByClassName('allcategory')[0].innerHTML +=
        "<article class='product_f men_f'><div class='img-container'><img src='" +
        menProducts[m].imageUrl +
        "' alt='product' class='product-img'><button class='bag-btn' data-id=${product.id}><i class='fas fa-shopping-cart'></i>add to cart</button></div><h3>" +
        menProducts[m].name +
        '</h3><h4>$' +
        menProducts[m].price +
        '</h4></article>';
    }
  }
  for (let w = 0; w < womenProducts.length; w++) {
    if (w < womenProducts.length) {
      document.getElementsByClassName('allcategory')[0].innerHTML +=
        "<article class='product_f women_f'><div class='img-container'><img src='" +
        womenProducts[w].imageUrl +
        "' alt='product' class='product-img'><button class='bag-btn' data-id=${product.id}><i class='fas fa-shopping-cart'></i>add to cart</button></div><h3>" +
        womenProducts[w].name +
        '</h3><h4>$' +
        womenProducts[w].price +
        '</h4></article>';
    }
  }
  filterSelection('all');
  var btnContainer = document.getElementById('categorylist');
  var btns = btnContainer.getElementsByClassName('btn');
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
      var current = document.getElementsByClassName('active');
      current[0].className = current[0].className.replace(' active', '');
      this.className += ' active';
    });
  }
});
