import { useEffect, useState } from "react";

export default function useEffectComponent () {
    console.log("Component rendering...");

    let [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Component has been rendered, from useEffect")
    },[]);

    return(
        <>
        <h1>Count : {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    )
}