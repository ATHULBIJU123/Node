import React, {useState, useCallback} from "react";

export default function UseCallbackComoponent () {
    const [count, setCount] = useState(0);

    const handleClick = useCallback (() => {
        setCount(count + 1);
    },[count]);

    return (
        <>
        <h1>Count : {count} </h1>
        <ChildComponent onclick = {handleClick} />
        </>
    )
}

function ChildComponent({onclick}) {
    return <button onClick={onclick}>Increment</button>
}
