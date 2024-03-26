async function getData() {
    console.log("Data is here");

    let data = await fetch ("http://localhost:4000/getData");
    console.log("data : ", data.response);
    console.log("typeOf(data) : ", typeof(data));
}