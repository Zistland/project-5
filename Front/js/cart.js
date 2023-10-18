console.log("WELCOME TO MY CART PAGE")


function extractValue(event) {
    console.log("My changed value: ", event.currentTarget.value)
}

document.getElementById('firstName').addEventListener('change', extractValue)

document.getElementById('firstName').onchange = extractValue

document.getElementById('email').onchange = extractValue



// TODO: Event that will print all forms values on button click / submit
document.getElementById('email').onsubmit = function () {
    let firstNameValue = document.getElementById('email').innerText;
    let lastNameValue = document.getElementById('email').innerText;
    let emailValue = document.getElementById('email').innerText;

    console.log('Submit these:', { firstNameValue, lastNameValue, emailValue })

}



// Function to handle form submission
document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from actually submitting
    printFormValues();
  });
  
  // Function to print form values
  function printFormValues() {
    var form = document.getElementById("myForm");
    var formData = new FormData(form);
  
    formData.forEach(function (value, key) {
      console.log(key + ": " + value);
    });
  }
  
  // Add a click event listener to the "Print Form Values" button
  document.getElementById("printButton").addEventListener("click", function () {
    printFormValues();
  });
  



  