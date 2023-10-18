
// Get Products data from the server
async function fetchProductList() {
    const response = await fetch("http://127.0.0.1:3000/api/products");
    const prodList = await response.json();

    // Step2: fetch the HTML element to append to
    const itemListHTML = document.getElementById('items');

    console.log(prodList)
    // Step3: Create element for the product to be dispalyed: article, image, link, text
    prodList.forEach((productObject) => {
        //<a href="./product.html?id=42">
        // <article>
        //   <img src=".../product01.jpg" alt="Lorem ipsum dolor sit amet, Kanap name1">
        //   <h3 class="productName">Kanap name1</h3>
        //  <p class="productDescription">Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
        //  </article>
        //</a> -->
        const anchor = document.createElement('a');
        anchor.href = '/'
        const article = document.createElement('article');
        const img = document.createElement('img');
        img.src = productObject.imageUrl;
        img.alt = productObject.altTxt;

        const h3 = document.createElement('h3');
        h3.innerText = productObject.name;

        article.appendChild(h3);
        article.appendChild(img);

        // TODO: ADD A PARGRAPH


        // FINAL BATCH
        itemListHTML.appendChild(article)



    })
}

const prodList = fetchProductList();

prodList.forEach((productObject) => {

})


// Step4: attach to the products HTML ELement