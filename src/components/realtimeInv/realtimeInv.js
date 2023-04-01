import React, { useState, useEffect, useContext, useRef } from "react";
import ThemeContext from "../ThemeContext";
import { internalMemory } from "../../utilities/memory";
import Swal from "sweetalert2";



const Realtime = ({ data }) => {
    const [cryptoData, setCryptoData] = useState(null);
    const [currency, setCurrency] = useState("EUR");
    const [inputData, setInputData] = useState({
        euroValue: "",
        selectedCrypto: "bitcoin",
    });
    const [showAdd, setShowAdd] = useState(false);
    const [showSell, setShowSell] = useState(false);
    const [toSellCrypto, setToSellCrypto] = useState("");
    const [toSellCryptoAmount, setToSellCryptoAmount] = useState(0);
    const [totalInvested, setTotalInvested] = useState(0);
    const [totalInvestedUsd, setTotalInvestedUsd] = useState(0);
    const [inputMoney, setInputMoney] = useState();
    const [totalEuro, setTotalEuro] = useState(0);
    const [totalUsd, setTotalUsd] = useState(0);
    const [percentuageEur, setPercentuageEur] = useState(0);

    const sellRef = useRef(null)

    useEffect(() => {
        const storedPercentage = localStorage.getItem("percentuageEur");
        if (storedPercentage) {
            setPercentuageEur(JSON.parse(storedPercentage));
        } else {
            setPercentuageEur(0);
        }
        const storedData = localStorage.getItem("cryptoData");
        if (storedData) {
            setCryptoData(JSON.parse(storedData));
        } else {
            setCryptoData({});
        }
        const storedTotal = localStorage.getItem("total");
        const storedTotalUsd = localStorage.getItem("totalUsd");

        if (storedTotal) {
            setTotalInvested(JSON.parse(storedTotal));
            setTotalInvestedUsd(JSON.parse(storedTotalUsd));
        } else {
            setTotalInvested(0);
            setTotalInvestedUsd(0);
        }
        const storedTotalEur = localStorage.getItem("totalEur");
        if (storedTotalEur) {
            setTotalEuro(JSON.parse(storedTotalEur));
        } else {
            setTotalEuro(0);
        }
    }, [data]);

    useEffect(() => {
        if (cryptoData) {
            const updatedData = { ...cryptoData };
            Object.keys(updatedData).forEach((crypto) => {
                const cryptoDataItem = data.find((item) => item.id === crypto);
                if (cryptoDataItem) {
                    const crAm = updatedData[crypto].crAm;
                    const moAmEur = crAm * cryptoDataItem.current_price;
                    const priceChange =
                        cryptoDataItem.price_change_percentage_7d_in_currency;
                    const tetherData = data.find((item) => item.id === "tether");
                    const moAmUsd = (moAmEur * 1) / tetherData.current_price;
                    updatedData[crypto] = { moAmEur, moAmUsd, crAm, priceChange };
                }
            });
            localStorage.setItem("cryptoData", JSON.stringify(updatedData));
            setCryptoData(updatedData);
        }
        // eslint-disable-next-line
    }, [data]);

    useEffect(() => {
        const existEurTotal = internalMemory.find("totalEur");
        const existInv = internalMemory.find("cryptoData");
        if (!existEurTotal && existInv) {
            const data = internalMemory.find("cryptoData");
            const moAmEurValues = Object.keys(data).map((key) => data[key].moAmEur);
            const moAmEurTotal =
                moAmEurValues.length > 0
                    ? moAmEurValues.reduce((a, b) => (a + b).toFixed(2))
                    : 0;
            internalMemory.save("totalEur", moAmEurTotal);
            setTotalEuro(moAmEurTotal);
        }
        if (existEurTotal) {
            const data = internalMemory.find("cryptoData");
            const moAmEurValues = Object.keys(data).map((key) => data[key].moAmEur);
            const moAmEurTotal = moAmEurValues.reduce((a, b) => a + b).toFixed(2);
            internalMemory.save("totalEur", moAmEurTotal);
            setTotalEuro(moAmEurTotal);
        }
        const existUsdTotal = internalMemory.find("totalUsd");
        const existInvUsd = internalMemory.find("cryptoData");
        if (!existUsdTotal && existInvUsd) {
            const data = internalMemory.find("cryptoData");
            const moAmUsdValues = Object.keys(data).map((key) => data[key].moAmUsd);
            const moAmUsdTotal =
                moAmUsdValues.length > 0
                    ? moAmUsdValues.reduce((a, b) => (a + b).toFixed(2))
                    : 0;
            internalMemory.save("totalUsd", moAmUsdTotal);
            setTotalUsd(moAmUsdTotal);
        }
        if (existUsdTotal) {
            const data = internalMemory.find("cryptoData");
            const moAmUsdValues = Object.keys(data).map((key) => data[key].moAmUsd);
            const moAmUsdTotal = moAmUsdValues.reduce((a, b) => a + b);
            internalMemory.save("totalUsd", moAmUsdTotal);
            setTotalUsd(moAmUsdTotal);
        }
    }, [cryptoData]);

    useEffect(() => {
        const existInv = internalMemory.find("cryptoData");
        const existSell = internalMemory.find("crypto-sell");
        if (existInv && existSell) {
            const earned = Object.keys(existSell)
                .map((key) => existSell[key].sell)
                .reduce((a, b) => a + b);
            console.log(earned);
            const guadagnoPercentualeEur = (
                ((parseFloat(totalEuro) + parseFloat(earned)) /
                    parseFloat(totalInvested)) *
                100 -
                100
            ).toFixed(3);
            setPercentuageEur(guadagnoPercentualeEur);
            internalMemory.save("percentuageEur", guadagnoPercentualeEur);
            console.log(guadagnoPercentualeEur);
        }
        if (existInv && !existSell) {
            const guadagnoPercentualeEur = (
                (parseFloat(totalEuro) / parseFloat(totalInvested)) * 100 -
                100
            ).toFixed(3);
            setPercentuageEur(guadagnoPercentualeEur);
            internalMemory.save("percentuageEur", guadagnoPercentualeEur);
            console.log(guadagnoPercentualeEur);
        }
    }, [totalEuro, totalInvested, percentuageEur]);

    const handleSave = (e) => {
        e.preventDefault();
        const storedData = localStorage.getItem("cryptoData");
        let updatedData = {};
        if (storedData) {
            updatedData = JSON.parse(storedData);
        }
        const { selectedCrypto, euroValue } = inputData;
        const selectedCryptoData = data.find((item) => item.id === selectedCrypto);
        let crAm =
            (updatedData[selectedCrypto]?.crAm || 0) +
            parseFloat(euroValue) / selectedCryptoData.current_price;
        const moAmEur = crAm * selectedCryptoData.current_price;
        const tetherData = data.find((item) => item.id === "tether");
        let moAmUsd = (moAmEur * 1) / tetherData.current_price;
        const priceChange =
            selectedCryptoData.price_change_percentage_7d_in_currency;
        if (currency === "USD") {
            crAm =
                (updatedData[selectedCrypto]?.crAm || 0) +
                (parseFloat(euroValue) * tetherData.current_price) /
                selectedCryptoData.current_price;
            moAmUsd =
                crAm *
                selectedCryptoData.current_price *
                (1 / tetherData.current_price);
        }

        updatedData[selectedCrypto] = { moAmEur, moAmUsd, crAm, priceChange };
        localStorage.setItem("cryptoData", JSON.stringify(updatedData));
        setCryptoData(updatedData);
        setShowAdd(false);
        const existTotal = internalMemory.find("total");
        if (existTotal) {
            const newTotal = parseFloat(inputMoney) + parseFloat(existTotal);
            internalMemory.save("total", newTotal);
            const newTotalUsd = (
                (parseFloat(inputMoney) + parseFloat(existTotal)) /
                tetherData.current_price
            ).toFixed(2);
            setTotalInvested(newTotal);
            setTotalInvestedUsd(newTotalUsd);
        } else {
            internalMemory.save("total", inputMoney);
            const inputUsd = (inputMoney / tetherData.current_price).toFixed(2);
            setTotalInvested(inputMoney);
            setTotalInvestedUsd(inputUsd);
        }
    };

    const saveToSellAmount = (e) => {
        setToSellCryptoAmount(e.target.value);
    };

    const handleSell = (e) => {
        e.preventDefault();
        const storedData = localStorage.getItem("cryptoData");
        let updatedData = {};
        if (storedData) {
            updatedData = JSON.parse(storedData);
        }
        if (updatedData[toSellCrypto]?.crAm - toSellCryptoAmount >= 0) {
            const selectedCryptoData = data.find((item) => item.id === toSellCrypto);
            let crAm = updatedData[toSellCrypto]?.crAm - toSellCryptoAmount;
            const moAmEur = crAm * selectedCryptoData.current_price;
            const tetherData = data.find((item) => item.id === "tether");
            let moAmUsd = (moAmEur * 1) / tetherData.current_price;
            const priceChange =
                selectedCryptoData.price_change_percentage_7d_in_currency;

            updatedData[toSellCrypto] = { moAmEur, moAmUsd, crAm, priceChange };
            localStorage.setItem("cryptoData", JSON.stringify(updatedData));

            const selled = toSellCryptoAmount * selectedCryptoData.current_price;
            const newTotal = (totalInvested - selled).toFixed(2);
            const newTotalUsd = (totalInvestedUsd - selled).toFixed(2);
            setTotalInvestedUsd(newTotalUsd);
            setTotalInvested(newTotal);
            internalMemory.save("total", newTotal);
            internalMemory.save("totalUsd", newTotalUsd);

            const earned = toSellCryptoAmount * selectedCryptoData.current_price;
            const storedSell = internalMemory.find("crypto-sell");
            let sellObj = {};
            if (storedSell) {
                sellObj = storedSell;
            }

            const sell = (sellObj[toSellCrypto]?.sell || 0) + earned;

            sellObj[toSellCrypto] = { sell };
            internalMemory.save(`crypto-sell`, sellObj);

            console.log(sellObj);

            setCryptoData(updatedData);
            setShowAdd(false);
            setShowSell(false);
            setToSellCryptoAmount(0);
        } else {
            setShowSell(false);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "You don't have such amount",
                confirmButtonColor: "#06d1af",
            })
        }
    };

    const addButton = () => {
        setShowAdd(true);
    };

    const handleClickSell = (crypto) => {
        setToSellCrypto(crypto);
        setShowSell(true);
    };

    const cancelButton = () => {
        setShowAdd(false);
    };

    const handleCancel = () => {
        setShowSell(false);
    };

    const { isDarkTheme } = useContext(ThemeContext);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (sellRef.current && !sellRef.current.contains(event.target)) {
                setShowSell(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [sellRef]);

    const nFormatter = (num) => {
        const lookup = [
            { value: 1e-6, symbol: " micro"},
            { value: 1e-3, symbol: " milli"},
            { value: 1, symbol: " " },
            { value: 1e3, symbol: " k" },
            { value: 1e6, symbol: " Mln" },
            { value: 1e9, symbol: " Bln" },
            { value: 1e12, symbol: " Tln" },
            { value: 1e15, symbol: " Tld" },
        ];
        const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;

        var item = lookup
            .slice()
            .reverse()
            .find(function (item) {
                return num >= item.value;
            });
        return item
            ? (num / item.value).toFixed(2).replace(rx, "$1") + item.symbol
            : "0";
    };



    return (
        <div
            className={`flex flex-row  w-full md:w-10/12 xl:w-8/12 h-def mx-auto my-6 justify-center rounded-lg ${isDarkTheme ? "bg-black-200" : "bg-white-mode-300"
                }`}
        >
            <div
                className={`xl:flex flex-col bg-black-100 w-1/3 m-6 mr-0 rounded-lg py-12 hidden ${isDarkTheme ? "bg-black-100" : "bg-white-mode-200"
                    }`}
            >
                <form>
                    <div>
                        <label
                            for='amount'
                            className={`flex py-6 justify-center ${isDarkTheme ? "text-white" : "text-black-100"
                                }`}
                        >
                            How much do you want to invest?
                        </label>
                        <div className="flex justify-center">
                            <input
                                name='amount'
                                id='inputAmount'
                                type='number'
                                className={`rounded-tl-lg rounded-bl-lg text-center p-1  shadow focus:outline-none focus:ring-2  focus:border-transparent ${isDarkTheme
                                    ? "focus:ring-teal-300 bg-teal-100"
                                    : "focus:ring-black-100 bg-white-mode-100"
                                    }`}
                                onChange={(e) => {
                                    setInputData({ ...inputData, euroValue: e.target.value });
                                    const total = e.target.value;
                                    setInputMoney(parseFloat(total));
                                }}
                            ></input>
                            <select
                                id='money'
                                onChange={(event) => setCurrency(event.target.value)}
                                className={`rounded-tr-lg rounded-br-lg justify-center p-1  shadow ${isDarkTheme ? "bg-teal-100" : "bg-white-mode-100"
                                    }`}
                            >
                                <option>EUR</option>
                                <option>USD</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label
                            for='crypto'
                            className={`flex pt-12 pb-6 justify-center ${isDarkTheme ? "text-white" : "text-black-100"
                                }`}
                        >
                            In which cryptocurrency?
                        </label>
                        <div className='flex justify-center'>
                            <select
                                id='selectCrypto'
                                name='crypto'
                                onChange={(e) =>
                                    setInputData({ ...inputData, selectedCrypto: e.target.value })
                                }
                                className={`rounded-tl-lg rounded-lg text-center p-1 w-64 shadow focus:outline-none focus:ring-2  focus:border-transparent ${isDarkTheme
                                    ? "focus:ring-teal-300 bg-teal-100"
                                    : "focus:ring-black-100 bg-white-mode-100"
                                    }`}
                            >
                                <option value=''>Select a cryptocurrency</option>
                                {/* Map over the data array to create options for the select element */}
                                {data.map((crypto) => (
                                    <option>{crypto.id}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button
                            onClick={handleSave}
                            class='bg-teal-300 hover:bg-teal-200 text-white font-bold py-3 px-16 mt-16 rounded-lg shadow-md shadow-teal-400'
                        >
                            BUY
                        </button>
                    </div>
                </form>
            </div>
            <div
                className={`flex flex-col w-full xl:w-2/3 m-6 rounded-lg ${isDarkTheme ? "bg-black-100" : "bg-white-mode-200"
                    }`}
            >
                {cryptoData && Object.keys(cryptoData).length > 0 && (
                    <div>
                        <div className='flex justify-between'>
                            <div className='flex flex-col items-start justify-end p-3 w-max rounded-lg text-teal-50'>
                                <div
                                    className={`${isDarkTheme ? "text-white" : "text-black-100"} text-sm sm:text-md md:text-lg`}
                                >
                                    Total Invested:
                                    {totalInvested}€ / {parseFloat(totalInvestedUsd).toFixed(2)}$
                                </div>
                                <div className={`${isDarkTheme ? "text-white" : "text-black-100"} text-sm sm:text-md md:text-lg`}>
                                    You Now Have: <span className={`${totalEuro >= totalInvested
                                        ? "text-green-100"
                                        : "text-red-400"
                                        }`}>{totalEuro}€ / {parseFloat(totalUsd).toFixed(2)}$</span>
                                </div>
                                <div className={`${isDarkTheme ? "text-white" : "text-black-100"} text-sm sm:text-md md:text-lg`}>
                                    Difference: <span className={`${percentuageEur >= 0 ? "text-green-100" : "text-red-400"
                                        }`}>{percentuageEur}%</span>
                                </div>
                            </div>
                            <div>
                                <button
                                    onClick={() => {
                                        setCryptoData(null);

                                        localStorage.clear();
                                    }}
                                    className='bg-red-300 hover:bg-red-200 text-white font-bold py-3 px-4  rounded-lg shadow-md shadow-red-400 mt-4 mr-4'
                                >
                                    RESET
                                </button>
                            </div>
                        </div>
                        <table className='mx-auto w-full'>
                            <thead>
                                <div className='h-3'></div>
                                <tr
                                    className={`text-center border-b-2 ${isDarkTheme ? "text-white" : "text-black-100"
                                        }`}
                                >
                                    <th className='p-2'>Crypto</th>
                                    <th className='p-2'>Amount</th>
                                    <th className='p-2'>Value (€)</th>
                                    <th className='p-2'>Value ($)</th>
                                    <th className='p-2 hidden md:inline-block'>
                                        Last 7 Days (%)
                                    </th>
                                    <th className='p-2'></th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(cryptoData).map((key) => (
                                    <>
                                        {console.log(key)}
                                        <div className='h-3'></div>
                                        <tr
                                            className={`text-center ${isDarkTheme ? "text-white" : "text-black-100"
                                                }`}
                                            key={key}
                                        >
                                            <td>{key}</td>
                                            {key === "bitcoin" && (
                                                <>
                                                    <td>{nFormatter(cryptoData[key].crAm)}</td>
                                                    <td>{cryptoData[key].moAmEur.toFixed(2)}</td>
                                                    <td>{cryptoData[key].moAmUsd.toFixed(2)}</td>
                                                    <td className='hidden md:inline-block'>
                                                        {cryptoData[key].priceChange.toFixed(2)}%
                                                    </td>
                                                    <td>
                                                        <button
                                                            className='bg-teal-300 hover:bg-teal-200 text-white font-bold py-1 px-2  rounded-lg shadow-md shadow-teal-400 mr-4'
                                                            onClick={() => handleClickSell(key)}
                                                        >
                                                            SELL
                                                        </button>
                                                    </td>
                                                </>
                                            )}
                                            {key === "ethereum" && (
                                                <>
                                                    <td>{nFormatter(cryptoData[key].crAm)}</td>
                                                    <td>{cryptoData[key].moAmEur.toFixed(2)}</td>
                                                    <td>{cryptoData[key].moAmUsd.toFixed(2)}</td>
                                                    <td className='hidden md:inline-block'>
                                                        {cryptoData[key].priceChange.toFixed(2)}%
                                                    </td>
                                                    <td>
                                                        <button
                                                            className='bg-teal-300 hover:bg-teal-200 text-white font-bold py-1 px-2  rounded-lg shadow-md shadow-teal-400 mr-4'
                                                            onClick={() => handleClickSell(key)}
                                                        >
                                                            SELL
                                                        </button>
                                                    </td>
                                                </>
                                            )}
                                            {key === "tether" && (
                                                <>
                                                    <td>{nFormatter(cryptoData[key].crAm)}</td>
                                                    <td>{cryptoData[key].moAmEur.toFixed(2)}</td>
                                                    <td>{cryptoData[key].moAmUsd.toFixed(2)}</td>
                                                    <td className='hidden md:inline-block'>
                                                        {cryptoData[key].priceChange.toFixed(2)}%
                                                    </td>
                                                    <td>
                                                        <button
                                                            className='bg-teal-300 hover:bg-teal-200 text-white font-bold py-1 px-2  rounded-lg shadow-md shadow-teal-400 mr-4'
                                                            onClick={() => handleClickSell(key)}
                                                        >
                                                            SELL
                                                        </button>
                                                    </td>
                                                </>
                                            )}
                                            {key === "binancecoin" && (
                                                <>
                                                    <td>{nFormatter(cryptoData[key].crAm)}</td>
                                                    <td>{cryptoData[key].moAmEur.toFixed(2)}</td>
                                                    <td>{cryptoData[key].moAmUsd.toFixed(2)}</td>
                                                    <td className='hidden md:inline-block'>
                                                        {cryptoData[key].priceChange.toFixed(2)}%
                                                    </td>
                                                    <td>
                                                        <button
                                                            className='bg-teal-300 hover:bg-teal-200 text-white font-bold py-1 px-2  rounded-lg shadow-md shadow-teal-400 mr-4'
                                                            onClick={() => handleClickSell(key)}
                                                        >
                                                            SELL
                                                        </button>
                                                    </td>
                                                </>
                                            )}
                                            {key === "usd-coin" && (
                                                <>
                                                    <td>{nFormatter(cryptoData[key].crAm)}</td>
                                                    <td>{cryptoData[key].moAmEur.toFixed(2)}</td>
                                                    <td>{cryptoData[key].moAmUsd.toFixed(2)}</td>
                                                    <td className='hidden md:inline-block'>
                                                        {cryptoData[key].priceChange.toFixed(2)}%
                                                    </td>
                                                    <td>
                                                        <button
                                                            className='bg-teal-300 hover:bg-teal-200 text-white font-bold py-1 px-2  rounded-lg shadow-md shadow-teal-400 mr-4'
                                                            onClick={() => handleClickSell(key)}
                                                        >
                                                            SELL
                                                        </button>
                                                    </td>
                                                </>
                                            )}
                                            {key === "ripple" && (
                                                <>
                                                    <td>{nFormatter(cryptoData[key].crAm)}</td>
                                                    <td>{cryptoData[key].moAmEur.toFixed(2)}</td>
                                                    <td>{cryptoData[key].moAmUsd.toFixed(2)}</td>
                                                    <td className='hidden md:inline-block'>
                                                        {cryptoData[key].priceChange.toFixed(2)}%
                                                    </td>
                                                    <td>
                                                        <button
                                                            className='bg-teal-300 hover:bg-teal-200 text-white font-bold py-1 px-2  rounded-lg shadow-md shadow-teal-400 mr-4'
                                                            onClick={() => handleClickSell(key)}
                                                        >
                                                            SELL
                                                        </button>
                                                    </td>
                                                </>
                                            )}
                                            {key === "okb" && (
                                                <>
                                                    <td>{nFormatter(cryptoData[key].crAm)}</td>
                                                    <td>{cryptoData[key].moAmEur.toFixed(2)}</td>
                                                    <td>{cryptoData[key].moAmUsd.toFixed(2)}</td>
                                                    <td className='hidden md:inline-block'>
                                                        {cryptoData[key].priceChange.toFixed(2)}%
                                                    </td>
                                                    <td>
                                                        <button
                                                            className='bg-teal-300 hover:bg-teal-200 text-white font-bold py-1 px-2  rounded-lg shadow-md shadow-teal-400 mr-4'
                                                            onClick={() => handleClickSell(key)}
                                                        >
                                                            SELL
                                                        </button>
                                                    </td>
                                                </>
                                            )}
                                            {key === "cardano" && (
                                                <>
                                                    <td>{nFormatter(cryptoData[key].crAm)}</td>
                                                    <td>{cryptoData[key].moAmEur.toFixed(2)}</td>
                                                    <td>{cryptoData[key].moAmUsd.toFixed(2)}</td>
                                                    <td className='hidden md:inline-block'>
                                                        {cryptoData[key].priceChange.toFixed(2)}%
                                                    </td>
                                                    <td>
                                                        <button
                                                            className='bg-teal-300 hover:bg-teal-200 text-white font-bold py-1 px-2  rounded-lg shadow-md shadow-teal-400 mr-4'
                                                            onClick={() => handleClickSell(key)}
                                                        >
                                                            SELL
                                                        </button>
                                                    </td>
                                                </>
                                            )}
                                            {key === "matic-network" && (
                                                <>
                                                    <td>{nFormatter(cryptoData[key].crAm)}</td>
                                                    <td>{cryptoData[key].moAmEur.toFixed(2)}</td>
                                                    <td>{cryptoData[key].moAmUsd.toFixed(2)}</td>
                                                    <td className='hidden md:inline-block'>
                                                        {cryptoData[key].priceChange.toFixed(2)}%
                                                    </td>
                                                    <td>
                                                        <button
                                                            className='bg-teal-300 hover:bg-teal-200 text-white font-bold py-1 px-2  rounded-lg shadow-md shadow-teal-400 mr-4'
                                                            onClick={() => handleClickSell(key)}
                                                        >
                                                            SELL
                                                        </button>
                                                    </td>
                                                </>
                                            )}
                                            {key === "dogecoin" && (
                                                <>
                                                    <td>{nFormatter(cryptoData[key].crAm)}</td>
                                                    <td>{cryptoData[key].moAmEur.toFixed(2)}</td>
                                                    <td>{cryptoData[key].moAmUsd.toFixed(2)}</td>
                                                    <td className='hidden md:inline-block'>
                                                        {cryptoData[key].priceChange.toFixed(2)}%
                                                    </td>
                                                    <td>
                                                        <button
                                                            className='bg-teal-300 hover:bg-teal-200 text-white font-bold py-1 px-2  rounded-lg shadow-md shadow-teal-400 mr-4'
                                                            onClick={() => handleClickSell(key)}
                                                        >
                                                            SELL
                                                        </button>
                                                    </td>
                                                </>
                                            )}
                                            {key === "staked-ether" && (
                                                <>
                                                    <td>{nFormatter(cryptoData[key].crAm)}</td>
                                                    <td>{cryptoData[key].moAmEur.toFixed(2)}</td>
                                                    <td>{cryptoData[key].moAmUsd.toFixed(2)}</td>
                                                    <td className='hidden md:inline-block'>
                                                        {cryptoData[key].priceChange.toFixed(2)}%
                                                    </td>
                                                    <td>
                                                        <button
                                                            className='bg-teal-300 hover:bg-teal-200 text-white font-bold py-1 px-2  rounded-lg shadow-md shadow-teal-400 mr-4'
                                                            onClick={() => handleClickSell(key)}
                                                        >
                                                            SELL
                                                        </button>
                                                    </td>
                                                </>
                                            )}
                                            {key === "solana" && (
                                                <>
                                                    <td>{nFormatter(cryptoData[key].crAm)}</td>
                                                    <td>{cryptoData[key].moAmEur.toFixed(2)}</td>
                                                    <td>{cryptoData[key].moAmUsd.toFixed(2)}</td>
                                                    <td className='hidden md:inline-block'>
                                                        {cryptoData[key].priceChange.toFixed(2)}%
                                                    </td>
                                                    <td>
                                                        <button
                                                            className='bg-teal-300 hover:bg-teal-200 text-white font-bold py-1 px-2  rounded-lg shadow-md shadow-teal-400 mr-4'
                                                            onClick={() => handleClickSell(key)}
                                                        >
                                                            SELL
                                                        </button>
                                                    </td>
                                                </>
                                            )}
                                            {key === "polkadot" && (
                                                <>
                                                    <td>{nFormatter(cryptoData[key].crAm)}</td>
                                                    <td>{cryptoData[key].moAmEur.toFixed(2)}</td>
                                                    <td>{cryptoData[key].moAmUsd.toFixed(2)}</td>
                                                    <td className='hidden md:inline-block'>
                                                        {cryptoData[key].priceChange.toFixed(2)}%
                                                    </td>
                                                    <td>
                                                        <button
                                                            className='bg-teal-300 hover:bg-teal-200 text-white font-bold py-1 px-2  rounded-lg shadow-md shadow-teal-400 mr-4'
                                                            onClick={() => handleClickSell(key)}
                                                        >
                                                            SELL
                                                        </button>
                                                    </td>
                                                </>
                                            )}
                                            {key === "dai" && (
                                                <>
                                                    <td>{nFormatter(cryptoData[key].crAm)}</td>
                                                    <td>{cryptoData[key].moAmEur.toFixed(2)}</td>
                                                    <td>{cryptoData[key].moAmUsd.toFixed(2)}</td>
                                                    <td className='hidden md:inline-block'>
                                                        {cryptoData[key].priceChange.toFixed(2)}%
                                                    </td>
                                                    <td>
                                                        <button
                                                            className='bg-teal-300 hover:bg-teal-200 text-white font-bold py-1 px-2  rounded-lg shadow-md shadow-teal-400 mr-4'
                                                            onClick={() => handleClickSell(key)}
                                                        >
                                                            SELL
                                                        </button>
                                                    </td>
                                                </>
                                            )}
                                            {key === "shiba-inu" && (
                                                <>
                                                    <td>{nFormatter(cryptoData[key].crAm)}</td>
                                                    <td>{cryptoData[key].moAmEur.toFixed(2)}</td>
                                                    <td>{cryptoData[key].moAmUsd.toFixed(2)}</td>
                                                    <td className='hidden md:inline-block'>
                                                        {cryptoData[key].priceChange.toFixed(2)}%
                                                    </td>
                                                    <td>
                                                        <button
                                                            className='bg-teal-300 hover:bg-teal-200 text-white font-bold py-1 px-2  rounded-lg shadow-md shadow-teal-400 mr-4'
                                                            onClick={() => handleClickSell(key)}
                                                        >
                                                            SELL
                                                        </button>
                                                    </td>
                                                </>
                                            )}
                                            {key === "tron" && (
                                                <>
                                                    <td>{nFormatter(cryptoData[key].crAm)}</td>
                                                    <td>{cryptoData[key].moAmEur.toFixed(2)}</td>
                                                    <td>{cryptoData[key].moAmUsd.toFixed(2)}</td>
                                                    <td className='hidden md:inline-block'>
                                                        {cryptoData[key].priceChange.toFixed(2)}%
                                                    </td>
                                                    <td>
                                                        <button
                                                            className='bg-teal-300 hover:bg-teal-200 text-white font-bold py-1 px-2  rounded-lg shadow-md shadow-teal-400 mr-4'
                                                            onClick={() => handleClickSell(key)}
                                                        >
                                                            SELL
                                                        </button>
                                                    </td>
                                                </>
                                            )}
                                            {key === "litecoin" && (
                                                <>
                                                    <td>{nFormatter(cryptoData[key].crAm)}</td>
                                                    <td>{cryptoData[key].moAmEur.toFixed(2)}</td>
                                                    <td>{cryptoData[key].moAmUsd.toFixed(2)}</td>
                                                    <td className='hidden md:inline-block'>
                                                        {cryptoData[key].priceChange.toFixed(2)}%
                                                    </td>
                                                    <td>
                                                        <button
                                                            className='bg-teal-300 hover:bg-teal-200 text-white font-bold py-1 px-2  rounded-lg shadow-md shadow-teal-400 mr-4'
                                                            onClick={() => handleClickSell(key)}
                                                        >
                                                            SELL
                                                        </button>
                                                    </td>
                                                </>
                                            )}
                                            {key === "avalanche-2" && (
                                                <>
                                                    <td>{nFormatter(cryptoData[key].crAm)}</td>
                                                    <td>{cryptoData[key].moAmEur.toFixed(2)}</td>
                                                    <td>{cryptoData[key].moAmUsd.toFixed(2)}</td>
                                                    <td className='hidden md:inline-block'>
                                                        {cryptoData[key].priceChange.toFixed(2)}%
                                                    </td>
                                                    <td>
                                                        <button
                                                            className='bg-teal-300 hover:bg-teal-200 text-white font-bold py-1 px-2  rounded-lg shadow-md shadow-teal-400 mr-4'
                                                            onClick={() => handleClickSell(key)}
                                                        >
                                                            SELL
                                                        </button>
                                                    </td>
                                                </>
                                            )}
                                            {key === "uniswap" && (
                                                <>
                                                    <td>{cryptoData[key].crAm.toFixed(8)}</td>
                                                    <td>{cryptoData[key].moAmEur.toFixed(2)}</td>
                                                    <td>{cryptoData[key].moAmUsd.toFixed(2)}</td>
                                                    <td className='hidden md:inline-block'>
                                                        {cryptoData[key].priceChange.toFixed(2)}%
                                                    </td>
                                                    <td>
                                                        <button
                                                            className='bg-teal-300 hover:bg-teal-200 text-white font-bold py-1 px-2  rounded-lg shadow-md shadow-teal-400 mr-4'
                                                            onClick={() => handleClickSell(key)}
                                                        >
                                                            SELL
                                                        </button>
                                                    </td>
                                                </>
                                            )}
                                            {key === "the-open-network" && (
                                                <>
                                                    <td>{cryptoData[key].crAm.toFixed(8)}</td>
                                                    <td>{cryptoData[key].moAmEur.toFixed(2)}</td>
                                                    <td>{cryptoData[key].moAmUsd.toFixed(2)}</td>
                                                    <td className='hidden md:inline-block'>
                                                        {cryptoData[key].priceChange.toFixed(2)}%
                                                    </td>
                                                    <td>
                                                        <button
                                                            className='bg-teal-300 hover:bg-teal-200 text-white font-bold py-1 px-2  rounded-lg shadow-md shadow-teal-400 mr-4'
                                                            onClick={() => handleClickSell(key)}
                                                        >
                                                            SELL
                                                        </button>
                                                    </td>
                                                </>
                                            )}
                                        </tr>
                                    </>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {showAdd && (
                    <div
                        className={`mt-10 p-10 self-center flex-col  w-65 rounded-lg xl:hidden z-10 border-solid border-2  absolute ${isDarkTheme
                            ? "bg-black-100 border-teal-200"
                            : "bg-white-mode-300 border-black-400"
                            }`}
                    >
                        <form>
                            <div>
                                <label
                                    for='amount'
                                    className={`flex py-6 justify-center ${isDarkTheme ? "text-white" : "text-black-100"
                                        }`}
                                >
                                    How much do you want to invest?
                                </label>
                                <div className="flex justify-center">
                                    <input
                                        name='amount'
                                        id='inputAmount'
                                        type='number'
                                        className={`rounded-tl-lg rounded-bl-lg text-center p-1  shadow focus:outline-none focus:ring-2  focus:border-transparent ${isDarkTheme
                                            ? "focus:ring-teal-300 bg-teal-100"
                                            : "focus:ring-black-100 bg-white-mode-100"
                                            }`}
                                        onChange={(e) => {
                                            setInputData({ ...inputData, euroValue: e.target.value });
                                            const total = e.target.value;
                                            setInputMoney(parseFloat(total));
                                        }}
                                    ></input>
                                    <select
                                        id='money'
                                        onChange={(event) => setCurrency(event.target.value)}
                                        className={`rounded-tr-lg rounded-br-lg justify-center p-1  shadow ${isDarkTheme ? "bg-teal-100" : "bg-white-mode-100"
                                            }`}
                                    >
                                        <option>EUR</option>
                                        <option>USD</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label
                                    for='crypto'
                                    className={`flex pt-12 pb-6 justify-center ${isDarkTheme ? "text-white" : "text-black-100"
                                        }`}
                                >
                                    In which cryptocurrency?
                                </label>
                                <div className='flex justify-center'>
                                    <select
                                        id='selectCrypto'
                                        name='crypto'
                                        onChange={(e) =>
                                            setInputData({ ...inputData, selectedCrypto: e.target.value })
                                        }
                                        className={`rounded-tl-lg rounded-lg text-center p-1 w-64 shadow focus:outline-none focus:ring-2  focus:border-transparent ${isDarkTheme
                                            ? "focus:ring-teal-300 bg-teal-100"
                                            : "focus:ring-black-100 bg-white-mode-100"
                                            }`}
                                    >
                                        <option value=''>Select a cryptocurrency</option>
                                        {/* Map over the data array to create options for the select element */}
                                        {data.map((crypto) => (
                                            <option>{crypto.id}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <button
                                    onClick={handleSave}
                                    class='bg-teal-300 hover:bg-teal-200 text-white font-bold py-3 px-12 mx-2 mt-16 rounded-lg shadow-md shadow-teal-400'
                                >
                                    BUY
                                </button>
                                <button
                                    onClick={cancelButton}
                                    class='bg-red-200 hover:bg-red-300 text-white font-bold py-3 px-8 mx-2 mt-16 rounded-lg shadow-md shadow-red-400'
                                >
                                    CANCEL
                                </button>
                            </div>
                        </form>

                    </div>

                )}
                <button
                    onClick={addButton}
                    class='self-center bg-teal-300 hover:bg-teal-200 text-white font-bold w-3 py-3 px-12 mt-12 mb-12 rounded-lg flex justify-center align-middle  xl:hidden shadow-md shadow-teal-400'
                >
                    ADD
                </button>
            </div>
            {!!showSell && (
                <div className='z-20'>
                    <div ref={sellRef} style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} className={`top-14 right-18 p-10 self-center flex-col  w-65 rounded-lg z-10 border-solid border-2  absolute ${isDarkTheme ? "bg-black-200 border-teal-200" : "bg-white-mode-300 border-black-400"}`}>
                        <label htmlFor='toSellCryptoAmount' className={` font-bold mb-4 ${isDarkTheme ? "text-white" : "text-black-100"}`}>Enter amount to sell:</label>
                        <div className='flex flex-col items-center sm:flex-row sm:items-center'>
                            <input
                                id='toSellCryptoAmount'
                                type='number'
                                value={toSellCryptoAmount}
                                onChange={saveToSellAmount}
                                className={`w-full rounded-md py-2 px-3  m-4 text-gray-800 font-medium focus:outline-none focus:ring-2 focus:border-transparent ${isDarkTheme
                                    ? "bg-teal-100 focus:ring-teal-300"
                                    : "bg-white-mode-100 focus:ring-black-100"
                                    }`}
                            ></input>
                        </div>
                        <div className='flex flex-col sm:flex-row justify-center mt-8'>
                            <button
                                onClick={handleSell}
                                className='w-full max-w-xs bg-teal-300 hover:bg-teal-200 text-white font-bold py-3 px-6 rounded-lg shadow-md mb-4 sm:mb-0 sm:mr-4'
                            >
                                SELL
                            </button>
                            <button
                                onClick={handleCancel}
                                className='w-full max-w-xs bg-red-300 hover:bg-red-200 text-white font-bold py-3 px-6 rounded-lg shadow-md'
                            >
                                CANCEL
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <datalist id='cryptoList'>
                {data.map((crypto) => (
                    <option>{crypto.id}</option>
                ))}
            </datalist>
        </div>
    );
};

export default Realtime;
