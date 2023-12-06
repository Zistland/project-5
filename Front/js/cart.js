
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

    })


    deleteContainer.appendChild(deleteSpan);

    cart__item__content__settings.appendChild(cart__item__content__settings__quantity);
    cart__item__content__settings.appendChild(deleteContainer);


    articleItem.appendChild(contentContainer);
    articleItem.appendChild(cart__item__content__settings);

    const articleListSection = document.getElementById('cart__items');

    articleListSection.appendChild(articleItem)



    /* <article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
                <div class="cart__item__img">
                  <img src="../images/product01.jpg" alt="Photo of a sofa">
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
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <span class="deleteItem js-delete-link" >Delete</span>
                    </div>
                  </div>
                </div>
              </article> */



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

const submitBtn = document.getElementById('order').addEventListener('click', (ev) => {
  // Your data object
  ev.preventDefault();
  const firstName = document.getElementById('firstName').innerText;
  console.log("FIRST NAME: ", firstName)

  const lastName = document.getElementById('lastName').innerText;
  console.log("LAST NAME: ", lastName)

  const address = document.getElementById('address').innerText;
  console.log("ADDRESS: ", address)

  const city = document.getElementById('city').innerText;
  console.log("CITY: ", city)

  const email = document.getElementById('email').innerText;
  console.log("EMAIL: ", email)





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


