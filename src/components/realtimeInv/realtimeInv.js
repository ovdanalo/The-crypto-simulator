import React, { useEffect, useState } from "react";

const Realtime = (props) => {
  const [cryptoData, setCryptoData] = useState(null);
  const [inputData, setInputData] = useState({
    euroValue: "",
    selectedCrypto: "bitcoin",
  });

  useEffect(() => {
    const storedData = localStorage.getItem("cryptoData");
    if (storedData) {
      setCryptoData(JSON.parse(storedData));
    } else {
      setCryptoData({
      });
    }
  }, []);

  const handleSave = () => {
    const storedData = localStorage.getItem("cryptoData");
    let updatedData = {};
    if (storedData) {
      updatedData = JSON.parse(storedData);
    }
    const { selectedCrypto, euroValue } = inputData;
    const selectedCryptoData = props.data.find((item) => item.id === selectedCrypto);
    const moAm = (updatedData[selectedCrypto]?.moAm || 0) + parseFloat(euroValue);
    const crAm = moAm / selectedCryptoData.current_price;
    const priceChange = selectedCryptoData.price_change_percentage_7d_in_currency;

    updatedData[selectedCrypto] = { moAm, crAm, priceChange };
    localStorage.setItem("cryptoData", JSON.stringify(updatedData));
    setCryptoData(updatedData);
  };

  return (
    <div className='flex flex-row bg-black-200 w-8/12 xl:h-def mx-auto my-6 justify-center rounded-lg'>
      <div className='flex flex-col bg-black-100 w-1/3 m-6 mr-0 rounded-lg py-12'>
        <form>
          <div>
            <label for='amount' className='flex text-white py-6 justify-center'>
              How much do you want to invest?
            </label>
            <input
              name='amount'
              id='inputAmount'
              type='number'
              className='rounded-tl-lg rounded-bl-lg text-center p-1'
              onChange={(e) =>
                setInputData({ ...inputData, euroValue: e.target.value })
              }
            ></input>
            <select id='money' className='rounded-tr-lg rounded-br-lg p-1'>
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
              className='rounded-lg p-1'
              onChange={(e) =>
                setInputData({ ...inputData, selectedCrypto: e.target.value })
              }
            />
          </div>

          <button
            onClick={handleSave}
            class='bg-teal-300 hover:bg-teal-200 text-white font-bold py-3 px-16 mt-16 rounded-full'
          >
            BUY
          </button>
        </form>
      </div>
      <div className='flex flex-col bg-black-100 w-2/3 m-6 rounded-lg'>
        {cryptoData && Object.keys(cryptoData).length > 0 && (
          <table>
            <thead>
              <div className="h-3"></div>
              <tr className='text-white border-b-2'>
                <th className='p-2 py-6'>Cryptocurrency</th>
                <th className="p-2">Amount</th>
                <th className="p-2">Value (€)</th>
                <th className="p-2">Last 7 Days (%)</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(cryptoData).map((key) => (
                <>
                <div className="h-3"></div>
                  <tr className='text-white' key={key}>
                    <td>{key}</td>
                    {key === "bitcoin" && (
                      <>
                        <td>{cryptoData[key].crAm.toFixed(8)}</td>
                        <td>{cryptoData[key].moAm.toFixed(2)}</td>
                        <td>{cryptoData[key].priceChange.toFixed(2)}%</td>
                      </>
                    )}
                    {key === "ethereum" && (
                      <>
                        <td>{cryptoData[key].crAm.toFixed(8)}</td>
                        <td>{cryptoData[key].moAm.toFixed(2)}</td>
                        <td>{cryptoData[key].priceChange.toFixed(2)}%</td>
                      </>
                    )}
                    {key === "tether" && (
                      <>
                        <td>{cryptoData[key].crAm.toFixed(8)}</td>
                        <td>{cryptoData[key].moAm.toFixed(2)}</td>
                        <td>{cryptoData[key].priceChange.toFixed(2)}%</td>
                      </>
                    )}
                    {key === "binancecoin" && (
                      <>
                        <td>{cryptoData[key].crAm.toFixed(8)}</td>
                        <td>{cryptoData[key].moAm.toFixed(2)}</td>
                        <td>{cryptoData[key].priceChange.toFixed(2)}%</td>
                      </>
                    )}
                    {key === "usd-coin" && (
                      <>
                        <td>{cryptoData[key].crAm.toFixed(8)}</td>
                        <td>{cryptoData[key].moAm.toFixed(2)}</td>
                        <td>{cryptoData[key].priceChange.toFixed(2)}%</td>
                      </>
                    )}
                    {key === "ripple" && (
                      <>
                        <td>{cryptoData[key].crAm.toFixed(8)}</td>
                        <td>{cryptoData[key].moAm.toFixed(2)}</td>
                        <td>{cryptoData[key].priceChange.toFixed(2)}%</td>
                      </>
                    )}
                    {key === "okb" && (
                      <>
                        <td>{cryptoData[key].crAm.toFixed(8)}</td>
                        <td>{cryptoData[key].moAm.toFixed(2)}</td>
                        <td>{cryptoData[key].priceChange.toFixed(2)}%</td>
                      </>
                    )}
                    {key === "cardano" && (
                      <>
                        <td>{cryptoData[key].crAm.toFixed(8)}</td>
                        <td>{cryptoData[key].moAm.toFixed(2)}</td>
                        <td>{cryptoData[key].priceChange.toFixed(2)}%</td>
                      </>
                    )}
                    {key === "polygon" && (
                      <>
                        <td>{cryptoData[key].crAm.toFixed(8)}</td>
                        <td>{cryptoData[key].moAm.toFixed(2)}</td>
                        <td>{cryptoData[key].priceChange.toFixed(2)}%</td>
                      </>
                    )}
                    {key === "dogecoin" && (
                      <>
                        <td>{cryptoData[key].crAm.toFixed(8)}</td>
                        <td>{cryptoData[key].moAm.toFixed(2)}</td>
                        <td>{cryptoData[key].priceChange.toFixed(2)}%</td>
                      </>
                    )}
                  </tr>
                </>

              ))}
            </tbody>
          </table>
        )}
      </div>
      <datalist id='cryptoList'>
        {props.data.map((crypto) => (
          <option>{crypto.id}</option>
        ))}
      </datalist>
    </div>
  );
};

export default Realtime;
