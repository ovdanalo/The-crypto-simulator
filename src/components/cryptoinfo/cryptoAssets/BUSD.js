import React from "react";

const BUSD = (props) => {

    return (
        <div className="flex flex-col bg-black-100 p-4">
            {props.asset.map((item, index) => {
                if (item.name === "Binance USD") {
                    return (
                        <div>
                            <div className="bg-black-200 rounded-lg m-4" key={index}>
                                <p className="text-teal-100 text-2xl">
                                    The price of {item.symbol.toUpperCase()} is {item.current_price}€s
                                </p>
                            </div>
                            <div className="bg-black-200 rounded-lg m-4">
                                <p className="text-teal-100 text-2xl">
                                    There now are {item.circulating_supply.toFixed(2)} {item.symbol.toUpperCase()} circulating
                                </p>
                            </div>
                            <div className="bg-black-200 rounded-lg m-4">
                                <p className="text-teal-100 text-2xl">
                                    The maximum supply is {item.max_supply === null ? 'indefinite' : item.max_supply + ' ' + item.symbol.toUpperCase()}
                                </p>
                            </div>
                            <div>
                                <h3 className="text-teal-100 text-xl m-6">What's {item.name}?</h3>
                                <p className="text-white px-20">Binance USD (BUSD) is a 1:1 USD-backed stable coin issued by Binance (in partnership with Paxos), Approved and regulated by the New York State Department of Financial Services (NYDFS), The BUSD Monthly Audit Report can be viewed from the official website. Launched on 5 Sep 2019, BUSD aims to meld the stability of the dollar with blockchain technology. It is a digital fiat currency, issued as ERC-20 and supports BEP-2.</p>
                                <h3 className="text-teal-100 text-xl m-6">BUSD Use Case</h3>
                                <p className="text-white px-20">Based on the price stability, Stablecoin plays an important role in transactions, payments and settlement, and Decentralised Finance (DeFi).
                                    Here are some of the BUSD use cases:
                                    <ul>
                                        <li>Transfer your digital dollars (BUSD) anywhere in minutes, with low cost and on the blockchain.</li>
                                        <li>Trade BUSD on different exchanges and DEX.</li>
                                        <li>Deposit BUSD to earn an interest rate.</li>
                                        <li>Pay BUSD as payment for goods and services.</li>
                                        <li>Use BUSD as collateral and loan asset.</li>
                                        <li>Use BUSD as cross collateral in Futures.</li>
                                        <li>Store BUSD on an exchange or in a wallet.</li>
                                    </ul>
                                </p>
                                <h3 className="text-teal-100 text-xl m-6">BUSD Ecosystem</h3>
                                <p className="text-white px-20">The BUSD ecosystem has grown exponentially in 2021. The stablecoin grew from a market capitalization of around US$1B at the start of 2021, to over US$14.6B at the end of 2021. This makes it the third largest stablecoin by market cap, behind Tether and USDC. This growth is largely due to more user adoption as wallets, platforms and services, DEXes and CEXes support BUSD.

                                    Top wallets like Metamask, Trust Wallet, Trezor, Zapper and many more allow users to hold BUSD now. Platforms and services, like travel booking site Travala, payments gateways like Moonpay and Banxa, payment APIs like Wyre and multi-currency payment services like ivendPay and Paylot are now supporting BUSD too. While PancakeSwap is the top DEX in the BSC ecosystem, numerous other top DEXes also support BUSD, including: Uniswap, 1inch, Curve Finance, Ellipsis, MDEX, SushiSwap, 0x and many more. Users of centralized exchanges (CEXes) can use BUSD outside of Binance and Binance.US too, with top exchanges like FTX, Gate.io, WazirX, MEXC and more.

                                    For users interested in yield farming and lending BUSD, it is available on centralized platforms like Binance, Blockfi and Celsius, among others. Top DeFi protocols like Venus, Aave, yearn.finance and more also allow users to earn yield on their BUSD.</p>
                                <h3 className="text-teal-100 text-xl m-6">Paxos Reveals Assets Backing BUSD</h3>
                                <p className="text-white px-20">In light of the TerraUSD saga, a number of stablecoin issuers have moved to disclose the assets backing their coins. As of June 30, 2022, 96% of the assets backing the Binance USD were held in cash and cash equivalents, while 4% were invested in U.S. Treasury bills, Paxos revealed.

                                    All of the company’s cash balances are held in U.S.-insured depository institutions, while the cash equivalents are held in “U.S. Treasury bills with maturities of 3 months or less, or overnight repurchase agreements, overcollateralized by U.S. Treasury instruments.”</p>
                                <h3 className="text-teal-100 text-xl m-6">BUSD and Charity</h3>
                                <p className="text-white px-20">In April 2022, Binance donated $2.5 million in BUSD through its charity organization to USA for UNHCR, a UN refugee agency. This was the agency’s first stablecoin crypto donation. The move demonstrated how cryptocurrency can play a key role in raising funds and supporting humanitarian aid.</p>
                            </div>
                        </div>
                    );
                }
                return null;
            })}
        </div>
    )
}

export default BUSD; 