import { useState, useEffect } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import InputBox from './components/InputBox'
// import './App.css'

function App() {
  const [amount, setamount] = useState(1)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [ConvertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  let Options = Object.keys(currencyInfo);
  console.log(Options)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(setamount)
    setamount(setConvertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }
  return (
    <>

      <div className='main'>
        <div className='box'>
          <div className='contain'>
            <form onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}>

              <InputBox
                label={"from"}
                amount={amount}
                currencyOption={Options}
                onCurrencyChange={(currency) => setamount(amount)}
                selectCurrency={from}

              />
              <div className='buttons'>
                <button className='buttons-style'
                  type="button"

                  onClick={swap}
                > swap
                </button>

                <button type='button' className='buttons-style' onClick={() => {
                  if (amount > 1) {
                    setamount(amount - 1);
                  }
                }}>-</button>

                <button type='button' className='buttons-style' onClick={() => {
                  setamount(1)
                  setConvertedAmount(0);
                }}>0</button
                >
                

                <button type='button' className='buttons-style' onClick={() => {
                  setamount(amount + 1);
                }}>+</button>

              </div>


              <InputBox
                label={"to"}
                amount={ConvertedAmount}
                currencyOption={Options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable

              />

              <div className="btn">
                <button>Convert to </button>
              </div>


            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
