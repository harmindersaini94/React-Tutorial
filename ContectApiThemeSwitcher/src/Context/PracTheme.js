import {createContext, useContext} from 'react'

// Yha humne bnaya ek contect with values, i.e you could say a global obj with values that will be accessed by all the components
export const themeContext = createContext({
    themeMode:"light",
    setToLightTheme : () => {},
    setToDarkTheme : () => {}
})

// So ye rha theme provider, jo ki act krega as a wrapper jiske beech me jo bhi hum component likhege use access hoga upr wale obj k values ka
export const themeProvider = themeContext.Provider()

// Yha humne apna custom hook bnaya, which in turn is making use of useContext hook jha hum context api consume kr rhe
// Meaning that provider provide access of context obj to child components, for child component to use it they use useContext and get the access to all the members of context
export default function useTheme(){
    return useContext(themeContext)
}



