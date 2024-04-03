async function submitForm() {
    let firstname = document.getElementById('firstname').value;
    console.log("first name:", firstname);

    let lastname = document.getElementById('lastname').value;
    console.log("last name:", lastname);

    let email = document.getElementById('email').value;
    console.log("email", email);

    let password = document.getElementById('password').value;
    console.log("password: ", password);

    let data = {
        firstname,
        lastname,
        email,
        password
    }

    let json_data = JSON.stringify(data);

    //get jwt token from localstorage

    let token = localStorage.getItem('token'); console.log("token", token);
    let response = await fetch('/users', {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "authorization": `Bearer ${token}`,
        },
        "body": json_data,
    });

    let parsed_response = await response.json();

    if (parsed_response.success) {
        alert("Form submitted successfully");
    } else {
        alert(parsed_response.message);
    }
}

async function getData() {
    console.log("Hello World");

    let token = localStorage.getItem('token');
    console.log("token", token);

    let data = await fetch('http://localhost:3001/getData', {
        "method": "GET",
        "headers": {
            "authorization": `Bearer ${token}`
        }

    });

    console.log("data", data);

    let parsedData = await data.json();
    console.log("parsedData", parsedData);
    let pd = parsedData.data;

    let content = document.getElementById("content");
    console.log("content", content);

    let rows = " ";
    for (let i = 0; i < pd.length; i++) {
        rows = rows + `

        <tr>
        <td>${pd[i]._id}</td>
        <td><input type="text" name="firstname" id="firstname-${pd[i].id}" value
        <td><input type="text" name="lastname" id="lastname-${pd[i].id}" value
        <td><input type="email" name="email" id="email-${pd[1]._id}" value="${parsedData}"
        <td><input type="password" name="password" id="password-${pd[1]._id}"
        <td><button onclick="handleEdit('${pd[i]._id} ')">Edit</button></td> 
        <td><button onclick="handleSave("${pd[i]._id}') ">Save</button></td>
        </tr>
        `

    }

    content.innerHTML = rows;

}

getData();

function handleEdit(id) {
    console.log("id", id);
    let firstname = document.getElementById(`firstname-${id}`);
    console.log("firstname:", firstname);
    firstname.disabled = false;

    > JS script.js > submitForm > [e] response Let firstname = document.getElementById('firstname-$(id)); console.log("firstname:", firstname); firstname.disabled = false;

let lastname = document.getElementById('lastname-${id}'); console.log("lastname:", lastname); lastname.disabled = false;

let email = document.getElementById('email-${id}'); console.log("email", email); email.disabled = false;

let password = document.getElementById('password-${id}'); console.log("password", password); password.disabled = false;

}

async function handleSave(id) { console.log("id", id);

let firstnameTag = document.getElementById('firstname-${id}'); console.log("firstnameTag", firstnameTag); let firstname = firstnameTag.value; console.log("firstname:", firstname);

let lastnameTag = document.getElementById('lastname-${id}'); console.log("lastnameTag", lastnameTag);

let lastname = lastnameTag.value; console.log("lastname:", lastname);

let emailTag = document.getElementById('email-${id}'); console.log("emailTag: ", emailTag); let email emailTag.value; console.log("email", email);

let passwordTag = document.getElementById('password-${id}'); console.log("passwordTag", passwordTag); let password = passwordTag.value; console.log("password: ", password);

let data = { id, firstname, lastname, email, password,

}

}    