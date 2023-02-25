import React, { useCallback, useEffect, useState } from "react";
import { internalMemory } from "../../utilities/memory";

const RealTime = (props) => {
  const [investmentData, setInvestmentData] = useState([]);
  const [selectedCrypto, setSelectedCrypto] = useState("bitcoin");
  const [money, setMoney] = useState([]);
  const [percentage, setPercentage] = useState(0);
  const [cryptoPrice, setCryptoPrice] = useState(0);
  //const [price, setPrice] = useState(null);

  console.log({
    _selectedcrypto: selectedCrypto,
    _investmentdata: investmentData,
    _money: money,
    _investmentdata7days: investmentData.last7Days,
  });

  useEffect(() => {
    const myInvestment = {
      moneyInvestment: 0,
      cryptoAmount: 0,
    };

    if (!internalMemory.find("bitcoin")) {
      props.data.map((a) => internalMemory.save(a.id, myInvestment));
    } else {
      console.log("ciao");
    }
    const historicInvestment = internalMemory.find(selectedCrypto);
    let index = props.data.findIndex((x) => x.id === selectedCrypto);

    const currentCryptoPrice = props.data[index].current_price;
    setCryptoPrice(currentCryptoPrice);
    const percentageValue =
      ((parseFloat(historicInvestment.cryptoAmount) * cryptoPrice) /
        parseFloat(historicInvestment.moneyInvestment)) *
        100 -
      100;
    setPercentage(percentageValue);
    console.log(percentageValue);
    console.log(currentCryptoPrice);
  }, [cryptoPrice, props.data, selectedCrypto]);

  const handleChange = () => {
    const selectCrypto = document.getElementById("selectCrypto");
    const selectedCryptoValue = selectCrypto.value;
    setSelectedCrypto(selectedCryptoValue);

    if (!selectedCryptoValue) {
      // Se non è stato selezionato alcun valore
      return; // Interrompere l'esecuzione della funzione
    }
  };

  function handleBuy(e) {
    e.preventDefault();

    let inputAmount = parseInt(
      document.getElementById("inputAmount").value,
      10
    ); // Convertire l'importo in ingresso in intero
    if (!inputAmount || inputAmount < 0) {
      return;
    }

    const inputMoney = {
      name: selectedCrypto,
      amount: inputAmount,
    };
    console.log(inputMoney);

    const totalMoney = money.find((input) => input.name === inputMoney.name);
    if (totalMoney) {
      totalMoney.amount = (
        parseFloat(totalMoney.amount) + parseFloat(inputMoney.amount)
      ).toFixed(2);

      setMoney([...money]);
    } else {
      setMoney([...money, inputMoney]);
    }

    const volume = parseFloat(inputAmount) / parseFloat(cryptoPrice);

    const newInvestment = {
      // Creare un nuovo oggetto di investimento
      id: investmentData.length + 1, // ID univoco
      name: selectedCrypto.split(" ")[0], // Nome della criptovaluta
      cryptoAmount: (inputAmount / cryptoPrice).toFixed(2),
      price: (volume / cryptoPrice).toFixed(2), // Prezzo del nuovo investimento
      last7Days: percentage,
    };

    // if (historicInvestment) {
    //   newInvestment.last7Days =
    //     (
    //       ((volume * cryptoPrice) /
    //         parseFloat(historicInvestment.moneyInvestment)) *
    //         100 -
    //       100
    //     ).toFixed(2) + "%";
    // }
    const existingInvestment = investmentData.find(
      // Verificare se esiste già un investimento con lo stesso nome
      (investment) => investment.name === newInvestment.name
    );
    if (existingInvestment) {
      // Se esiste già un investimento
      existingInvestment.last7Days = percentage;
      existingInvestment.price =
        // Aggiornare il prezzo dell'investimento esistente
        (
          parseFloat(existingInvestment.price) + parseFloat(newInvestment.price)
        ).toFixed(2);
      existingInvestment.cryptoAmount =
        // Aggiornare il prezzo dell'investimento esistente
        (
          parseFloat(existingInvestment.cryptoAmount) +
          parseFloat(newInvestment.cryptoAmount)
        ).toFixed(2);
      setInvestmentData([...investmentData]); // Aggiornare lo stato con i dati degli investimenti
    } else {
      // Se non esiste un investimento con lo stesso nome
      setInvestmentData([...investmentData, newInvestment]); // Aggiungere il nuovo investimento allo stato
    }
    const currentMoney = money.find((input) => input.name === selectedCrypto);
    const saveIt = () => {
      const myInvestment = {
        moneyInvestment: inputAmount,
        cryptoAmount: newInvestment.cryptoAmount,
      };

      if (totalMoney) {
        const newMyInvestment = {
          moneyInvestment: currentMoney.amount,
          cryptoAmount: existingInvestment.cryptoAmount,
        };

        internalMemory.save(`${selectedCrypto}`, newMyInvestment);
      } else internalMemory.save(`${selectedCrypto}`, myInvestment);
    };
    saveIt();
  }

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

            <select
              list='cryptoList'
              id='selectCrypto'
              name='crypto'
              autocomplete='off'
              className='rounded-lg p-1'
              onChange={handleChange}
            >
              {props.data.map((crypto) => (
                <option key={crypto.id} value={crypto.id}>
                  {crypto.id}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleBuy}
            class='bg-teal-300 hover:bg-teal-200 text-white font-bold py-3 px-16 mt-16 rounded-full'
          >
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
              <th>Price</th>
              <th>Last 7 Days</th>
            </tr>
          </thead>
          <tbody>
            {investmentData.map((investment, index) => (
              <tr key={investment.id}>
                <td className='text-white'>{investment.id}</td>
                <td className='text-white'>{investment.name}</td>
                <td className='text-white'>{investment.cryptoAmount}</td>
                <td className='text-white'>{investment.price}</td>
                <td className='text-white'>{investment.last7Days}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RealTime;
