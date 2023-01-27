import React from 'react';

const cryptoList = {
    num1: {
        name: 'Bitcoin',
        ticker: 'BTC',
        price: 21000,
        marketcap: '406.1 Bln',
        volume24: '24.8 Bln',
        circulating: '19.27 Mln'
    },
    num2: {
        name: 'Ethereum',
        ticker: 'ETH',
        price: 1500,
        marketcap: '182.3 Bln',
        volume24: '7.3 Bln',
        circulating: '122.37 Mln'
    },
    num3: {
        name: 'BNB',
        ticker: 'BNB',
        price: 280,
        marketcap: '44.2 Bln',
        volume24: '591.4 Mln',
        circulating: '157.90 Mln'
    },
    num4: {
        name: 'XRP',
        ticker: 'XRP',
        price: 0.39,
        marketcap: '19.7 Bln',
        volume24: '1.6 Bln',
        circulating: '50.79 Bln'
    },
    num5: {
        name: 'Cardano',
        ticker: 'ADA',
        price: 0.3466,
        marketcap: '11.98 Bln',
        volume24: '555.9 Mln',
        circulating: '34.57 Bln'
    },
    num6: {
        name: 'Dogecoin',
        ticker: 'DOGE',
        price: 0.08114,
        marketcap: '10.7 Bln',
        volume24: '765.6 Mln',
        circulating: '132.67 Bln'
    },
    num7: {
        name: 'Solana',
        ticker: 'SOL',
        price: 22.36,
        marketcap: '8.2 Bln',
        volume24: '920.8 Mln',
        circulating: '371.19 Mln'
    },
    num8: {
        name: 'Polygon',
        ticker: 'MATIC',
        price: 0.9112,
        marketcap: '7.9 Bln',
        volume24: '425.4 Bln',
        circulating: '8.73 Bln'
    },
    num9: {
        name: 'Polkadot',
        ticker: 'DOT',
        price: 6.05,
        marketcap: '7.1 Bln',
        volume24: '360.7 Mln',
        circulating: '1.15 Bln'
    },
    num10: {
        name: 'Shiba Inu',
        ticker: 'SHIB',
        price: 0.00001106,
        marketcap: '6.1 Bln',
        volume24: '324.8 Mln',
        circulating: '549.1 Tln'
    }
}
const top10 = () => {
    return (
        <div className={'flex flex-col mx-auto bg-black-200 lg:max-w-4xl xl:max-w-5xl my-6 rounded-2xl'}>
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
                            <th>Last 7 Days</th>
                        </tr>
                    </thead>
                    <tbody className='text-white'>

                        <tr className='h-20 border-b border-b-white'>
                            <td>1</td>
                            <td>{cryptoList.num1.name} {cryptoList.num1.ticker}</td>
                            <td>€{cryptoList.num1.price}</td>
                            <td>€{cryptoList.num1.marketcap}</td>
                            <td>€{cryptoList.num1.volume24}</td>
                            <td>{cryptoList.num1.circulating} {cryptoList.num1.ticker}</td>
                        </tr>
                        <tr className='h-20 border-b border-b-white'>
                            <td className=''>2</td>
                            <td>{cryptoList.num2.name} {cryptoList.num2.ticker}</td>
                            <td>€{cryptoList.num2.price}</td>
                            <td>€{cryptoList.num2.marketcap}</td>
                            <td>€{cryptoList.num2.volume24}</td>
                            <td>{cryptoList.num2.circulating} {cryptoList.num2.ticker}</td>
                        </tr>
                        <tr className='h-20 border-b border-b-white'>
                            <td>3</td>
                            <td>{cryptoList.num3.name} {cryptoList.num3.ticker}</td>
                            <td>€{cryptoList.num3.price}</td>
                            <td>€{cryptoList.num3.marketcap}</td>
                            <td>€{cryptoList.num3.volume24}</td>
                            <td>{cryptoList.num3.circulating} {cryptoList.num3.ticker}</td>
                        </tr>
                        <tr className='h-20 border-b border-b-white'>
                            <td>4</td>
                            <td>{cryptoList.num4.name} {cryptoList.num4.ticker}</td>
                            <td>€{cryptoList.num4.price}</td>
                            <td>€{cryptoList.num4.marketcap}</td>
                            <td>€{cryptoList.num4.volume24}</td>
                            <td>{cryptoList.num4.circulating} {cryptoList.num4.ticker}</td>
                        </tr>
                        <tr className='h-20 border-b border-b-white'>
                            <td>5</td>
                            <td>{cryptoList.num5.name} {cryptoList.num5.ticker}</td>
                            <td>€{cryptoList.num5.price}</td>
                            <td>€{cryptoList.num5.marketcap}</td>
                            <td>€{cryptoList.num5.volume24}</td>
                            <td>{cryptoList.num5.circulating} {cryptoList.num5.ticker}</td>
                        </tr>
                        <tr className='h-20 border-b border-b-white'>
                            <td>6</td>
                            <td>{cryptoList.num6.name} {cryptoList.num6.ticker}</td>
                            <td>€{cryptoList.num6.price}</td>
                            <td>€{cryptoList.num6.marketcap}</td>
                            <td>€{cryptoList.num6.volume24}</td>
                            <td>{cryptoList.num6.circulating} {cryptoList.num6.ticker}</td>
                        </tr>
                        <tr className='h-20 border-b border-b-white'>
                            <td>7</td>
                            <td>{cryptoList.num7.name} {cryptoList.num7.ticker}</td>
                            <td>€{cryptoList.num7.price}</td>
                            <td>€{cryptoList.num7.marketcap}</td>
                            <td>€{cryptoList.num7.volume24}</td>
                            <td>{cryptoList.num7.circulating} {cryptoList.num7.ticker}</td>
                        </tr>
                        <tr className='h-20 border-b border-b-white'>
                            <td>8</td>
                            <td>{cryptoList.num8.name} {cryptoList.num8.ticker}</td>
                            <td>€{cryptoList.num8.price}</td>
                            <td>€{cryptoList.num8.marketcap}</td>
                            <td>€{cryptoList.num8.volume24}</td>
                            <td>{cryptoList.num8.circulating} {cryptoList.num8.ticker}</td>
                        </tr>
                        <tr className='h-20 border-b border-b-white'>
                            <td>9</td>
                            <td>{cryptoList.num9.name} {cryptoList.num9.ticker}</td>
                            <td>€{cryptoList.num9.price}</td>
                            <td>€{cryptoList.num9.marketcap}</td>
                            <td>€{cryptoList.num9.volume24}</td>
                            <td>{cryptoList.num9.circulating} {cryptoList.num9.ticker}</td>
                        </tr>
                        <tr className='h-20 border-b border-b-white'>
                            <td>10</td>
                            <td>{cryptoList.num10.name} {cryptoList.num10.ticker}</td>
                            <td>€{cryptoList.num10.price}</td>
                            <td>€{cryptoList.num10.marketcap}</td>
                            <td>€{cryptoList.num10.volume24}</td>
                            <td>{cryptoList.num10.circulating} {cryptoList.num10.ticker}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default top10;