import React, { useState } from 'react';

const Home = () => {
    const [investmentData, setInvestmentData] = useState([]);
    const handleBuy = (e) => {
        e.preventDefault();
        const selectCrypto = document.getElementById('selectCrypto');
        const selectedCryptoValue = selectCrypto.value;
        if (!selectedCryptoValue) {
            return;
        }
        const newInvestment = {
            id: investmentData.length + 1,
            name: selectedCryptoValue.split(" ")[0],
            price: (Math.random() * (1000 - 100) + 100).toFixed(2),
            volume: (Math.random() * (1000000 - 100000) + 100000).toFixed(2),
            last7Days: (Math.random() * (100 - 1) + 1).toFixed(2),
        };
        const existingInvestment = investmentData.find(
            (investment) => investment.name === newInvestment.name
        );
        if (existingInvestment) {
            existingInvestment.price = (
                parseFloat(existingInvestment.price) + parseFloat(newInvestment.price)
            ).toFixed(2);
            setInvestmentData([...investmentData]);
        } else {
            setInvestmentData([...investmentData, newInvestment]);
        }
    };
    return (
        <div className='flex flex-row bg-black-200 w-8/12 xl:h-def mx-auto my-6 justify-center rounded-lg'>
            <div className='flex flex-col bg-black-100 w-1/3 m-6 mr-0 rounded-lg py-12'>
                <form>
                    <div>
                        <label for='amount' className='flex text-white py-6 justify-center'>How much do you want to invest?</label>
                        <input name='amount' type='number' value='100' className='rounded-tl-lg rounded-bl-lg text-center p-1'></input>
                        <select className='rounded-tr-lg rounded-br-lg p-1'>
                            <option>EUR</option>
                            <option>USD</option>
                        </select>
                    </div>
                    <div>
                        <label for='crypto' className='flex text-white pt-12 pb-6 justify-center '>In which cryptocurrency?</label>

                        <input list="cryptoList" id="selectCrypto" name="crypto" size="27" autocomplete="off" className='rounded-lg p-1' />
                    </div>

                    <button onClick={handleBuy} class="bg-teal-300 hover:bg-teal-200 text-white font-bold py-3 px-16 mt-16 rounded-full">
                        BUY
                    </button>
                </form>
            </div>
            <div className='flex flex-col bg-black-100 w-2/3 m-6 rounded-lg'>
                <table className='w-10/12 mx-auto'>
                    <thead className='text-white'>
                        <tr className='h-20 border-b border-b-teal-100'>
                            <th>#</th>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Value (24h)</th>
                            <th>Last 7 Days</th>
                        </tr>
                    </thead>
                    <tbody>
                        {investmentData.map((investment, index) => (
                            <tr key={investment.id}>
                                <td className='text-white'>{investment.id}</td>
                                <td className='text-white'>{investment.name}</td>
                                <td className='text-white'>{investment.price}</td>
                                <td className='text-white'>{investment.volume}</td>
                                <td className='text-white'>{investment.last7Days}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <datalist id="cryptoList">
                <option>Bitcoin BTC</option>
                <option>Ethereum ETH</option>
                <option>BNB BNB</option>
                <option>XRP XRP</option>
                <option>Cardano ADA</option>
                <option>Dogecoin DOGE</option>
                <option>Polygon MATIC</option>
            </datalist>
        </div>
    )
}

export default Home;