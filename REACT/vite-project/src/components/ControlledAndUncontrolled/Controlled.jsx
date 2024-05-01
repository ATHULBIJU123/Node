//Controlled Components
//Controlled Components are React components where REACT controlls and manages the state of elements, such as form inputs. The components state and value of the input elements are tightly linked, and any change to the input is controlled through react's state management.


import React, {useState} from "react";

export default function () {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    return(
        <>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        </>
    )
}

//In this function component, we use useState hook to manage the inputValue state. This inputValue is controlled by React's state, and any change is handled through the onchange event handler

