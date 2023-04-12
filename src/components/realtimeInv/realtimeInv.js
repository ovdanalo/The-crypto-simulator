import React, { useState, useEffect, useContext, useRef } from "react";
import ThemeContext from "../ThemeContext";
import { internalMemory } from "../../utilities/memory";
import Swal from "sweetalert2";
import withAuth from "./protectedRoute";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

const Realtime = ({ data }) => {
    
    const navigate = useNavigate()
    let token = localStorage.getItem('token');
    let decoded

    
    if (!token) {
        navigate('/login')
    } else {
        decoded = parseJwt(token)
    }
    
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
    const [walletData, setWalletData] = useState()
    
    const sellRef = useRef(null)
    const toEur = (amount, crypto) => {
        console.log('TOEURO', amount, crypto, data)
        const actual_crypto = data.find(d => d.id === crypto)
        return actual_crypto.current_price * amount
    }

    const toUSD = (amount, crypto) => {
        const eur = toEur(amount, crypto)
        const tether = data.find(d => d.id === 'tether')
        return eur / tether.current_price
    }

    useEffect(() => {
        async function fetchData() {
            let wallet = await axios.get('http://localhost:3000/wallet', {
                headers: {
                  'authorization': token
                }
            })

            setWalletData(wallet.data)
        }

        fetchData()

    }, [])

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
                        cryptoDataItem.price_change_percentage_24h;
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

    const handleSave = async (e) => {
        e.preventDefault();
        const { selectedCrypto, euroValue } = inputData;
        const actual_crypto = data.find(d => d.id === selectedCrypto)
        let amount
        console.log('SAVESAVE', currency)
        if (currency === 'USD') {
            const tether = data.find(d => d.id === 'tether')
            amount = parseInt((parseFloat(euroValue * tether.current_price) / actual_crypto.current_price) * 100000)
        } else {
            amount = parseInt((euroValue / actual_crypto.current_price) * 100000)
        }
        
        await axios.post('http://localhost:3000/wallet', {
            name: selectedCrypto,
            amount
        }, {
            headers: {
                'authorization': token
            }
        })
        let wallet = await axios.get('http://localhost:3000/wallet', {
                headers: {
                  'authorization': token
                }
            })

        setWalletData(wallet.data)
        setShowAdd(false);
        return
        const storedData = localStorage.getItem("cryptoData");
        let updatedData = {};
        if (storedData) {
            updatedData = JSON.parse(storedData);
        }
        const selectedCryptoData = data.find((item) => item.id === selectedCrypto);
        let crAm =
            (updatedData[selectedCrypto]?.crAm || 0) +
            parseFloat(euroValue) / selectedCryptoData.current_price;
        const moAmEur = crAm * selectedCryptoData.current_price;
        const tetherData = data.find((item) => item.id === "tether");
        let moAmUsd = (moAmEur * 1) / tetherData.current_price;
        const priceChange =
            selectedCryptoData.price_change_24h;
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

    const handleSellAll = async (e) => {
        e.preventDefault();
        const actual_amount = parseFloat(walletData.find(d => d.id === toSellCrypto).amount)
        await axios.post('http://localhost:3000/wallet/' + toSellCrypto, {
            amount: actual_amount
        }, {
            headers: {
                'authorization': token
            }
        })
        let wallet = await axios.get('http://localhost:3000/wallet', {
                headers: {
                  'authorization': token
                }
            })

        setWalletData(wallet.data)
        setShowAdd(false);
        setShowSell(false);
        setToSellCryptoAmount(0);
    }

    const handleSell = async (e) => {
        e.preventDefault();
        const actual_amount = parseFloat(walletData.find(d => d.id === toSellCrypto).amount)
        if (actual_amount < parseInt(parseFloat(toSellCryptoAmount) * 100000)) {
            setShowSell(false);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "You don't have such amount",
                confirmButtonColor: "#06d1af",
            })
            return
        }
        await axios.post('http://localhost:3000/wallet/' + toSellCrypto, {
            amount: parseInt(parseFloat(toSellCryptoAmount) * 100000)
        }, {
            headers: {
                'authorization': token
            }
        })
        let wallet = await axios.get('http://localhost:3000/wallet', {
                headers: {
                  'authorization': token
                }
            })

        setWalletData(wallet.data)
        setShowAdd(false);
        setShowSell(false);
        setToSellCryptoAmount(0);
        return
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
                selectedCryptoData.price_change_24h;

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

    const handleClickSell = (id) => {
        setToSellCrypto(id);
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
                            htmlFor='amount'
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
                            htmlFor='crypto'
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
                            className='bg-teal-300 hover:bg-teal-200 text-white font-bold py-3 px-16 mt-16 rounded-lg shadow-md shadow-teal-400'
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
                {!!decoded && (
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
                                    onClick={async () => {
                                        await axios.delete('http://localhost:3000/wallet', {
                                            headers: {
                                                'authorization': token
                                            }
                                        })
                                        let wallet = await axios.get('http://localhost:3000/wallet', {
                                                headers: {
                                                'authorization': token
                                                }
                                            })

                                        setWalletData(wallet.data)
                                    }}
                                    className='bg-red-300 hover:bg-red-200 text-white font-bold py-3 px-4  rounded-lg shadow-md shadow-red-400 mt-4 mr-4'
                                >
                                    RESET
                                </button>
                                <div>{decoded.username}</div>
                                <button
                                    onClick={() => {
                                        localStorage.removeItem('token');
                                        navigate('/')
                                    }}
                                    className='bg-red-300 hover:bg-red-200 text-white font-bold py-3 px-4  rounded-lg shadow-md shadow-red-400 mt-4 mr-4'
                                >
                                    LOGOUT
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
                                    <th className='p-2'>Total Invested</th>
                                    <th className='p-2'>Value (€)</th>
                                    <th className='p-2'>Value ($)</th>
                                    <th className='p-2 hidden md:inline-block'>
                                        Last 7 Days (%)
                                    </th>
                                    <th className='p-2'></th>
                                </tr>
                            </thead>
                            <tbody>
                                {!!data && data.length > 0 && !!walletData && walletData.length > 0 && walletData.map((w) => (
                                    <>
                                        <div className='h-3'></div>
                                        <tr
                                            className={`text-center ${isDarkTheme ? "text-white" : "text-black-100"
                                                }`}
                                            key={w.id}
                                        >
                                            <td>{w.name}</td>
                                            <td>{w.amount / 100000}</td>
                                            <td>{w.total / 100000}</td>
                                            <td>{toEur(w.amount / 100000, w.name).toFixed(2)}</td>
                                            <td>{toUSD(w.amount / 100000, w.name).toFixed(2)}</td>
                                            <td className='hidden md:inline-block'>
                                                {data.find(d => d.id === w.name).price_change_percentage_7d_in_currency.toFixed(2)}%
                                            </td>
                                            <td>
                                                <button
                                                    className='bg-teal-300 hover:bg-teal-200 text-white font-bold py-1 px-2  rounded-lg shadow-md shadow-teal-400 mr-4'
                                                    onClick={() => handleClickSell(w.id)}
                                                >
                                                    SELL
                                                </button>
                                            </td>
                                        </tr>
                                    </>
                                ))}
                                {!!data && data.length > 0 && !!walletData && walletData.length > 0 && <>
                                    <div className='h-3'></div>
                                        <tr
                                            className={`text-center ${isDarkTheme ? "text-white" : "text-black-100"
                                                }`}
                                            key="total"
                                        >
                                            <td>Totals:</td>
                                            <td>-</td>
                                            <td>{(walletData.map(w => toEur(w.total / 100000, w.name)).reduce((a, b) => a + b, 0)).toFixed(2)}€ /  
                                                {(walletData.map(w => toUSD(w.total / 100000, w.name)).reduce((a, b) => a + b, 0)).toFixed(2)}$</td>
                                            <td>{(walletData.map(w => toEur(w.amount / 100000, w.name)).reduce((a, b) => a + b, 0)).toFixed(2)}</td>
                                            <td>{(walletData.map(w => toUSD(w.amount / 100000, w.name)).reduce((a, b) => a + b, 0)).toFixed(2)}</td>
                                            <td className='hidden md:inline-block'>
                                                {((walletData.map(w => data.find(d => d.id === w.name).price_change_percentage_7d_in_currency).reduce((a, b) => a + b, 0)) / walletData.length).toFixed(2)}%
                                            </td>
                                            <td>
                                                
                                            </td>
                                        </tr>
                                </>}
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
                                    htmlFor='amount'
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
                                    htmlFor='crypto'
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
                                    className='bg-teal-300 hover:bg-teal-200 text-white font-bold py-3 px-12 mx-2 mt-16 rounded-lg shadow-md shadow-teal-400'
                                >
                                    BUY
                                </button>
                                <button
                                    onClick={cancelButton}
                                    className='bg-red-200 hover:bg-red-300 text-white font-bold py-3 px-8 mx-2 mt-16 rounded-lg shadow-md shadow-red-400'
                                >
                                    CANCEL
                                </button>
                            </div>
                        </form>

                    </div>

                )}
                <button
                    onClick={addButton}
                    className='self-center bg-teal-300 hover:bg-teal-200 text-white font-bold w-3 py-3 px-12 mt-12 mb-12 rounded-lg flex justify-center align-middle  xl:hidden shadow-md shadow-teal-400'
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

export default withAuth(Realtime);
