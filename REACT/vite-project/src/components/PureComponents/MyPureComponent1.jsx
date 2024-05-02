import React from "react";

const MyPureComponent1 = React.memo(({message}) =>{
    console.log("Component Rendering...");
    return <div>{message}</div>
})

export default MyPureComponent1;