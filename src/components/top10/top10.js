import React from "react";

const Top10 = (props) => {

const nFormatter = (num) => {
        const lookup = [
          { value: 1, symbol: " " },
          { value: 1e3, symbol: " k" },
          { value: 1e6, symbol: " Mln" },
          { value: 1e9, symbol: " Bln" },
          { value: 1e12, symbol: " Tln" },
          { value: 1e15, symbol: " Tld" }
        ];
        const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        var item = lookup.slice().reverse().find(function(item) {
          return num >= item.value;
        });
        return item ? (num / item.value).toFixed(2).replace(rx, "$1") + item.symbol : "0";
      }

    return (
        <div className={'flex flex-col mx-auto bg-black-200 lg:max-w-4xl xl:max-w-5xl my-8 rounded-2xl'}>
            <div className='bg-black-100 w-11/12 mx-auto rounded-lg my-4 p-2'>
                <table className='w-10/12 mx-auto my-6'>
                    <thead className='text-teal-100'>
                        <tr className='h-20 border-b border-b-teal-100'>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>MarketCap</th>
                            <th>Volume (24h)</th>
                            <th>Circulating Supply</th>
                            <th>Change in 7d</th>
                        </tr>
                    </thead>
                    <tbody className='text-white'>
                        {props.data.map((crypto, index) => (
                            <tr className='h-20 border-b border-b-white' key={crypto.id}>
                                <td>{index + 1}</td>
                                <td className="flex items-center mt-5"><img src={crypto.image} alt={crypto.name + 'logo'} className='w-8 mr-3'/> {crypto.name} ({crypto.symbol.toUpperCase()})</td>
                                <td>{crypto.current_price.toFixed(2)}€</td>
                                <td>{nFormatter(crypto.market_cap)} €</td>
                                <td>{nFormatter(crypto.total_volume)} €</td>
                                <td>{nFormatter(crypto.circulating_supply)} {crypto.symbol.toUpperCase()}</td>
                                <td>{crypto.price_change_percentage_7d_in_currency.toFixed(2)} %</td>
                            </tr>
                        ))}
                        {console.log(props.data)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Top10;