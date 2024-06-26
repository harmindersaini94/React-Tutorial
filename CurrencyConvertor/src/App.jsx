import { useState } from 'react'
import { InputBox } from '../Components'
import useCurrencyConvertor from '../hooks/useCurrencyInfo'
import './App.css'

function App() {

  const [amount, setAmount] = useState(0)
const [convertAmount, setConvertAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")

  const currencyInfo = useCurrencyConvertor(from)
  const options = Object.keys(currencyInfo)

  const convert = () =>{
    setConvertAmount(amount * 0.82)
  }

  const SwapFields = () =>{
    let temp1 = from
    setFrom(to)
    setTo(temp1)

    let temp2 = amount
    setAmount(convertAmount)
    setConvertAmount(temp2)
  }
 
    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/19059877/pexels-photo-19059877/free-photo-of-surfers-on-sea-coast-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault(); // ye is liye kiya coz when a form is submit it usually refresh the page and goto a addres, since we dont want it that is why
                           convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox label="From" 
                            amount={amount}
                            onAmountChange={(amm) => setAmount(amm)}
                            onCurrencyChange={(currency) => setAmount(amount)}
                            CurrencyOptions={['inr','usd']}
                            selectCurrency={from} 
                            amountDisable={false}
                            currencyDisable={false} />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button type="button" className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={SwapFields}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                        <InputBox label="To" 
                            amount={convertAmount}
                            onAmountChange={(amm) => setConvertAmount(amm)}
                            onCurrencyChange={(curr) => setTo(curr)}
                            CurrencyOptions={['inr','usd']}
                            selectCurrency={to} 
                            amountDisable={true}
                            currencyDisable={true} />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" onClick={convert}>
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default App
