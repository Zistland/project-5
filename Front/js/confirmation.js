
// Create a link with a URI parameter:



const confirmation = document.getElementsByClassName('confirmation');
const orderId = document.getElementById('orderId');

const url = new URL(window.location.href);
const orderIdText = url.searchParams.get('orderId');
orderId.innerText = orderIdText;




// confrimation link




//postRequest();

// Define the validateAndSubmit function
function validateAndSubmit() {
  // Your validation logic here
  // For demonstration purposes, assume the form is valid
  let formIsValid =true;

  if (formIsValid) {
    // Redirect to the confirmation page

    window.location.href = 'confirmation.html?orderId=fd8f7d40-9bfb-11ee-8657-63c8872c941c';
    const orderId = url.searchParams.get('orderId');
    return orderId;
  } else {
    // Handle invalid form case, show error messages, etc.
    console.log('Form is not valid. Please check input fields.');
  }
}


























//ERROR MESSAGE:


/* const formErrMessageList = Object.keys(formData).reduce((acc, formKey) => {
    if (formKey !== 'email' && formData[formKey].length < 4) {
      return { ...acc, [formKey]: `${formKey} must have more than 4 characters` };
    } else if (!formData[formKey].includes('@') && !formData[formKey].includes('.com')) {
      return { ...acc, [formKey]: 'invalid email address' };
    }
    return acc;
  }, {});
  
  function validateAndSubmit() {
    // Your validation logic here
    // For demonstration purposes, assume the form is valid
    let formIsValid =true;
  
    if (formIsValid) {
      // Redirect to the confirmation page
      window.location.href = 'confirmation.html?orderId=fd8f7d40-9bfb-11ee-8657-63c8872c941c';
      return orderId;
    } else {
      // Handle invalid form case, show error messages, etc.
      console.log('Form is not valid. Please check input fields.');
    }
  }
  






  //PRODUCT JAVASCRIPT COMMENTED:


  /* Async function to fetch product data from the server based on the provided productId
async function fetchProduct(productId) {
  try {
      // Fetch product data using the productId in the URL
      const response = await fetch(`http://127.0.0.1:3000/api/products/${productId}`);
      
      // Log the raw response object to the console
      console.log(response);

      // Convert the response to a JSON object
      const productObject = await response.json();

      // Log the fetched product data to the console
      console.log("PRODUCT: ", productObject);

      // Create an HTML img element dynamically
      const img = document.createElement('img');
      img.alt = productObject.altTxt;
      img.src = productObject.imageUrl;
      img.id = 'item__img';
      img.style.width = '100%';
      img.style.objectFit = 'fit';

      // Find the HTML element with the id 'item__img'
      const imgDiv = document.getElementById('item__img'); // Corrected the target element

      // Append the dynamically created image to the imgDiv element
      imgDiv.appendChild(img);

      // Create an HTML h3 element dynamically
      const h3 = document.createElement('h3');
      h3.id = 'productName';
      h3.innerText = productObject.name;

      // Find the HTML element with the id 'price'
      const price = document.getElementById('price');

      // Set the text content of the price element to the productObject's price
      price.innerText = productObject.price;

      // Find the HTML element with the id 'description'
      const description = document.getElementById('description');

      // Set the inner HTML content of the description element to the productObject's description
      description.innerHTML = productObject.description;

      // Find the HTML element with the id 'color-select'
      const value = document.getElementById('color-select');

      // Clear previous options in the color-select element
      value.innerHTML = '';

      // Iterate over the colors in the productObject and dynamically create option elements for each color
      productObject.colors.forEach(color => {
          const optionTag = document.createElement('option');
          optionTag.value = color;
          optionTag.innerText = color;
          value.appendChild(optionTag);
      });

      // Return the productObject
      return productObject;
  } catch (error) {
      // Handle errors that may occur during the execution of the try block
      console.error("Error fetching product:", error);
  }
}

// Use URLSearchParams to get the parameter values from the current URL
const url = new URL(window.location.href);
const productID = url.searchParams.get('id');
const productName = url.searchParams.get('name');
const productImg = url.searchParams.get('imgSrc');

// Function to retrieve cart data from sessionStorage
function getCartFromStorage() {
  try {
      // Attempt to get the 'cart' item from sessionStorage
      const sessionCart = sessionStorage.getItem("cart");

      // Parse the stored JSON data, or return an empty array if parsing fails or if the 'cart' item is not present
      return JSON.parse(sessionCart) || [];
  } catch (err) {
      // Log a warning if there's an error retrieving or parsing the cart data
      console.warn("No data in cart: ", err);

      // Return an empty array in case of an error
      return [];
  }
}

// Get the submit button element by its ID
const submitButton = document.getElementById('addToCart');

// Initialize the 'cart' array from sessionStorage and display it on the webpage
let cart = getCartFromStorage();
displayCart();

// Function to add a product to the cart
function addToCart({ productID, selectedPrice, selectedColor, selectedQuantity, name, imageUrl }) {
  // Create a product object from the provided data
  const product = { productID, selectedPrice, selectedColor, selectedQuantity, name, imageUrl };

  // Add the product to the 'cart' array
  cart.push(product);

  // Convert the updated 'cart' array to a JSON string
  const serializedObject = JSON.stringify(cart);

  // Store the serialized 'cart' data in sessionStorage
  sessionStorage.setItem("cart", serializedObject);

  // Update and display the cart on the webpage
  displayCart();
}

// Function to display the cart on the webpage
function displayCart() {
  // Find the HTML element with the id 'item__content'
  const cartList = document.getElementById('item__content');

  // Clear the inner HTML of the 'cartList' element
  cartList.innerHTML = '';

  // Iterate over each item in the 'cart' array and create a list item for each
  cart.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.productID} - ${Number(item.selectedPrice).toFixed(2)}`;
      cartList.appendChild(listItem);
  });
}

// Fetch product data using the productID obtained from the URL
fetchProduct(productID);

// Event listener for the submit button
submitButton.addEventListener('click', () => {
  // Get the selected color from the 'color-select' dropdown
  const colorSelect = document.getElementById('color-select');
  const selectedColor = colorSelect.options[colorSelect.selectedIndex].text;

  // Get the displayed price from the 'price' element
  const priceElement = document.getElementById('price');
  const selectedPrice = priceElement.innerText; // Use innerText instead of textContent

  // Get the selected quantity from the 'itemQuantity' input
  const quantityInput = document.getElementById('itemQuantity');
  const selectedQuantity = quantityInput.value;

  // Obtain additional data from the URL
  const url = new URL(window.location.href);
  const name = url.searchParams.get('name');
  const imageUrl = url.searchParams
});

CART JAVASCRIPT COMMENTED :

/*
// Function to retrieve cart data from sessionStorage
function getCartFromStorage() {
  try {
    // Get cart data from sessionStorage and parse it as JSON
    const sessionCart = sessionStorage.getItem("cart"); // get it as text
    return JSON.parse(sessionCart) || []; // transform to JSON / JavaScript object
  } catch (err) {
    // Log a warning if there is an error retrieving or parsing cart data
    console.warn("No data in cart: ", err);
  }
}

// Log a welcome message to the console
console.log("WELCOME TO MY CART PAGE");

// Function to extract value from an event
function extractValue(event) {
  // Log the changed value of the input field
  console.log("My changed value: ", event.currentTarget.value);
}

// Function to execute a callback after a timeout
function onTimeout(callback) {
  // Set a timeout of 2000 milliseconds and then invoke the callback
  setTimeout(() => {
    callback(true);
  }, 2000);
}

// Function to destroy an error banner
function destroyErrorBanner() {
  // Get the error banner element by its ID
  const errorBanner = document.getElementById('error-banner');
  // Remove the error banner from its parent node
  errorBanner.parentNode.removeChild(errorBanner);
}

// Function to display an error message based on a status code
function displayError(errorCode) {
  // Initialize an empty error message
  let errorMessage = '';
 
  // Define error messages for different status codes
  const errorMessages = {
    400: 'Product Not Found',
    500: 'Internal Server Error: Contact Support for Help',
  };

  // Default status code for retrieval
  let statusCodeRetrieve = 500;

  // Determine the appropriate status code for retrieval based on the provided error code
  if (errorCode >= 400 && errorCode < 500) {
    statusCodeRetrieve = 400;
  } else if (errorCode >= 500) {
    statusCodeRetrieve = 500;
  }
  // Log the original error code and the determined status code for retrieval
  console.log(errorCode, statusCodeRetrieve);

  // Check if the provided status code has a corresponding message
  errorMessage = errorCode + ' ' + errorMessages[statusCodeRetrieve];

  // Get the error container element by its ID
  const errorContainer = document.getElementById('serverErrorMessage');
  // Set the error message as the text content of the error container
  errorContainer.innerText = errorMessage;
  // Display the error container
  errorContainer.style.display = 'block';

  // Append the error container to the body and set a timeout to hide it after 2 seconds
  onTimeout(() => {
    errorContainer.innerText = '';
    errorContainer.style.display = 'none';
  });
}


// Set the value of `value` to either the function `extractValue` or `extract`
const value = extractValue || extract;

// Add an event listener for the 'change' event on the element with the ID 'firstName'
document.getElementById('firstName').addEventListener('change', extractValue);

// Assign the function `extractValue` to the 'onchange' property of the element with the ID 'lastName'
document.getElementById('lastName').onchange = extractValue;

// Assign the function `extractValue` to the 'onchange' property of the element with the ID 'email'
document.getElementById('email').onchange = extractValue;

// Assign the function `extractValue` to the 'onchange' property of the element with the ID 'city'
document.getElementById('city').onchange = extractValue;

// Assign the function `extractValue` to the 'onchange' property of the element with the ID 'address'
document.getElementById('address').onchange = extractValue;

// TODO: Event that will print all form values on button click / submit
document.getElementById('email').onsubmit = function () {
  // Get values from form elements and log them
  let firstNameValue = document.getElementById('email').innerText;
  let lastNameValue = document.getElementById('email').innerText;
  let emailValue = document.getElementById('email').innerText;

  console.log('Submit these:', { firstNameValue, lastNameValue, emailValue });
}

// Define an object `userData` with default values
const userData = {
  firstName: '',
  name: '',
  address: '',
  city: '',
  email: 'john.doe@example.com',
};

// Get the 'order' button element by its ID
const submitButton = document.getElementById('order');

// Initialize an empty array `cart`
let cart = [];
try {
  // Serialize the object to a JSON string and store it in sessionStorage
  const serializedUserData = JSON.stringify(userData);
  sessionStorage.setItem('userData', serializedUserData);

  // Retrieve and parse the serialized data from sessionStorage
  const storedSerializedUserData = sessionStorage.getItem('userData');
  const parsedUserData = JSON.parse(storedSerializedUserData);
} catch (err) {
  // Log a warning if there is an error
  console.warn("No data in cart: ", err);
}

// Get cart data from storage
cart = getCartFromStorage();

// Function to display cart products
function displayCartProducts() {
  // Get the cart section element by its ID
  const cartSection = document.getElementById('cart__items');
  let total = 0;

  // Iterate over each product in the cart
  cart.forEach(product => {
    // Log product information
    console.log(product);

    // Calculate total based on quantity and price
    total += Number(product.totalQuantity) * Number(product.totalPrice);

    // Create an article element for each product
    const articleItem = document.createElement('article');
    articleItem.className = 'cart__item';
    articleItem['data-id'] = product.id;
    articleItem['data-color'] = product.color;

    // Handle image container creation
    const imgContainer = document.createElement('div');
    imgContainer.className = 'cart__item__img';
    const imgItem = document.createElement('img');
    imgItem.src = product.imageUrl;
    imgItem.alt = `Photo of a ${product.name} sofa`;
    imgContainer.appendChild(imgItem);

    articleItem.appendChild(imgContainer);

    // Create content container
    const contentContainer = document.createElement('div');
    contentContainer.className = 'cart__item__content';

    // Create description container
    const descriptionContainer = document.createElement('div');
    descriptionContainer.className = 'cart__item__content__description';
    const heading = document.createElement('h2');
    heading.innerText = product.name;
    const colorParagraph = document.createElement('p');
    colorParagraph.innerText = product.selectedColor; // TODO: might be selected color
    const priceParagraph = document.createElement('p');
    priceParagraph.innerText = product.selectedPrice;

    descriptionContainer.appendChild(heading);
    descriptionContainer.appendChild(colorParagraph);
    descriptionContainer.appendChild(priceParagraph);
    contentContainer.appendChild(descriptionContainer);

    // Create settings container
    const cart__item__content__settings = document.createElement('div');
    cart__item__content__settings.className = 'cart__item__content__settings';

    // Create quantity container
    const cart__item__content__settings__quantity = document.createElement('div');
    cart__item__content__settings__quantity.className = 'cart__item__content__settings__quantity';
    const quantityParagraph = document.createElement('p');
    quantityParagraph.innerText = 'Quantity :';
    const itemQuantityInput = document.createElement('input');

    // Add event listener for quantity change
    itemQuantityInput.addEventListener('change', (ev) => {
      console.log('itemQuantity: ', ev.target.value);
      console.log('cart: ', cart);

      // Update cart data based on quantity change
      let cartQuantity = 0;
      let cartTotal = 0;

      const updatedCart = cart.map((cartElement) => {
        if (cartElement.productID === product.productID) {
          cartElement.selectedQuantity = ev.target.value;
        }
        return cartElement;
      });

      updatedCart.forEach((item) => {
        cartTotal = cartTotal + (Number(item.selectedQuantity) * Number(item.selectedPrice));
        cartQuantity = cartQuantity + Number(item.selectedQuantity);
      });

      // Update total quantity and total price elements
      const totalQuantity = document.getElementById('totalQuantity');
      totalQuantity.textContent = cartQuantity;

      const totalPrice = document.getElementById('totalPrice');
      totalPrice.textContent = cartTotal;
    });

    // Set initial value for quantity input
    itemQuantityInput.value = product.selectedQuantity;
    cart__item__content__settings__quantity.appendChild(quantityParagraph);
    cart__item__content__settings__quantity.appendChild(itemQuantityInput);

    // Create delete container
    const deleteContainer = document.createElement('div');
    deleteContainer.className = 'cart__item__content__settings__delete';
    const deleteSpan = document.createElement('span');
    deleteSpan.className = 'deleteItem';
    deleteSpan.innerText = 'Delete';

    // Add click event listener for delete
    deleteSpan.addEventListener('click', () => {
      console.log('delete: ', product.name);
      const totalPrice = document.getElementById('totalPrice');
      totalPrice.textContent = cartTotal;
    });

    deleteContainer.appendChild(deleteSpan);
    cart__item__content__settings.appendChild(cart__item__content__settings__quantity);
    cart__item__content__settings.appendChild(deleteContainer);

    // Append elements to the article
    articleItem.appendChild(contentContainer);
    articleItem.appendChild(cart__item__content__settings);

    // Get the cart items section and append the article
    const articleListSection = document.getElementById('cart__items');
    articleListSection.appendChild(articleItem);
  });

  // Log cart information
  console.log(cart, cartQuantity, cartQuantity);
}

// Call the function to display cart products
displayCartProducts();

// Initialize variables for total quantity and total price
let cartQuantity = 0;
let cartTotal = 0;

// Calculate total quantity and total price based on cart data
cart.forEach((item) => {
  cartTotal = cartTotal + (Number(item.selectedQuantity) * Number(item.selectedPrice));
  cartQuantity = cartQuantity + Number(item.selectedQuantity);
});

// Update total quantity and total price elements
const totalQuantity = document.getElementById('totalQuantity');
totalQuantity.textContent = cartQuantity;

const totalPrice = document.getElementById('totalPrice');
totalPrice.textContent = cartTotal;

// Log cart information
console.log(cart, cartQuantity, cartQuantity);

// Function to retrieve form data
function getData(form) {
  // Create a new FormData object using the provided form
  let formData = new FormData(form);

  // Iterate over form data entries and log them
  for (let pair of formData.entries()) {
    console.log(pair[0] + ": " + pair[1]);
  }

  // Convert FormData to an object and log it
  console.log(Object.fromEntries(formData));
  // Return the object representation of FormData
  return Object.fromEntries(formData);
}

// Get the submit button by its ID and add a submit event listener
const submitBtn = document.getElementById('cart__order__form').addEventListener('submit', (ev) => {
  // Prevent the default form submission
  ev.preventDefault();

  // Get form data using the getData function
  const formData = getData(ev.currentTarget);
  console.log("formData:", formData);

  // Validate form data and create a list of error messages
  const formErrMessageList = Object.keys(formData).reduce((acc, formKey) => {
    // Check if the 'name' field has fewer than 4 characters
    if (formKey === 'name' && formData[formKey].length < 4) {
      return { ...acc, [formKey]: `${formKey} must have more than 4 characters` };
    } else if (formKey === 'email' && (!formData[formKey].includes('@') || !formData[formKey].includes('.com'))) {
      // Check if the 'email' field is invalid
      return { ...acc, [formKey]: 'invalid email address' };
    }

    // Add more conditions for other fields as needed
    return acc;
  }, {});

  // Log the list of error messages
  console.log(formErrMessageList);

  // Text fields validation: Display error messages for each field
  Object.keys(formErrMessageList).forEach(formKey => {
    const errorParagraph = document.getElementById(`${formKey}ErrorMsg`);
    errorParagraph.innerText = formErrMessageList[formKey];
  });

  // TODO: If email is not valid, show meaningful errors to the right InputDeviceInfo

  // TODO: If the form is valid, make a server request

  // Function to get activity asynchronously
  const getActivity = async () => {
    // Get JSON data by checking user hosting status
    let jsonData = await activitiesActions.checkUserHosting(theEmail);
    // Now you can directly use jsonData
  };

  // TODO: Fix this back
  // Make a server request to submit the order
  fetch(`http://127.0.0.1:3000/api/products/order`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "contact": formData,
      "products": cart.map(product => product.productID)
    })
  }).then(data => {
    console.log(data);

    // Successful response - Order done on the server
    if (data.status >= 200 && data.status <= 300) {
      return data.json();
    }
    // Unsuccessful response
    else {
      if (data.status >= 400 && data.status <= 500) {
        // Display error for status codes between 400 and 500
        displayError(data.status);
        // TODO: Uncomment the following line after implementing onTimeout and destroyErrorBanner functions
        // onTimeout(destroyErrorBanner());
      }
    }
  }).then(jsonData => {
    console.log(jsonData);
    // TODO: Redirect to confirmation page or handle successful response
    // window.location.href = `confirmation.html?orderId=${jsonData.orderId}`;
  });
});


// Get the error message element for the 'firstName' field
const firstNameErrorMsg = document.getElementById('firstNameErrorMsg');
// Create a new paragraph element
const newParagraph = document.createElement('p');
// Set the text content of the new paragraph
newParagraph.textContent = 'new content';

// Clear the existing error message content for 'firstName' field
firstNameErrorMsg.innerText = '';

// Add an event listener to the 'submit' event of the 'order' element
document.getElementById('order').addEventListener("submit", () => {
  // Check the validity of the 'firstName' input
  if (firstNameInput.checkValidity()) {
    // Log a message if the form can be submitted
    console.log('Form can be submitted!');
  }
});

// Continue the chain after the fetch request
}).then(jsonData => {
  // Log the received JSON data
  console.log(jsonData);

  // TODO: Uncomment the following line to redirect to the confirmation page
  // window.location.href = `confirmation.html?orderId=${jsonData.orderId}`;
});

// Select all elements with the class 'js-delete-link' and add event listeners
document.querySelectorAll('.js-delete-link').forEach((link) => {
  // Add a click event listener to each link
  link.addEventListener('click', () => {
    // Extract the productId from the link's CDATA_SECTION_NODE
    const productId = link.CDATA_SECTION_NODE.productId;
    // Call removeFromcart function with the productId
    removeFromcart(productId);
    // Log the updated cart and a message
    console.log(cart);
    console.log('delete');
  });
});

// Function to remove an item from the cart based on productId
function removeFromcart() {
  // Create a new empty cart array
  const newCart = [];

  // Iterate over each item in the cart
  cart.forEach((cartItem) => {
    // Check if the current item's productId is not equal to the provided productId
    if (cartItem.productId !== productId) {
      // Push the item to the newCart array
      newCart.push(cartItem);
    }
  });

  // Update the cart with the newCart array
  cart = newCart;
}

// Function to make a post request with orderData (not implemented)
const postRequest = (orderData) => {
  // Your implementation here
};

// TODO: Uncomment the following line to make the post request
// postRequest();

// Define the validateAndSubmit function
function validateAndSubmit() {
  // Your validation logic here

  // For demonstration purposes, assume the form is valid
  let formIsValid = true;

  // Check if the form is valid
  if (formIsValid) {
    // Redirect to the confirmation page
    window.location.href = 'confirmation.html?orderId=fd8f7d40-9bfb-11ee-8657-63c8872c941c';
    // Get the orderId from the URL
    const orderId = url.searchParams.get('orderId');
    // Return the orderId
    return orderId;
  } else {
    // Handle invalid form case, show error messages, etc.
    console.log('Form is not valid. Please check input fields.');
  }
}
*/
