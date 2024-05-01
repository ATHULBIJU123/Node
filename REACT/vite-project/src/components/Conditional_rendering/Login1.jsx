import React, {useState} from "react";

export default function Login1() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const toggleLoginLogoff = () => {
        setIsLoggedIn(!isLoggedIn)
    };

    let content;


    if (isLoggedIn) {
        content =
            <>
                <h1>Welcome ! You are logged in !</h1>
                {/* <button>Logout</button> */}
            </>

    } else {
        content =
            <>
                <h1>Please login to continue !</h1>
                {/* <button type="switch" onClick={stateChange}>Login</button> */}
            </>
    }

    return(
        <>
            {content}
            <button onClick={toggleLoginLogoff}>
                { isLoggedIn ? 'Logoff' : 'Login'}
            </button>
        </>
    )
}