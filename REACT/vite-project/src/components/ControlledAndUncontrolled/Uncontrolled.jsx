//Uncontrolled Components
//Uncontrolled Components are react components where the form elements maintain their own state and react is not directly involved in managing their state. You can still access their values using refs, but React does not control or manipulate the state of these elements.

import React, {useRef} from "react";

export default function Uncontrolled (){
    const inpuRef = useRef(null);

    const handleButtonClick = () => {
        alert(`${inpuRef.current.value}`)
    }

    return(
        <>
        <input type="text" ref={inpuRef}/>
        <button onClick={handleButtonClick}>Get Input Value</button>
        </>
    )
}

//In this functional component we use the useRef hook to create a reference to the input elemnt (inputRef). The input maintains its own state, and when the button is clicked, we access the input's value using ref. react is not directly controlling the inputs value