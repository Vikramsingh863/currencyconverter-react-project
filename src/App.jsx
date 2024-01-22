import { useState, useEffect } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import InputBox from './components/InputBox'
// import './App.css'
// const currencyInfo= useCurrencyInfo("inr")
function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <div className='main'>
    <InputBox
    
    />
    <div className='bg-orange-500'> </div>
    </div>
    </>
  )
}

export default App
