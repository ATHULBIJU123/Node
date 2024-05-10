import { useEffect, useState } from "react";

export default function useEffectComponent1 () {

    console.log("Component rendering ..")
    let [data, setData] = useState('');

    async function fetchData () {
        let users = await (await fetch ('https://jsonplaceholder.typicode.com/users'))
        console.log("users :", users);
        setData(users);
    }

    useEffect(() =>{
        fetchData();
    }, []);


    return (
        <>
        {/* <h1>id: { data && data[0].id}</h1>
        <h2>name : {data && data[0].name}</h2> */}

        {data && data.mao ((e) =>{
            return (
                <div>
                    <h1>id : {e.id}</h1>
                    <h1>name : {e.name}</h1>
                    <br/>  
                </div>
            )
        })}
        </>
    )
}
