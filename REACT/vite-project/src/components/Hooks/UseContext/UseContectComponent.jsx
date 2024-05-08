import React, {createContext, useContext} from "react";             //Object Destructuring

const MyContext = createContext("default");

function ComponentA () {
 let contextValue = useContext(MyContext);

 return <div>ComponentA : {contextValue}</div>
}

function ComponentB () {
    let contextValue = useContext(MyContext);

    return <div>ComponentB : {contextValue}</div>
}

export default function UseContextComponent () {
    return (
        <MyContext.Provider value="Hello">
            <ComponentA/>
            <ComponentB/>
        </MyContext.Provider>
    )
}