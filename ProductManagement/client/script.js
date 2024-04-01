async function getData() {
    console.log("Data is here");

    let productData = await fetch ("http://localhost:4000/getData");
    console.log("productData : ", productData.response);
    console.log("typeOf(productData) : ", typeof(productData));

    let parsed_productData = await productData.json();
    console.log("parsed productData : ", parsed_productData)
    console.log ("type of parsed_productData :", typeof(parsed_productData));

    let container = document.getElementById('container');
    let productDetails = '';

    for(let i=0; i<parsed_productData.length; i++) {
        let editTag = `<value=${parsed_productData[i]._id}>Edit`;
        productDetails = productDetails + `
        <h1 id = "product-${parsed_productData._id}">${parsed_productData[i].product}</h1>
        <p class = "price" id = "price-${parsed_productData._id}">${parsed_productData[i].price}</p>
        <p class = "size" id = "size-${parsed_productData._id}">${parsed_productData[i].size}</p>
        <p class = "quantity" id = "quantity-${parsed_productData._id}">${parsed_productData[i].quantity}</p>
        <button onclick="handleEdit('${parsed_productData[i]._id}')">Edit</button>
        <button onclick="handleSave('${parsed_productData[i]._id}')">Save</button>
        <button onclick="handleDelete('${parsed_productData[i]._id}')">Delete</button>
        `
    }

    console.log("productDetails :", productDetails);
    console.log("container :", container)
    container.innerHTML = productDetails;
}

getData();

