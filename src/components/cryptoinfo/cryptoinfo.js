import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";

// Importing all crypto assets
import BTC from './cryptoAssets/BTC';
import ETH from "./cryptoAssets/ETH";
import Tether from './cryptoAssets/tether';
import BNB from './cryptoAssets/BNB';
import USDcoin from './cryptoAssets/USDcoin';
import XRP from './cryptoAssets/XRP';
import OKB from "./cryptoAssets/OKB";
import ADA from "./cryptoAssets/ADA";
import DOGE from "./cryptoAssets/DOGE";
import MATIC from "./cryptoAssets/MATIC";

const CryptoInfo = (props) => {

    // Use the hook "useNavigate" to programmatically navigate to a different route
    const navigate = useNavigate();

    // State hook to store the selected cryptocurrency
    const [selectedCrypto, setSelectedCrypto] = useState(null);

    // Function to handle the select element's change event
    const handleChange = (event) => {
        const selectedValue = event.target.value;
        // If no cryptocurrency is selected, set the selectedCrypto state to null
        if (selectedValue === "") {
            setSelectedCrypto(null);
        } else {
            // Find the selected cryptocurrency data from the props data array
            const cryptoData = props.data.find((crypto) => crypto.symbol === selectedValue);
            setSelectedCrypto(cryptoData);
        }
    };

    // Effect hook that runs when the selectedCrypto state changes
    useEffect(() => {
        if (selectedCrypto) {
            // Programmatically navigate to the selected cryptocurrency's route
            navigate(`${selectedCrypto.symbol}`);
        }
    }, [selectedCrypto, navigate]);

    return (
        <div className='flex flex-col items-center h-def w-full bg-black-200 mx-auto my-12 rounded-lg lg:w-10/12 xl:w-8/12 flex-wrap'>
            <select id="selectCrypto" name="crypto" onChange={handleChange} className='rounded-lg p-1 mt-8'>
                <option value="">Select a cryptocurrency</option>
                {/* Map over the data array to create options for the select element */}
                {props.data.map((crypto) => (
                    <option key={crypto.symbol} value={crypto.symbol}>{crypto.name}</option>
                ))}
            </select>
            <div className='bg-black-100 w-full mt-8 min-h-info rounded-lg sm:w-4/5'>
                {/* If a cryptocurrency is selected, render the corresponding component */}
                {selectedCrypto ? (
                    <Routes>
                        <Route path="/:id" element={<CryptoAsset data={props.data} selectedCrypto={selectedCrypto} />} />
                    </Routes>
                ) : (
                    // If no cryptocurrency is selected, display a message
                    <div className='text-white mt-16 text-xl'>Please select a cryptocurrency.</div>
                )}
            </div>
        </div>
    );
};

// Component to render the selected cryptocurrency's information
const CryptoAsset = (props) => {

    // If data hasn't been loaded yet, display a loading message
    if (!props.data) {
        return <div>Loading...</div>;
    }
    const { selectedCrypto } = props;

    // If no cryptocurrency is selected, navigate to the homepage
    if (!selectedCrypto) {
        return <Navigate to="/" />;
    }

    // Render the corresponding component based on the selected cryptocurrency
    switch (selectedCrypto.symbol) {
        case "btc":
            return <BTC values={selectedCrypto.name} asset={props.data} />;
        case "eth":
            return <ETH values={selectedCrypto.name} asset={props.data} />;
        case "usdt":
            return <Tether values={selectedCrypto.name} asset={props.data} />;
        case "bnb":
            return <BNB values={selectedCrypto.name} asset={props.data} />;
        case "usdc":
            return <USDcoin values={selectedCrypto.name} asset={props.data} />;
        case "xrp":
            return <XRP values={selectedCrypto.name} asset={props.data} />;
        case "okb":
            return <OKB values={selectedCrypto.name} asset={props.data} />;
        case "ada":
            return <ADA values={selectedCrypto.name} asset={props.data} />;
        case "doge":
            return <DOGE values={selectedCrypto.name} asset={props.data} />;
        case "matic":
            return <MATIC values={selectedCrypto.name} asset={props.data} />;
        default:
            return <Navigate to="/" />;
    }
}

export default CryptoInfo;