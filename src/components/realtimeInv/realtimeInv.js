import React, { useState } from 'react';

const Home = () => {
    const [investmentData, setInvestmentData] = useState([]); // Stato per mantenere i dati degli investimenti

    const handleBuy = (e) => { // Gestisce l'acquisto di una criptovaluta
        e.preventDefault(); // Prevenire il comportamento predefinito del form
        const selectCrypto = document.getElementById('selectCrypto'); // Selezionare l'elemento con id "selectCrypto"
        const selectedCryptoValue = selectCrypto.value; // Ottenere il valore selezionato del cripto
        if (!selectedCryptoValue) { // Se non è stato selezionato alcun valore
            return; // Interrompere l'esecuzione della funzione
        }
        const inputAmount = parseInt(document.getElementById('inputAmount').value, 10); // Convertire l'importo in ingresso in intero
        if (!inputAmount || inputAmount < 0) { 
            return; 
        } 
        const cryptoPrice = 22000; // Valore casuale per il prezzo della criptovaluta
        const newInvestment = { // Creare un nuovo oggetto di investimento
            id: investmentData.length + 1, // ID univoco
            name: selectedCryptoValue.split(" ")[0], // Nome della criptovaluta
            volume: inputAmount / cryptoPrice,
            price: inputAmount, // Prezzo del nuovo investimento
            last7Days: (Math.random() * (100 - 1) + 1).toFixed(2), // Ultimi 7 giorni di variazione del prezzo
        };
        const existingInvestment = investmentData.find( // Verificare se esiste già un investimento con lo stesso nome
            (investment) => investment.name === newInvestment.name
        );
        if (existingInvestment) { // Se esiste già un investimento
            existingInvestment.price = ( // Aggiornare il prezzo dell'investimento esistente
                parseFloat(existingInvestment.price) + parseFloat(newInvestment.price)
            ).toFixed(2);
            existingInvestment.volume = ( // Aggiornare il prezzo dell'investimento esistente
            parseFloat(existingInvestment.volume) + parseFloat(newInvestment.volume)
        ).toFixed(2);
            setInvestmentData([...investmentData]); // Aggiornare lo stato con i dati degli investimenti
        } else { // Se non esiste un investimento con lo stesso nome
            setInvestmentData([...investmentData, newInvestment]); // Aggiungere il nuovo investimento allo stato
        }
    };
    return (
        <div className='flex flex-row bg-black-200 w-8/12 xl:h-def mx-auto my-6 justify-center rounded-lg'>
            <div className='flex flex-col bg-black-100 w-1/3 m-6 mr-0 rounded-lg py-12'>
                <form>
                    <div>
                        <label for='amount' className='flex text-white py-6 justify-center'>How much do you want to invest?</label>
                        <input name='amount' id="inputAmount" type='number' className='rounded-tl-lg rounded-bl-lg text-center p-1'></input>
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
                            <th>Price</th>
                            <th>Last 7 Days</th>
                        </tr>
                    </thead>
                    <tbody>
                        {investmentData.map((investment, index) => (
                            <tr key={investment.id}>
                                <td className='text-white'>{investment.id}</td>
                                <td className='text-white'>{investment.name}</td>
                                <td className='text-white'>{investment.volume}</td>
                                <td className='text-white'>{investment.price}</td>
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