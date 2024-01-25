import React from "react";

function InputBox({ 

    // currency = [1, 2, 3],
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption =[],
    selectCurrency ,
    amountDisable= false,
    currencyDisable= false,
    

}) {
    console.log("ss")
    console.log(currencyOption)

    return (
        
            <div className="inside-box">
                <div className="upper">
                    <span>{label} ( {selectCurrency} ) </span>
                    <span>Currency Type</span>
                    
                </div> 
                
                <div className="lower">
                    <input className=" border-black"
                        type="text"
                        name="box1"
                        id="box1"
                        value={amount}/>
                    <select
                        className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                        value={currencyOption}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                    >
                        {currencyOption.map((currencys) => (
                            <option key={currencys} value={currencys}>
                                {currencys}
                            </option>
                        ))}
                        
                    </select>
                </div>
            </div>

            
        
    )
}
export default InputBox