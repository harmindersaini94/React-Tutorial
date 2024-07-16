import useTheme from "../Context/PracTheme";

export default function ThemeBtn() {
    /*
    1. Yha humen dekhna hai ki on change of the checkbox out theme should move from light to dark or vice versa
    2. It means hme check krna hoga the value of the checkboox and accordingly change krna hoga sab
    */

    const [themeMode, setToDarkTheme, setToLightTheme] = useTheme()
    function changeTheme(e){
        e.preventDefault()
        const currTheme = e.currentTarget.value
        if(currTheme){
            setToLightTheme()
        }
        else setToDarkTheme()
    }


    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                // yha hum bol rhe ki agar checkbox checked hai, toh humare tempTheme variable me dark daal de
                // Why? because according to  this phit hum useContext k functio ko use krlenge
                checked={themeMode === 'dark'} 
                onChange={changeTheme}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
        </label>
    );
}

