import { createContext, useState } from "react";

export const ThemeContext = createContext({})
export const ThemeContextProvider = (props) => {
    const [webTheme, setWebTheme] = useState("light");
    const value = {
        webTheme,
        setWebTheme
    };
    return <ThemeContext value={value}>
        {props.children}
    </ThemeContext>
} 