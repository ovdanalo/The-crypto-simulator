import React, { useState } from 'react';
import Graph from './graph/graph'

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

    const historicCalc = async (evt) => {
        evt.preventDefault();
        const start = Math.floor(new Date(Number(startDate.slice(0, 4)), Number(startDate.slice(5, 7)), Number(startDate.slice(8, 10))).getTime() / 1000);
        const end = Math.floor(new Date(Number(endDate.slice(0, 4)), Number(endDate.slice(5, 7)), Number(endDate.slice(8, 10))).getTime() / 1000);
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${endCurrency}/market_chart/range?vs_currency=${startCurrency}&from=${start}&to=${end}`);
        const data = await response.json();
        let cryptoAmount;
        let endAmount;
        let percentage;

        const startPrice = data.prices[0][1];
        const endPrice = data.prices[data.prices.length - 1][1];
        cryptoAmount = (amount / startPrice).toFixed(8);
        endAmount = (cryptoAmount * endPrice).toFixed(2);
        percentage = ((endAmount / amount * 100) - 100).toFixed(2);
        console.log(data)

        endPrice - startPrice > 0 ? setColor('#4DAA57') : setColor('#D34E36')

        setPriceData(data.prices.map(price => price[1]))
        setYearData(data.prices.map(year => year[0]).map(timestamp => new Date(timestamp)).map(date => date.getFullYear()))

        return {
            startPrice: startPrice,
            endPrice: endPrice,
            cryptoAmount: cryptoAmount,
            endAmount: endAmount,
            percentage: percentage
        }
    }

    const handleClick = async (evt) => {
        await setReturnData(await historicCalc(evt), setHasData(true))
    }

    return (
        <div className='flex flex-col xl:flex-row bg-black-200 lg:w-10/12 xl:w-8/12 h-def mx-auto my-6 justify-center rounded-lg'>
            <div className='flex flex-col bg-black-100 mx-auto w-11/12 xl:w-1/3 xl:m-6 xl:mr-0 rounded-lg mt-12 py-12'>
                <form>
                    <div>
                        <label htmlFor='amount' className='flex text-white p-6 justify-center'>How much did you invest?</label>
                        <input name='amount' type='number' value={amount} onChange={(evt) => setAmount(evt.target.value)} className='shadow rounded-tl-lg rounded-bl-lg text-center p-1 bg-teal-50'></input>
                        <select className='shadow rounded-tr-lg rounded-br-lg p-1 bg-teal-50' value={startCurrency} onChange={evt => setStartCurrency(evt.target.value)}>
                            <option value='EUR'>EUR</option>
                            <option value='USD'>USD</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='crypto' className='flex text-white pt-6 pb-6 justify-center '>In which cryptocurrency?</label>

                        <input list="cryptoList" id="selectCrypto" name="crypto" value={endCurrency} onChange={evt => setEndCurrency(evt.target.value)} className='shadow rounded-lg p-1 text-center bg-teal-50' />
                    </div>
                    <div className='flex flex-row justify-center pt-6'>
                        <div className='flex flex-col'>
                            <label htmlFor='startDate' className='text-white'>in:</label>
                            <input name='startDate' type='date' value={startDate} onChange={evt => setStartDate(evt.target.value)} className='shadow p-1 rounded-lg m-2 my-2 bg-teal-50'></input>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='endDate' className='text-white'>at:</label>
                            <input name='endDate' type='date' value={endDate} onChange={evt => setEndDate(evt.target.value)} className='shadow p-1 rounded-lg m-2 my-2 bg-teal-50 '></input>
                        </div>
                    </div>
                    <button className="bg-teal-300 hover:bg-teal-200 text-white font-bold py-3 px-16 mt-16 rounded-lg shadow" onClick={(evt) => handleClick(evt)}>
                        CALCULATE
                    </button>
                </form>
            </div>
            <div className='flex flex-col bg-black-100 w-11/12 xl:w-2/3 m-6 xl:mx-6 mx-auto rounded-lg'>
                {hasData ? <div>
                    <h3 className='text-teal-100 text-3xl text mt-10'>RESULT</h3>
                    <div id='graph-container' className='bg-black-200 h-3/6 w-4/5 mx-auto my-6 shadow'><Graph priceData={priceData} yearData={yearData} color={color} /></div>
                    <div className='mt-6'>
                        <div className='border-2 border-black-300 bg-black-200 pt-2 mx-24 rounded-lg mt-4 shadow'>
                            <h3 className='text-white text-2xl mb-4'>Initial amount : <span className='text-teal-100'>{amount} €</span></h3>
                        </div>
                        <div className='border-2 border-black-300 bg-black-200 pt-2 mx-24 rounded-lg mt-4 shadow'>
                            <h3 className='text-white text-2xl mb-4'>Crypto amount : {returnData.cryptoAmount} {endCurrency}</h3>
                        </div>
                        <div className='flex flex-row justify-center items-center mx-24 pt-2 my-4'>
                            <div className='mx-2 border-black-300 bg-black-200 pt-2 px-6 border-2 rounded-lg mb-10 shadow'>
                                <h3 className='text-white text-2xl mb-4'>End amount: {returnData.endAmount} {startCurrency}</h3>
                            </div>
                            <div className='mx-2 border-black-300 bg-black-200 pt-2 px-6 border-2 rounded-lg mb-10 shadow'>
                                <h3 className='text-white text-2xl mb-4'>Percentage difference: {returnData.percentage}%</h3>
                            </div>
                        </div>
                    </div>
                </div>
                    : ''}
            </div>
            <datalist id="cryptoList">
                {props.data.map((crypto) => (
                    <option>{crypto.id}</option>
                ))}
            </datalist>
        </div >
    )
}

export default Historic;