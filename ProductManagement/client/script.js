async function getData() {
    console.log("Data is here");

    let productData = await fetch ("http://localhost:4000/getData");
    console.log("productData : ", productData.response);
    console.log("typeOf(productData) : ", typeof(productData));

    let parsed_productData = await productData.json();
    console.log("parsed productData : ", parsed_productData)
    console.log ("type of parsed_productData :", typeof(parsed_productData));

    let content = document.getElementById('content');
    let productDetails = '';

    for(let i=0; i<parsed_productData.length; i++) {
        let editTag = `<value=${parsed_productData[i]._id}>Edit`;
        productDetails = productDetails + `
        <h1>${parsed_productData[i].product}</h1>
        <p class = "price">${parsed_productData[i].price}</p>
        <p class = "size">${parsed_productData[i].size}</p>
        <p class = "quantity">${parsed_productData[i].quantity}</p>

        `
    }

    console.log("productDetails :", productDetails);
    console.log("content :", content)
    content.innerHTML = productDetails;
}

getData();

