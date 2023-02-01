import React, { useState } from 'react';

const Historic = (props) => {
    const [amount, setAmount] = useState(100);
    const [startCurrency, setStartCurrency] = useState('EUR');
    const [startDate, setStartDate] = useState('2018-01-01')
    const [endDate, setEndDate] = useState(new Date().toISOString().split('T')[0])


    const historicCalc = async (evt) => {
        evt.preventDefault();
        const start = Math.floor(new Date(Number(startDate.slice(0, 4)), Number(startDate.slice(5, 7)), Number(startDate.slice(8, 10))).getTime() / 1000);
        const end = Math.floor(new Date(Number(endDate.slice(0, 4)), Number(endDate.slice(5, 7)), Number(endDate.slice(8, 10))).getTime() / 1000);
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=${startCurrency}&from=${start}&to=${end}`);
        const data = await response.json();

        const _startPrice = Number(data.prices[0][1]);
        const _endPrice = Number(data.prices[data.prices.length - 1][1]);
        const _cryptoAmount = amount / _startPrice;
        const _endFiat = _cryptoAmount * _endPrice
        console.log({
            startPrice: _startPrice,
            endPrice: _endPrice,
            cryptoAmount: _cryptoAmount,
            endFiat: _endFiat
        })
        return {
            startPrice: _startPrice,
            endPrice: _endPrice,
            cryptoAmount: _cryptoAmount,
            endFiat: _endFiat
        }
    }

    return (
        <div className='flex flex-row bg-black-200 lg:w-10/12 xl:w-8/12 h-def mx-auto my-6 justify-center rounded-lg'>
            <div className='flex flex-col bg-black-100 w-1/3 m-6 mr-0 rounded-lg py-12'>
                <form>
                    <div>
                        <label for='amount' className='flex text-white p-6 justify-center'>How much did you invest?</label>
                        <input name='amount' type='number' value={amount} onChange={(evt) => setAmount(evt.target.value)} className='rounded-tl-lg rounded-bl-lg text-center p-1'></input>
                        <select className='rounded-tr-lg rounded-br-lg p-1' value={startCurrency} onChange={evt => setStartCurrency(evt.target.value)}>
                            <option value='EUR'>EUR</option>
                            <option value='USD'>USD</option>
                        </select>
                    </div>
                    <div>
                        <label for='crypto' className='flex text-white pt-6 pb-6 justify-center '>In which cryptocurrency?</label>

                        <input list="cryptoList" id="selectCrypto" name="crypto" size="27" className='rounded-lg p-1' />
                    </div>
                    <div className='flex flex-row pt-6'>
                        <div className='flex flex-col'>
                            <label for='startDate' className='text-white'>in:</label>
                            <input name='startDate' type='date' value={startDate} onChange={evt => setStartDate(evt.target.value)} className='p-1 rounded-lg m-5 my-2'></input>
                        </div>
                        <div className='flex flex-col'>
                            <label for='endDate' className='text-white'>at:</label>
                            <input name='endDate' type='date' value={endDate} onChange={evt => setEndDate(evt.target.value)} className='p-1 rounded-lg my-2 '></input>
                        </div>
                    </div>
                    <button class="bg-teal-300 hover:bg-teal-200 text-white font-bold py-3 px-16 mt-16 rounded-full" onClick={(evt) => historicCalc(evt)}>
                        CALCULATE
                    </button>
                </form>
            </div>
            <div className='flex flex-col bg-black-100 w-2/3 m-6 rounded-lg'>
                <h3 className='text-teal-100 text-3xl text mt-10'>Result:</h3>
                <div className='bg-black-200 h-3/6 w-3/5 mx-auto my-6'></div>
                <div className='mt-6'>
                    <h3 className='text-white text-2xl mb-4'>Initial amount: <span className='text-teal-100'>100 EUR</span></h3>
                    <h3 className='text-white text-2xl mb-4'>End amount: <span className='text-green-100'>1000 EUR</span></h3>
                    <h3 className='text-white text-2xl mb-4'>Percentage difference: <span className='text-green-100'>900%</span></h3>
                </div>
            </div>
            <datalist id="cryptoList">
                {props.data.map((crypto) => (
                    <option>{crypto.name} ({crypto.symbol.toUpperCase()})</option>
                ))}
            </datalist>
        </div >
    )
}

export default Historic;