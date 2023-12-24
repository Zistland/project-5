// GET ONE PRODUCT BASED ON THE ID

async function fetchProduct(productId) {
    try {
        const response = await fetch(`http://127.0.0.1:3000/api/products/${productId}`);
        console.log(response)
        const productObject = await response.json();
  
        console.log("PRODUCT: ", productObject);
  
        const img = document.createElement('img');
        img.alt = productObject.altTxt;
        img.src = productObject.imageUrl;
        img.id = 'item__img';
        img.style.width = '100%';
        img.style.objectFit = 'fit';
  
        const imgDiv = document.getElementById('item__img'); // Corrected the target element
  
        imgDiv.appendChild(img);
  
        const h3 = document.createElement('h3');
        h3.id = 'productName';
        h3.innerText = productObject.name;
  
        const price = document.getElementById('price');
        price.innerText = productObject.price;
  
        const description = document.getElementById('description');
        description.innerHTML = productObject.description;
  
        const value = document.getElementById('color-select');
        value.innerHTML = ''; // Clear previous options
  
        productObject.colors.forEach(color => {
            const optionTag = document.createElement('option');
            optionTag.value = color;
            optionTag.innerText = color;
            value.appendChild(optionTag);
        });
  
        return productObject;
    } catch (error) {
        console.error("Error fetching product:", error);
    }
  }
  
  // Use URLSearchParams to get the parameter values
  const url = new URL(window.location.href);
  const productID = url.searchParams.get('id');
  const productName = url.searchParams.get('name');
  const productImg = url.searchParams.get('imgSrc');
  
  function getCartFromStorage() {
    try {
        const sessionCart = sessionStorage.getItem("cart");
        return JSON.parse(sessionCart) || [];
    } catch (err) {
        console.warn("No data in cart: ", err);
        return [];
    }
  }
  
  const submitButton = document.getElementById('addToCart');
  let cart = getCartFromStorage();
  displayCart();
  
  function addToCart({ productID, selectedPrice, selectedColor, selectedQuantity, name, imageUrl }) {
    const product = { productID, selectedPrice, selectedColor, selectedQuantity, name, imageUrl };
    cart.push(product);
    const serializedObject = JSON.stringify(cart);
    sessionStorage.setItem("cart", serializedObject);
    displayCart();
  }
  
  function displayCart() {
    const cartList = document.getElementById('item__content');
    cartList.innerHTML = '';
  
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.productID} - ${Number(item.selectedPrice).toFixed(2)}`;
        cartList.appendChild(listItem);
    });
  }
  
  fetchProduct(productID);
  
  submitButton.addEventListener('click', () => {
    const colorSelect = document.getElementById('color-select');
    const selectedColor = colorSelect.options[colorSelect.selectedIndex].text;
  
    const priceElement = document.getElementById('price');
    const selectedPrice = priceElement.innerText; // Use innerText instead of textContent
  
    const quantityInput = document.getElementById('itemQuantity');
    const selectedQuantity = quantityInput.value;
  
    const url = new URL(window.location.href);
    const name = url.searchParams.get('name');
    const imageUrl = url.searchParams.get('imgSrc');
  
  
    addToCart({ productID, selectedPrice, selectedColor,selectedQuantity, name, imageUrl: imageUrl });
  
    console.log(submitButton.dataset);
  });
  
  
  
  
  
  
  
  