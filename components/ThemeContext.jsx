import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext({})
export const ThemeContextProvider = (props) => {
    const [webTheme, setWebTheme] = useState("dark");

    const value = {
        webTheme,
        setWebTheme
    };

    useEffect(() => {
        const storageTheme = localStorage.getItem("theme")
        storageTheme == "light" ? setWebTheme("light") : null;
    }, [])

    useEffect(() => {
        localStorage.setItem("theme", webTheme)
    }, [webTheme])

    return <ThemeContext value={value}>
        {props.children}
    </ThemeContext>
} 