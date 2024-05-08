import React, {createContext, useContext, useState} from "react";

const ThemeContext = createContext();

function ThemedComponent () {
    const {theme} = useContext(ThemeContext);

    return <div style={{background:theme}}> Themed Component</div>
}

function ThemeSelector(){
    const {setTheme} = useContext(ThemeContext)

    return (
        <>
        <button onClick={() => setTheme('white')}>Light</button>
        <button onClick={() => setTheme('black')}>Dark</button>
        </>
    )
}

export default function UseContextComponent1(){
    const [theme, setTheme] = useState('white');

    const contexValue = {theme, setTheme};

    return (
        <ThemeContext.Provider value={contexValue}>
            <ThemedComponent/>
            <ThemeSelector/>
        </ThemeContext.Provider>
    )
}