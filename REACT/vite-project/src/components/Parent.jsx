import { useState } from "react";
import Form from "./Form";
import Display from "./Display";

function Parent() {
    console.log("Parent Component rendering...");

    const [data, setData] = useState('');

    const handleSubmit = (data) => {
        setData(data);
    }

    return(
        <>
        <Form onsubmit={handleSubmit}/>
        <Display displayData={data}/>
        </>
    )
}
export default Parent;