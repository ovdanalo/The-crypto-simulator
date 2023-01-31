import React from "react";

const CryptoInfo= () => {
    return(
        <div className='flex flex-col items-center h-def w-8/12 bg-black-200 mx-auto my-12 rounded-lg '>
             <input list="cryptoList" id="selectCrypto" name="crypto" size="27" autocomplete="off" className='rounded-lg p-1 mt-8' />
            <div className='bg-black-100 w-4/5 mt-8 min-h-info rounded-lg'>

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
export default CryptoInfo;