import React, { useState } from "react";
import BTC from './cryptoAssets/BTC';
import ETH from "./cryptoAssets/ETH";
import Tether from './cryptoAssets/tether';
import BNB from './cryptoAssets/BNB';
import USDcoin from './cryptoAssets/USDcoin';
import XRP from './cryptoAssets/XRP';
import BUSD from "./cryptoAssets/BUSD";
import ADA from "./cryptoAssets/ADA";
import DOGE from "./cryptoAssets/DOGE";
import MATIC from "./cryptoAssets/MATIC";

const CryptoInfo = (props) => {

    const [selectedValue, setSelectedValue] = useState("");

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div className='flex flex-col items-center h-def w-full bg-black-200 mx-auto my-12 rounded-lg lg:w-10/12 xl:w-8/12 flex-wrap'>
            <input list="cryptoList" id="selectCrypto" name="crypto" value={selectedValue} onChange={handleChange} className='rounded-lg p-1 mt-8' />
            <div className='bg-black-100 w-full mt-8 min-h-info rounded-lg sm:w-4/5'>
                {selectedValue === "Bitcoin" && <BTC values={selectedValue} asset={props.data}/>}
                {selectedValue === "Ethereum" && <ETH values={selectedValue} asset={props.data}/>}
                {selectedValue === "Tether" && <Tether values={selectedValue} asset={props.data}/>}
                {selectedValue === "BNB" && <BNB values={selectedValue} asset={props.data}/>}
                {selectedValue === "USD Coin" && <USDcoin values={selectedValue} asset={props.data}/>}
                {selectedValue === "XRP" && <XRP values={selectedValue} asset={props.data}/>}
                {selectedValue === "Binance USD" && <BUSD values={selectedValue} asset={props.data}/>}
                {selectedValue === "Cardano" && <ADA values={selectedValue} asset={props.data}/>}
                {selectedValue === "Dogecoin" && <DOGE values={selectedValue} asset={props.data}/>}
                {selectedValue === "Polygon" && <MATIC values={selectedValue} asset={props.data}/>}
            </div>


            <datalist id="cryptoList">
                {props.data.map((crypto) => (
                    <option>{crypto.name}</option>
                ))}
            </datalist>
        </div>
    )
}
export default CryptoInfo;
