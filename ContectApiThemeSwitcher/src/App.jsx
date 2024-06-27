import { Component, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './Context/Theme'
import ThemeUi from './components/ThemeUi'
import Card from './components/Card'

function App() {

  const [themeMode, setThemeMode] = useState("light")
  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect( () => {
      document.querySelector('html').classList.remove("light","dark")
      document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
      <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
        {/* 
        Important concept here, like the parameter that we pass here themeMode, lightTheme, darkTheme are the same as the defination
        but we hvent defined any funtionality to these, so in such cases, where they are being called like in this file
        create methods withexactly the same name, it is a default functionality of JS and react that in this case
        the function body automatically gets propogated to these
        */}
      <div className="flex flex-wrap min-h-screen items-center">
                      <div className="w-full">
                          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                              {/* themeBtn */}
                              <ThemeUi />
                          </div>

                          <div className="w-full max-w-sm mx-auto">
                            {/* card */}
                            <Card />
                          </div>
                      </div>
      </div>
</ThemeProvider>

  )
}

export default App
