import React from "react";

function InputBox({ 
    currency = [1, 2, 3],
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption =[],
    selectCurrency ="usd",
    amountDisable= false,
    currencyDisable= false,


}) {

    return (
        <div className="box">
            <div className="inside-box">
                <div className="upper">
                    <span>from</span>
                    <span>Currency Type</span>
                </div>

                <div className="lower">
                    <input className=" border-black"
                        type="text"
                        name="box1"
                        id="box1"
                        value="" />
                    <select
                        className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                        value={currency}
                    // onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    // disabled={currencyDisable}
                    >
                        {currency.map((currencys) => (
                            <option key={currencys} value={currencys}>
                                {currencys}
                            </option>
                        ))}
                    </select>
                </div>
            </div>


            <div className="inside-box">
                <div className="upper">
                    <span>from</span>
                    <span>Currency Type</span>
                </div>

                <div className="lower">
                    <input className=" border-black"
                        type="text"
                        name="box1"
                        id="box1"
                        value="" />
                    <select
                        className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                        value={currency}
                    // onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    // disabled={currencyDisable}
                    >
                        {currency.map((currencys) => (
                            <option key={currencys} value={currencys}>
                                {currencys}
                            </option>
                        ))}
                    </select>
                </div>
            </div>



            <div className="btn">
                <button>Convert to </button>
            </div>
        </div>
    )
}
export default InputBox