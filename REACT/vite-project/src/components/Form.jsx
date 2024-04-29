import { useState } from "react";

function Form({onsubmit}) {
    console.log("Form Component rendering...");

    const [inputData, setInputData] = useState({
        firstName : '',
        lastName : '',
        email : '',
        password : '',
    
    });
    // console.log("InputData : ",inputData);

    const handleSubmit = (e) => {
        e.preventDefault();
        onsubmit(inputData);
    }

    const handleInputChange = (e) => {
        // e.preventDefault();
        // setInputData(e.target.value);

        if(e.target.name === "first-name") {
            setInputData({
                firstName : e.target.value,
                lastName : inputData.lastName,
                email : inputData.email,
                password : inputData.password,
            })
        }

        if(e.target.name === "last-name") {
            setInputData({
                firstName : inputData.firstName,
                lastName : e.target.value,
                email : inputData.email,
                password : inputData.password,
            })
        }

        if(e.target.name === "email") {
            setInputData({
                firstName : inputData.firstName,
                lastName : inputData.lastName,
                email : e.target.value,
                password : inputData.password,
            })
        }

        if(e.target.name === "password") {
            setInputData({
                firstName : inputData.firstName,
                lastName : inputData.lastName,
                email : inputData.email,
                password : e.target.value,
            })
        }
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="first-name" id="first-name" onChange={handleInputChange} value={inputData.firstName} placeholder="Enter your first name"/>
            <input type="text" name="last-name" id="last-name" onChange={handleInputChange} value={inputData.lastName} placeholder="Enter your last name"/>
            <input type="email" name="email" id="email" onChange={handleInputChange} value={inputData.email} placeholder="Enter your email"/>
            <input type="password" name="password" id="password" onChange={handleInputChange} value={inputData.password} placeholder="Enter your first password"/>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default Form;