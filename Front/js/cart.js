
function getCartFromStorage() {


  try {
    // Array to store cart items
    const sessionCart = sessionStorage.getItem("cart") // get it as text
    return JSON.parse(sessionCart) || []; // transform to json / javasacript object}
  } catch (err) {
    console.warn("Not data in cart: ", err);
  }
}
console.log("WELCOME TO MY CART PAGE")


function extractValue(event) {
  console.log("My changed value: ", event.currentTarget.value)
}

function onTimeout(callback) {
  setTimeout(() => {
    callback(true);
  }, 2000);
}

function destroyErrorBanner() {
  const errorBanner = document.getElementById('error-banner');
  errorBanner.parentNode().removeChild(errorBanner);
}

function displayError(errorCode) {

  let errorMessage = '';
 
  // Define error messages for different status codes
  const errorMessages = {
    400: 'Product Not Found',
    500: 'Internal Server Error:Contact Support for Help',

  };

  let statusCodeRetrieve = 500;

  if (errorCode >= 400 && errorCode < 500) {
    statusCodeRetrieve = 400;
  } else if (errorCode >= 500) {
    statusCodeRetrieve = 500;
  }
  console.log(errorCode, statusCodeRetrieve)
  // Check if the provided status code has a corresponding message

  errorMessage = errorCode + ' ' + errorMessages[statusCodeRetrieve];

  // Create a new div element
  const errorContainer = document.getElementById('serverErrorMessage');
  errorContainer.innerText = errorMessage;
  errorContainer.style.display = 'block';



  // Append the error container to the body
  onTimeout(() => {
    errorContainer.innerText = '';
    errorContainer.style.display = 'none';
  })
}

const value = extractValue || extract

document.getElementById('firstName').addEventListener('change', extractValue)

document.getElementById('lastName').onchange = extractValue

document.getElementById('email').onchange = extractValue

document.getElementById('city').onchange = extractValue

document.getElementById('address').onchange = extractValue





// TODO: Event that will print all forms values on button click / submit
document.getElementById('email').onsubmit = function () {
  let firstNameValue = document.getElementById('email').innerText;
  let lastNameValue = document.getElementById('email').innerText;
  let emailValue = document.getElementById('email').innerText;

  console.log('Submit these:', { firstNameValue, lastNameValue, emailValue })

}



const userData = {
  firstName: '',
  name: '',
  address: '',
  city: '',
  email: 'john.doe@example.com',
};



const submitButton = document.getElementById('order');

let cart = [];
try {
  // Serialize the object to a JSON string
  const serializedUserData = JSON.stringify(userData);

  // Store the serialized data in sessionStorage
  sessionStorage.setItem('userData', serializedUserData);

  // Retrieve the serialized data from sessionStorage
  const storedSerializedUserData = sessionStorage.getItem('userData');

  // Parse the serialized data back into a JavaScript object
  const parsedUserData = JSON.parse(storedSerializedUserData);
} catch (err) {
  console.warn("Not data in cart: ", err);
}


cart = getCartFromStorage()


function displayCartProducts() {
  const cartSection = document.getElementById('cart__items');
  let total = 0;
  cart.forEach(product => {
    // price
    // quantity
    // we want to have them in cart
    // call them & print them
    //const prices = items.map(el => el.selectedPrice)

    //const pricesWithQuantity = items.map(el => Number(el.selectedPrice) * Number(el.selectedQuantity))


    //const total = pricesWithQuantity.reduce((acc, reducer) => { return acc + reducer }, 0);


    console.log(product);

    total += Number(product.totalQuantity) * Number(product.totalPrice);


    // Add each sofa element to our order list to display
    const articleItem = document.createElement('article');
    articleItem.className = 'cart__item';
    articleItem['data-id'] = product.id;
    articleItem['data-color'] = product.color;

    // Handle img container creation
    const imgContainer = document.createElement('div');
    imgContainer.className = 'cart__item__img';
    const imgItem = document.createElement('img');
    imgItem.src = product.imageUrl;
    imgItem.alt = `Photo of a ${product.name} sofa`;
    imgContainer.appendChild(imgItem);

    articleItem.appendChild(imgContainer);


    const contentContainer = document.createElement('div');
    contentContainer.className = 'cart__item__content';


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




    const cart__item__content__settings = document.createElement('div');

    cart__item__content__settings.className = 'cart__item__content__settings';
    const cart__item__content__settings__quantity = document.createElement('div');
    cart__item__content__settings__quantity.className = 'cart__item__content__settings__quantity';
    const quantityParagraph = document.createElement('p');
    quantityParagraph.innerText = 'Quantity :';
    const itemQuantityInput = document.createElement('input')
    itemQuantityInput.addEventListener('change', (ev) => {
      console.log('itemQuantity: ', ev.target.value)
      console.log('cart: ', cart)
      let cartQuantity = 0;
      let cartTotal = 0;

      const updatedCart = cart.map((cartElement) => {
        if (cartElement.productID === product.productID) {
          cartElement.selectedQuantity = ev.target.value;
        }
        return cartElement
      })

      updatedCart.forEach((item) => {
        cartTotal = cartTotal + (Number(item.selectedQuantity) * Number(item.selectedPrice));
        cartQuantity = cartQuantity + Number(item.selectedQuantity);
      });


      const totalQuantity = document.getElementById('totalQuantity');
      totalQuantity.textContent = cartQuantity;

      const totalPrice = document.getElementById('totalPrice');
      totalPrice.textContent = cartTotal;
    })
    itemQuantityInput.value = product.selectedQuantity;
    cart__item__content__settings__quantity.appendChild(quantityParagraph);
    cart__item__content__settings__quantity.appendChild(itemQuantityInput);


    const deleteContainer = document.createElement('div');
    deleteContainer.className = 'cart__item__content__settings__delete';
    const deleteSpan = document.createElement('span');
    deleteSpan.className = 'deleteItem';
    deleteSpan.innerText = 'Delete';
    deleteSpan.addEventListener('click', () => {
      console.log('delete: ', product.name);
      const totalPrice = document.getElementById('totalPrice');
      totalPrice.textContent = cartTotal;
     
    })


    deleteContainer.appendChild(deleteSpan);

    cart__item__content__settings.appendChild(cart__item__content__settings__quantity);
    cart__item__content__settings.appendChild(deleteContainer);


    articleItem.appendChild(contentContainer);
    articleItem.appendChild(cart__item__content__settings);

    const articleListSection = document.getElementById('cart__items');

    articleListSection.appendChild(articleItem)



  })
}

displayCartProducts();


let cartQuantity = 0;
let cartTotal = 0;

cart.forEach((item) => {
  cartTotal = cartTotal + (Number(item.selectedQuantity) * Number(item.selectedPrice));
  cartQuantity = cartQuantity + Number(item.selectedQuantity);
});


const totalQuantity = document.getElementById('totalQuantity');
totalQuantity.textContent = cartQuantity;

const totalPrice = document.getElementById('totalPrice');
totalPrice.textContent = cartTotal;




console.log(cart, cartQuantity, cartQuantity);




// we need to display the date from storage into the cart page
// the view generated needs too look like this

//<!-- <article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
/*<div class="cart__item__img">
<img src="../images/product01.jpg" alt="Photo of a sofa"> </img>
</div>
<div class="cart__item__content">
<div class="cart__item__content__description">
  <h2>Name of the product</h2>
  <p>Green</p>
  <p>€42.00</p>
</div>
<div class="cart__item__content__settings">
  <div class="cart__item__content__settings__quantity">
    <p>Quantity : </p>
    <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42"> </input>
  </div>
  <div class="cart__item__content__settings__delete">
    <p class="deleteItem">Delete</p>
  </div>
</div>
</div>
</article>-->*/

function getData(form) {
  let formData = new FormData(form);

  for (let pair of formData.entries()) {
    console.log(pair[0] + ": " + pair[1]);
  }

  console.log(Object.fromEntries(formData));
  return Object.fromEntries(formData);
}


const submitBtn = document.getElementById('cart__order__form').addEventListener('submit', (ev) => {
  // Your data object
  ev.preventDefault();

  const formData = getData(ev.currentTarget);
  console.log("formData:", formData)
  
  const formErrMessageList = Object.keys(formData).reduce((acc, formKey) => {


    if (formKey === 'name' && formData[formKey].length < 4) {
      return { ...acc, [formKey]: `${formKey} must have more than 4 characters` };
    } else if (formKey === 'email' && (!formData[formKey].includes('@') || !formData[formKey].includes('.com'))) {
      return { ...acc, [formKey]: 'invalid email address' };
    }


    // Add more conditions for other fields as needed
    return acc; 
  }, {});
  
  
  console.log(formErrMessageList)
  // text fields validation
  /// email validation
  Object.keys(formErrMessageList).forEach(formKey => {
    const errorParagraph = document.getElementById(`${formKey}ErrorMsg`)
    errorParagraph.innerText = formErrMessageList[formKey]
  });


  // 

  // TODO: if email is not valid : show meaningful errors to the right InputDeviceInfo

  // TODO: else if form is valid make server requqest





  const getActivity = async () => {
    let jsonData = await activitiesActions.checkUserHosting(theEmail);
    //now you can directly use jsonData


  }
  //TODO: fix this back
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

    console.log(data)

    // SUCCESFUL RESPONSE _ ORDER DONE ON SERVER

    if (data.status >= 200 && data.status <= 300) {

      return data.json()

    }


    // unsuccessful response
    else {
      if (data.status >= 400 && data.status <= 500) {
        displayError(data.status)
        //  onTimeout(destroyErrorBanner())
      }


      // Create a link with a URI parameter
       //const confirmation = document.getElementsByClassName('confirmation');
      // const orderId = document.getElementById('orderId');
       // orderId.innerHTML = 'orderId';
       // const link = document.createElement('a');
       // link.href = `confirmation.html?orderId=${data.body.orderId}`;
       // link.textContent = 'Go to confrirmation Page';

      // Append the link to the body (or any other element you want)
       //document.body.appendChild(link); 



      // Unsuccessful response - handle the error







      // TODO: diplay error & a message
      // data.status >=400 && <500 NOT FOUND, could not find the product selection
      //data.status  >=500 -> server error: contact support for help

      const firstNameErrorMsg = document.getElementById('firstNameErrorMsg');
      const newParagraph = document.createElement('p');
      newParagraph.textContent = 'new content';

      firstNameErrorMsg.innerText = '';

      document.getElementById('order').addEventListener("submit", () => {
        if (firstNameInput.checkValidity()) {
          console.log('Form can be submitted!');
        }
      })

    }
  }).then(jsonData => {
    console.log(jsonData)


  
 
  
    
   //window.location.href = `confirmation.html?orderId= ${jsonData.orderId}'


  });


})


document.querySelectorAll('.js-delete-link')
  .forEach((link) => {

    link.addEventListener('click', () => {
      const productId = link.CDATA_SECTION_NODE.productId;
      removeFromcart(productId);
      console.log(cart);
      console.log('delete');
    });
  });



function removeFromcart() {
  const newCart = []

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;
}

// confirmation page
const postRequest = (orderData) => {

}




//postRequest();

// Define the validateAndSubmit function






