import { useState, useEffect } from "react";

const Realtime = ({ data }) => {
  const [cryptoData, setCryptoData] = useState(null);
  const [currency, setCurrency] = useState('EUR');
  const [inputData, setInputData] = useState({
    euroValue: "",
    selectedCrypto: "bitcoin",
  });
  const [showAdd, setShowAdd] = useState(false);
  const [showSell, setShowSell] = useState(false);
  const [toSellCrypto, setToSellCrypto] = useState('');
  const [toSellCryptoAmount, setToSellCryptoAmount] = useState(0);

  useEffect(() => {
    const storedData = localStorage.getItem("cryptoData");
    if (storedData) {
      setCryptoData(JSON.parse(storedData));
    } else {
      setCryptoData({});
    }
  }, []);

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
          const moAmUsd = moAmEur * 1 / tetherData.current_price;
          updatedData[crypto] = { moAmEur, moAmUsd, crAm, priceChange };
        }
      });
      localStorage.setItem("cryptoData", JSON.stringify(updatedData));
      setCryptoData(updatedData);
    }
    // eslint-disable-next-line
  }, [data]);

  const handleSave = (e) => {
    e.preventDefault()
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
    let moAmUsd = moAmEur * 1 / tetherData.current_price;
    const priceChange = selectedCryptoData.price_change_percentage_7d_in_currency;
    if (currency === 'USD') {
      crAm = (updatedData[selectedCrypto]?.crAm || 0) +
        parseFloat(euroValue) * tetherData.current_price / selectedCryptoData.current_price;
      moAmUsd = crAm * selectedCryptoData.current_price * (1 / tetherData.current_price);
    }

    updatedData[selectedCrypto] = { moAmEur, moAmUsd, crAm, priceChange };
    localStorage.setItem("cryptoData", JSON.stringify(updatedData));
    setCryptoData(updatedData);
    setShowAdd(false)
  };

  const saveToSellAmount = (e) => {
    setToSellCryptoAmount(e.target.value);
  }

  const handleSell = (e) => {
    e.preventDefault()
    const storedData = localStorage.getItem("cryptoData");
    let updatedData = {};
    if (storedData) {
      updatedData = JSON.parse(storedData);
    }
    if (updatedData[toSellCrypto]?.crAm - toSellCryptoAmount >= 0) {
      const selectedCryptoData = data.find((item) => item.id === toSellCrypto);
      let crAm =
        (updatedData[toSellCrypto]?.crAm) - toSellCryptoAmount;
        const moAmEur = crAm * selectedCryptoData.current_price;
        const tetherData = data.find((item) => item.id === "tether");
        let moAmUsd = moAmEur * 1 / tetherData.current_price;
        const priceChange = selectedCryptoData.price_change_percentage_7d_in_currency;

      updatedData[toSellCrypto] = { moAmEur, moAmUsd, crAm, priceChange };
      localStorage.setItem("cryptoData", JSON.stringify(updatedData));
      setCryptoData(updatedData);
      setShowAdd(false)
    } else alert("You don't have such amount!")

  };

  const addButton = () => {
    setShowAdd(true)
  }

  const handleClickSell = (crypto) => {
    setToSellCrypto(crypto);
    setShowSell(true);
  }

  const cancelButton = () => {
    setShowAdd(false);
  }

  return (
    <div className='flex flex-row bg-black-200 w-full md:w-10/12 xl:w-8/12 h-def mx-auto my-6 justify-center rounded-lg'>
      <div className='xl:flex flex-col bg-black-100 w-1/3 m-6 mr-0 rounded-lg py-12 hidden'>
        <form>
          <div>
            <label for='amount' className='flex text-white py-6 justify-center'>
              How much do you want to invest?
            </label>
            <input
              name='amount'
              id='inputAmount'
              type='number'
              className='rounded-tl-lg rounded-bl-lg text-center p-1 bg-teal-100 shadow'
              onChange={(e) =>
                setInputData({ ...inputData, euroValue: e.target.value })
              }
            ></input>
            <select id='money' onChange={(event) => setCurrency(event.target.value)} className='rounded-tr-lg rounded-br-lg p-1 bg-teal-100 shadow'>
              <option>EUR</option>
              <option>USD</option>
            </select>
          </div>
          <div>
            <label
              for='crypto'
              className='flex text-white pt-12 pb-6 justify-center '
            >
              In which cryptocurrency?
            </label>

            <input
              list='cryptoList'
              id='selectCrypto'
              name='crypto'
              size='27'
              autocomplete='off'
              className='rounded-lg p-1 bg-teal-100 shadow'
              onChange={(e) =>
                setInputData({ ...inputData, selectedCrypto: e.target.value })
              }
            />
          </div>

          <button
            onClick={handleSave}
            class='bg-teal-300 hover:bg-teal-200 text-white font-bold py-3 px-16 mt-16 rounded-lg shadow-md shadow-teal-400'
          >
            BUY
          </button>
        </form>
      </div>
      {!!showSell &&

        <div className='mt-10 p-10 self-center flex-col bg-black-200 w-65 rounded-lg z-10 border-solid border-2 border-teal-200 absolute'>
          <input type='number' value={toSellCryptoAmount} onChange={saveToSellAmount}></input>
          <button className="bg-teal-300 hover:bg-teal-200 text-white font-bold py-3 px-16 mt-16 rounded-lg shadow-md shadow-teal-400" onClick={handleSell}>SELL</button>
        </div>
      }
      <div className='flex flex-col bg-black-100 w-full xl:w-2/3 m-6 rounded-lg'>
        {cryptoData && Object.keys(cryptoData).length > 0 && (
          <div>
            <div className='flex justify-end'>
              <button
                onClick={() => {
                  setCryptoData(null);

                  localStorage.clear();
                }}
                className='bg-red-300 hover:bg-red-200 text-white font-bold py-3 px-4  rounded-lg shadow-md shadow-red-400 mt-4 mr-4'>
                RESET
              </button>
            </div>
            <table className='mx-auto w-full'>
              <thead>
                <div className="h-3"></div>
                <tr className='text-white border-b-2'>
                  <th className='p-2 py-6'>Cryptocurrency</th>
                  <th className="p-2">Amount</th>
                  <th className="p-2">Value (€)</th>
                  <th className="p-2">Value ($)</th>
                  <th className="p-2">Last 7 Days (%)</th>
                  <th className="p-2"></th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(cryptoData).map((key) => (
                  <>
                    {console.log(key)}
                    <div className="h-3"></div>
                    <tr className='text-white' key={key}>
                      <td>{key}</td>
                      {key === "bitcoin" && (
                        <>
                          <td>{cryptoData[key].crAm.toFixed(8)}</td>
                          <td>{cryptoData[key].moAmEur.toFixed(2)}</td>
                          <td>{cryptoData[key].moAmUsd.toFixed(2)}</td>
                          <td>{cryptoData[key].priceChange.toFixed(2)}%</td>
                          <td><button className="bg-teal-300 hover:bg-teal-200 text-white font-bold py-1 px-2  rounded-lg shadow-md shadow-teal-400 mr-4"
                            onClick={() => handleClickSell(key)}>SELL</button></td>
                        </>
                      )}
                      {key === "ethereum" && (
                        <>
                          <td>{cryptoData[key].crAm.toFixed(8)}</td>
                          <td>{cryptoData[key].moAmEur.toFixed(2)}</td>
                          <td>{cryptoData[key].moAmUsd.toFixed(2)}</td>
                          <td>{cryptoData[key].priceChange.toFixed(2)}%</td>
                          <td><button className="bg-teal-300 hover:bg-teal-200 text-white font-bold py-1 px-2  rounded-lg shadow-md shadow-teal-400 mr-4"
                            onClick={() => handleClickSell(key)}>SELL</button></td>
                        </>
                      )}
                      {key === "tether" && (
                        <>
                          <td>{cryptoData[key].crAm.toFixed(8)}</td>
                          <td>{cryptoData[key].moAmEur.toFixed(2)}</td>
                          <td>{cryptoData[key].moAmUsd.toFixed(2)}</td>
                          <td>{cryptoData[key].priceChange.toFixed(2)}%</td>
                          <td><button className="bg-teal-300 hover:bg-teal-200 text-white font-bold py-1 px-2  rounded-lg shadow-md shadow-teal-400 mr-4"
                            onClick={() => handleClickSell(key)}>SELL</button></td>
                        </>
                      )}
                      {key === "binancecoin" && (
                        <>
                          <td>{cryptoData[key].crAm.toFixed(8)}</td>
                          <td>{cryptoData[key].moAmEur.toFixed(2)}</td>
                          <td>{cryptoData[key].moAmUsd.toFixed(2)}</td>
                          <td>{cryptoData[key].priceChange.toFixed(2)}%</td>
                          <td><button className="bg-teal-300 hover:bg-teal-200 text-white font-bold py-1 px-2  rounded-lg shadow-md shadow-teal-400 mr-4"
                            onClick={() => handleClickSell(key)}>SELL</button></td>
                        </>
                      )}
                      {key === "usd-coin" && (
                        <>
                          <td>{cryptoData[key].crAm.toFixed(8)}</td>
                          <td>{cryptoData[key].moAmEur.toFixed(2)}</td>
                          <td>{cryptoData[key].moAmUsd.toFixed(2)}</td>
                          <td>{cryptoData[key].priceChange.toFixed(2)}%</td>
                          <td><button className="bg-teal-300 hover:bg-teal-200 text-white font-bold py-1 px-2  rounded-lg shadow-md shadow-teal-400 mr-4"
                            onClick={() => handleClickSell(key)}>SELL</button></td>
                        </>
                      )}
                      {key === "ripple" && (
                        <>
                          <td>{cryptoData[key].crAm.toFixed(8)}</td>
                          <td>{cryptoData[key].moAmEur.toFixed(2)}</td>
                          <td>{cryptoData[key].moAmUsd.toFixed(2)}</td>
                          <td>{cryptoData[key].priceChange.toFixed(2)}%</td>
                          <td><button className="bg-teal-300 hover:bg-teal-200 text-white font-bold py-1 px-2  rounded-lg shadow-md shadow-teal-400 mr-4"
                            onClick={() => handleClickSell(key)}>SELL</button></td>
                        </>
                      )}
                      {key === "okb" && (
                        <>
                          <td>{cryptoData[key].crAm.toFixed(8)}</td>
                          <td>{cryptoData[key].moAmEur.toFixed(2)}</td>
                          <td>{cryptoData[key].moAmUsd.toFixed(2)}</td>
                          <td>{cryptoData[key].priceChange.toFixed(2)}%</td>
                          <td><button className="bg-teal-300 hover:bg-teal-200 text-white font-bold py-1 px-2  rounded-lg shadow-md shadow-teal-400 mr-4"
                            onClick={() => handleClickSell(key)}>SELL</button></td>
                        </>
                      )}
                      {key === "cardano" && (
                        <>
                          <td>{cryptoData[key].crAm.toFixed(8)}</td>
                          <td>{cryptoData[key].moAmEur.toFixed(2)}</td>
                          <td>{cryptoData[key].moAmUsd.toFixed(2)}</td>
                          <td>{cryptoData[key].priceChange.toFixed(2)}%</td>
                          <td><button className="bg-teal-300 hover:bg-teal-200 text-white font-bold py-1 px-2  rounded-lg shadow-md shadow-teal-400 mr-4"
                            onClick={() => handleClickSell(key)}>SELL</button></td>
                        </>
                      )}
                      {key === "matic-network" && (
                        <>
                          <td>{cryptoData[key].crAm.toFixed(8)}</td>
                          <td>{cryptoData[key].moAmEur.toFixed(2)}</td>
                          <td>{cryptoData[key].moAmUsd.toFixed(2)}</td>
                          <td>{cryptoData[key].priceChange.toFixed(2)}%</td>
                          <td><button className="bg-teal-300 hover:bg-teal-200 text-white font-bold py-1 px-2  rounded-lg shadow-md shadow-teal-400 mr-4"
                            onClick={() => handleClickSell(key)}>SELL</button></td>
                        </>
                      )}
                      {key === "dogecoin" && (
                        <>
                          <td>{cryptoData[key].crAm.toFixed(8)}</td>
                          <td>{cryptoData[key].moAmEur.toFixed(2)}</td>
                          <td>{cryptoData[key].moAmUsd.toFixed(2)}</td>
                          <td>{cryptoData[key].priceChange.toFixed(2)}%</td>
                          <td><button className="bg-teal-300 hover:bg-teal-200 text-white font-bold py-1 px-2  rounded-lg shadow-md shadow-teal-400 mr-4"
                            onClick={() => handleClickSell(key)}>SELL</button></td>
                        </>
                      )}
                    </tr>
                  </>

                ))}
              </tbody>
            </table>
          </div>
        )}
        {showAdd && <div className='mt-10 p-10 self-center flex-col bg-black-200 w-65 rounded-lg xl:hidden z-10 border-solid border-2 border-teal-200 absolute'>

          <form>
            <div>
              <label for='amount' className='flex text-white py-6 justify-center'>
                How much do you want to invest?
              </label>
              <input
                name='amount'
                id='inputAmount'
                type='number'
                className='rounded-tl-lg rounded-bl-lg text-center p-1 bg-teal-100 shadow'
                onChange={(e) =>
                  setInputData({ ...inputData, euroValue: e.target.value })
                }
              ></input>
              <select id='money' onChange={(event) => setCurrency(event.target.value)} className='rounded-tr-lg rounded-br-lg p-1 bg-teal-100 shadow'>
                <option>EUR</option>
                <option>USD</option>
              </select>
            </div>
            <div>
              <label
                for='crypto'
                className='flex text-white pt-12 pb-6 justify-center '
              >
                In which cryptocurrency?
              </label>

              <input
                list='cryptoList'
                id='selectCrypto'
                name='crypto'
                size='27'
                autocomplete='off'
                className='rounded-lg p-1 bg-teal-100 shadow'
                onChange={(e) =>
                  setInputData({ ...inputData, selectedCrypto: e.target.value })
                }
              />
            </div>
            <div className='flex'>
              <button
                onClick={handleSave}
                class='bg-teal-300 hover:bg-teal-200 text-white font-bold py-3 px-10 m-6 mt-16 rounded-lg shadow-md shadow-teal-400'
              >
                BUY
              </button>
              <button onClick={cancelButton} class='bg-red-200 hover:bg-red-300 text-white font-bold py-3 px-8 m-6 mt-16 rounded-lg shadow-md shadow-red-400'>
                CANCEL
              </button>
            </div>
          </form>
        </div>}
        <button onClick={addButton} class="self-center bg-teal-300 hover:bg-teal-200 text-white font-bold w-3 py-3 px-12 mt-12 mb-12 rounded-lg flex justify-center align-middle  xl:hidden shadow-md shadow-teal-400">
          ADD
        </button>
      </div>
      <datalist id='cryptoList'>
        {data.map((crypto) => (
          <option>{crypto.id}</option>
        ))}
      </datalist>
    </div>
  );
};

export default Realtime;
