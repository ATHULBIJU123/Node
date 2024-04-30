import React, {useState} from "react";

export default function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return(
        <>
        {isLoggedIn ? (<h1>Welcome!</h1>) : (<h1>Please Login !</h1>)}
        </>
    )
}