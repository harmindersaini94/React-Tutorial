import React, {createContext, useContext} from "react"

//Usually production code me ek fle me hota kaamimport { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme : () =>{},
    lightTheme : () =>{},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}