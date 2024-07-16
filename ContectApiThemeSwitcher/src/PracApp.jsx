import React, { useState } from 'react'
import { ThemeProvider } from './Context/Theme'
/*
1. Since this is the main page, toh Sabse pehle yha hume ek kam krna hai ki hume provider me wrap krna hai unn components ko jisse contect obj ka access chahiye
2. Once wrapped, now hume vo values ko bhi define krna pdega explicitly
3. Jo functions hai, unki humne definiton yha deni hai


Now after making button events in ThemeUi, there 2 ways to change
1. Make useEffect and usko themeMode k change pr kro trigger and in that change the value of html classlist of the page
2. go to the card component, get the useContext to get value and then get the theme value and then change it
*/


function PracApp() {
    // Definig values to these 3
    // THe values are always define, where are using the provider to let other access it

    // Just like we define the values here manually, similarly values ccan come from API or DB or a file system
    const [themeMode, setThemeMode] = useState("light")

    const setToLightTheme = () =>{
        setThemeMode("light")
    }

    const setToDarkTheme = () =>{
        setThemeMode("dark")
    }

    // So now all the 3 values are set, we have to now think how will the change occur
    // i.e on change of button which is in Button component, our card component should change the color

  return (
    // Now whatever comp we use will have access to these 3
    <ThemeProvider value={{themeMode, setToLightTheme, setToDarkTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
                <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                    {/* themeBtn */}
                    
                </div>

                <div className="w-full max-w-sm mx-auto">
                {/* card */}
                
                </div>
            </div>
        </div>
    </ThemeProvider>

  )
}

export default PracApp