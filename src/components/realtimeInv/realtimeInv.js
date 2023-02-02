import React from 'react';

const home = () => {
    return (
        <div className='flex flex-row bg-black-200 w-8/12 xl:h-def mx-auto my-6 justify-center rounded-lg'>
            <div className='flex flex-col bg-black-100 w-1/3 m-6 mr-0 rounded-lg py-12'>
                <form>
                    <div>
                        <label htmlFor='amount' className='flex text-white py-6 justify-center'>How much do you want to invest?</label>
                        <input name='amount' type='number' value='100' className='rounded-tl-lg rounded-bl-lg text-center p-1'></input>
                        <select className='rounded-tr-lg rounded-br-lg p-1'>
                            <option>EUR</option>
                            <option>USD</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='crypto' className='flex text-white pt-12 pb-6 justify-center '>In which cryptocurrency?</label>

                        <input list="cryptoList" id="selectCrypto" name="crypto" size="27" autocomplete="off" className='rounded-lg p-1' />
                    </div>

                    <button className="bg-teal-300 hover:bg-teal-200 text-white font-bold py-3 px-16 mt-16 rounded-full">
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
                            <th>Price</th>
                            <th>Volume (24h)</th>
                            <th>Last 7 Days</th>
                        </tr>
                    </thead>
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

export default home;