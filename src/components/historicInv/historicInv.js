import React, { useState, useContext } from 'react';
import Graph from './graph/graph'
import ThemeContext from "../ThemeContext";


const Historic = (props) => {
    const [amount, setAmount] = useState(100);
    const [startCurrency, setStartCurrency] = useState('EUR');
    const [endCurrency, setEndCurrency] = useState('bitcoin');
    const [startDate, setStartDate] = useState('2018-01-01');
    const [endDate, setEndDate] = useState(new Date().toISOString().split('T')[0]);

    const [returnData, setReturnData] = useState({});
    const [priceData, setPriceData] = useState([]);
    const [yearData, setYearData] = useState([]);
    const [color, setColor] = useState('');
    const [hasData, setHasData] = useState(false);

    const { isDarkTheme } = useContext(ThemeContext);

    const historicCalc = async (evt) => {
        evt.preventDefault();
        const start = new Date(startDate).getTime() / 1000;
        const end = new Date(endDate).getTime() / 1000;
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${endCurrency}/market_chart/range?vs_currency=${startCurrency}&from=${start}&to=${end}`);
        const data = await response.json();
        let initialAmount;
        let cryptoAmount;
        let endAmount;
        let percentage;
        const startPrice = data.prices[0][1];
        const endPrice = data.prices[data.prices.length - 1][1];
        initialAmount = amount;
        cryptoAmount = (amount / startPrice).toFixed(8);
        endAmount = (cryptoAmount * endPrice).toFixed(2);
        percentage = ((endAmount / amount * 100) - 100).toFixed(2);

        endPrice - startPrice > 0 ? setColor('#4DAA57') : setColor('#D34E36')

        setPriceData(data.prices.map(price => price[1]))
        setYearData(data.prices.map(year => year[0]).map(timestamp => new Date(timestamp)).map(date => date.getFullYear()))

        return {
            startPrice: startPrice,
            endPrice: endPrice,
            initialAmount: initialAmount,
            cryptoAmount: cryptoAmount,
            endAmount: endAmount,
            percentage: percentage
        }
    }

    const handleClick = async (evt) => {
        await setReturnData(await historicCalc(evt), setHasData(true))
    }

    return (
        <div className={`flex flex-col xl:flex-row  lg:w-10/12 xl:w-8/12 h-def mx-auto my-6 justify-center rounded-lg ${isDarkTheme ? "bg-black-200" : "bg-white-mode-300"}`}>
            <div className={`flex flex-col h-def mx-auto w-11/12 xl:w-1/3 xl:m-6 xl:mr-0 rounded-lg mt-12 py-12 ${isDarkTheme ? "bg-black-100" : "bg-white-mode-200"}`}>
                <form>
                    <div>
                        <label htmlFor='amount' className={`flex  p-6 justify-center ${isDarkTheme ? "text-white" : "text-black-100"}`}>How much did you invest?</label>
                        <div className='w-full flex mx-auto justify-center'>
                            <input name='amount' type='number' value={amount} onChange={(evt) => setAmount(evt.target.value)} className={`shadow rounded-tl-lg rounded-bl-lg text-center p-1 ${isDarkTheme ? "bg-teal-50" : "bg-white-mode-100"}`}></input>
                            <select className={`shadow rounded-tr-lg rounded-br-lg p-1 ${isDarkTheme ? "bg-teal-50" : "bg-white-mode-100"}`} value={startCurrency} onChange={evt => setStartCurrency(evt.target.value)}>
                                <option value='EUR'>EUR</option>
                                <option value='USD'>USD</option>
                            </select>
                        </div>

                    </div>
                    <div>
                        <label htmlFor='crypto' className={`flex pt-6 pb-6 justify-center ${isDarkTheme ? "text-white" : "text-black-100"}`}>In which cryptocurrency?</label>
                        <div className='flex justify-center'>
                            <select id="selectCrypto" name="crypto" onChange={evt => setEndCurrency(evt.target.value)} className={`shadow rounded-lg p-1 text-center  ${isDarkTheme ? "bg-teal-50" : "bg-white-mode-100"}`}>
                                <option value="">Select a cryptocurrency</option>
                                {props.data.map((crypto) => (
                                    <option key={crypto.symbol} value={crypto.id}>{crypto.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center pt-6'>
                        <div className='flex flex-col'>
                            <label htmlFor='startDate' className={`ml-16 ${isDarkTheme ? "text-white" : "text-black-100"}`}>in:</label>
                            <input name='startDate' type='date' value={startDate} onChange={evt => setStartDate(evt.target.value)} className={`shadow p-1 rounded-lg m-2 my-2 ${isDarkTheme ? "bg-teal-50" : "bg-white-mode-100"}`}></input>
                        </div>

                        <div className='flex flex-col '>
                            <label htmlFor='endDate' className={`ml-16 ${isDarkTheme ? "text-white" : "text-black-100"}`}>at:</label>
                            <input name='endDate' type='date' value={endDate} onChange={evt => setEndDate(evt.target.value)} className={`shadow p-1 rounded-lg m-2 my-2 ${isDarkTheme ? "bg-teal-50" : "bg-white-mode-100"}`}></input>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button className="bg-teal-300 hover:bg-teal-200 text-white font-bold py-3 px-16 mt-16 rounded-lg shadow-md shadow-teal-400" onClick={(evt) => handleClick(evt)}>
                            CALCULATE
                        </button>
                    </div>
                </form>
            </div>
            <div className={`flex flex-col h-def w-11/12 xl:w-2/3 m-6 xl:mx-6 mx-auto rounded-lg ${isDarkTheme ? "bg-black-100" : "bg-white-mode-200"}`}>
                {hasData ? <div>
                    <div className='flex justify-center'>
                        <h3 className={`text-3xl text mt-4 ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>RESULT</h3>
                    </div>
                    <div id='graph-container' className={` h-3/6 w-11/12 mx-auto my-6 shadow ${isDarkTheme ? "bg-black-200" : "bg-white-mode-400 shadow-none"}`}><Graph priceData={priceData} yearData={yearData} color={color} /></div>
                    <div className='p-4'>
                        <div className={`border-2 mb-2 pt-2 mx-auto rounded-lg shadow w-4/5 ${isDarkTheme ? "bg-black-200 border-black-300" : "bg-white-mode-300 border-gray-300"}`}>
                            <h3 className={`text-center text-2xl mb-1 ${isDarkTheme ? "text-white" : "text-black-100"}`}>Initial amount : <span className={` m-4 ${isDarkTheme ? "text-green-100 green-shadow" : "text-green-100 "}`}>{returnData.initialAmount} €</span></h3>
                        </div>
                        <div className={`border-2 mb-1 pt-2 mx-auto rounded-lg shadow w-4/5 ${isDarkTheme ? "bg-black-200 border-black-300" : "bg-white-mode-300 border-gray-300"}`}>
                            <h3 className={`text-center text-2xl mb-2 ${isDarkTheme ? "text-white" : "text-black-100"}`}>Crypto amount : {returnData.percentage > 0
                                ? <span className='text-green-100 text-2xl m-2 green-shadow'>{returnData.cryptoAmount}</span>
                                : <span className='text-red-300 text-2xl m-2 red-shadow'>{returnData.cryptoAmount}</span>}</h3>
                        </div>
                        <div className='flex flex-col justify-center items-center mx-auto'>
                            <div className={`mx-auto mb-1 pt-2 px-6 border-2 rounded-lg shadow w-4/5 ${isDarkTheme ? "bg-black-200 border-black-300" : "bg-white-mode-300 border-gray-300"}`}>
                                <h3 className={`text-center text-2xl mb-4 ${isDarkTheme ? "text-white" : "text-black-100"}`}>End amount:
                                    {returnData.percentage > 0
                                        ? <span className='text-green-100 text-2xl m-2 green-shadow'>{returnData.endAmount} {startCurrency}</span>
                                        : <span className='text-red-300 text-2xl m-2 red-shadow'>{returnData.endAmount} {startCurrency}</span>}</h3>
                            </div>
                            <div className={`'mx-auto pt-2 px-6 border-2 rounded-lg shadow w-4/5 ${isDarkTheme ? "bg-black-200 border-black-300" : "bg-white-mode-300 border-gray-300"}`}>
                                <h3 className={`text-center text-2xl mb-4 ${isDarkTheme ? "text-white" : "text-black-100"}`}>Percentage difference: {returnData.percentage > 0
                                    ? <span className='text-green-100 text-2xl m-2 green-shadow'>{returnData.percentage}%</span>
                                    : <span className='text-red-300 text-2xl m-2 red-shadow'>{returnData.percentage}%</span>}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                    : ''}
            </div>
        </div >
    )
}

export default Historic;
