import { useEffect } from "react";

export default function useEffectComponent () {
    console.log("Component rendering...");

    useEffect(() => {
        console.log("Component has been rendered..")
    },[]);

    return(
        <>
        <h1>My component</h1>
        </>
    )
}