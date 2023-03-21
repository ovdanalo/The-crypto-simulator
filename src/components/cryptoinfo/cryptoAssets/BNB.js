import React, {useContext} from "react";
import ThemeContext from "../../ThemeContext";

const BNB = (props) => {

    const { isDarkTheme} = useContext(ThemeContext);

    return (
        <div className={`flex flex-col p-4 ${isDarkTheme ? "bg-black-100" : "bg-white-mode-200"}`}>
            {props.asset.map((item, index) => {
                if (item.name === "BNB") {
                    return (
                        <div>
                            <div className="flex flex-col justify-center items-center">
                            <div className={`p-2 rounded-lg m-4 w-full lg:w-1/2 ${isDarkTheme ? "bg-black-200" : "bg-white-mode-400"}`} key={index}>
                                <p className={`text-2xl ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>
                                    The price of {item.symbol.toUpperCase()} is {item.current_price}€
                                </p>
                            </div>
                            <div className={`p-2 rounded-lg m-4 w-full lg:w-1/2 ${isDarkTheme ? "bg-black-200" : "bg-white-mode-400"}`}>
                                <p className={`text-2xl ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>
                                    There now are {item.circulating_supply.toFixed(2)} {item.symbol.toUpperCase()} circulating
                                </p>
                            </div>
                            <div className={`p-2 rounded-lg m-4 w-full lg:w-1/2 ${isDarkTheme ? "bg-black-200" : "bg-white-mode-400"}`}>
                                <p className={`text-2xl ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>
                                    The maximum supply is {item.max_supply === null ? 'indefinite' : item.max_supply + ' ' + item.symbol.toUpperCase()}
                                </p>
                            </div>
                            </div>
                            <div>
                                <h3 className={`text-xl m-6 ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>What's {item.name}?</h3>
                                <p class={`px-1 md:px-15 ${isDarkTheme ? "text-white" : "text-black-100"}`}>Launched in July 2017, Binance is the biggest cryptocurrency exchange globally based on daily trading volume. Binance aims to bring cryptocurrency exchanges to the forefront of financial activity globally. The idea behind Binance’s name is to show this new paradigm in global finance — Binary Finance, or Binance.

                                    Aside from being the largest cryptocurrency exchange globally, Binance has launched a whole ecosystem of functionalities for its users. The Binance network includes the Binance Chain, Binance Smart Chain, Binance Academy, Trust Wallet and Research projects, which all employ the powers of blockchain technology to bring new-age finance to the world. BNB is an integral part of the successful functioning of many of the Binance sub-projects.</p>
                                <h3 className={`text-xl m-6 ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>Who Are the Founders of BNB?</h3>
                                <p class={`px-1 md:px-15 ${isDarkTheme ? "text-white" : "text-black-100"}`}>Changpeng Zhao is the founder and CEO of Binance. In 2001, Zhao joined Bloomberg as head of tradebook futures development. He spent four years with the company and later joined Fusion Systems as a partner.

                                    Since 2013, Changpeng Zhao has been actively involved with blockchain technology and cryptocurrencies. He became head of development at Blockchain, and in 2015 he founded BijieTech. In 2017, Zhao officially launched Binance, and he has been the CEO of the company ever since.

                                    He Yi is a co-founder and chief marketing officer at Binance. She started her career as a TV anchor and presenter on China Travel TV in 2012. Later, in 2014, Yi co-founded OKCoin, which was the largest fiat-to-crypto exchange in China at the time. In 2017, she joined forces with Changpeng Zhao, and together they created the largest crypto exchange globally — Binance.</p>
                                <h3 className={`text-xl m-6 ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>What Makes BNB Unique?</h3>
                                <p class={`px-1 md:px-15 ${isDarkTheme ? "text-white" : "text-black-100"}`}>Binance is a unique ecosystem of decentralized, blockchain-based networks. The company has grown to be the leading crypto exchange in a number of countries, and their side organizations are attracting significant interest as well.

                                    One of the biggest competitive advantages Binance has is its drive for development. While the company started only as a crypto exchange back in 2017, today, Binance has spread its services among numerous different spheres. According to the company website, its mission is to become the infrastructure services provider for the entire blockchain ecosystem.

                                    Since launching the BNB, the exchange has also benefited from increased investor interest in the coin. BNB went through a significant price increase at the beginning of 2021, which has put it on the map of enterprise investors.

                                    Measures like BEP-95 have upgraded the already deflationary tokenomics to make BNB even more deflationary. Following the proposal, gas fees on Binance Smart Chain have become even lower, as the network burns a part of the fees to decentralize further. The proposal was modeled after Ethereum's famous EIP-1559.

                                    This has helped Binance overcome several exploits of protocols on BSC, such as a $200M exploit of Pancake Bunny and several hacks of Cream Finance. Despite these hacks, users return to Binance for its low fees and the abundance of lucrative meme coins in its ecosystem.</p>
                                <h3 className={`text-xl m-6 ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>What Is BNB’s Auto Burn?</h3>
                                <p class={`px-1 md:px-15 ${isDarkTheme ? "text-white" : "text-black-100"}`}>Within the crypto industry, a coin burn is a deflationary mechanism that is used to permanently remove coins from circulation. Most cryptocurrency projects, including Binance, periodically burn coins to sustain the value of their digital asset and create a deflationary effect.

                                    In the case of Binance, the crypto exchange began the program in late 2017 and has so far burned over 38 million tokens via its quarterly burn to date. The crypto exchange has in mind to destroy up to 100 million BNB tokens through its quarterly burns, accounting for 50% of its circulating supply.

                                    BNB utilizes two coin-burning mechanisms. The first mechanism consists of burning a portion of the tokens spent on transaction fees on the BNB Chain, and the second is its quarterly BNB burning events.

                                    Previously, the quarterly burn event was based on revenue generated from the Binance centralized exchange. But under the new BNB Auto-Burn program, the number of tokens to be burned is calculated using a formula based on the total number of blocks produced on the Binance Smart Chain and BNB's average dollar-denominated price during the quarter.

                                    As of July 2022, Binance had completed 20 BNB coin burn events. In total, 38,683,447.66 BNB tokens have been destroyed, reducing its initial 200M supply by 19.34%.</p>
                                <h3 className={`text-xl m-6 ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>How Many BNB Are There in Circulation?</h3>
                                <p class={`px-1 md:px-15 ${isDarkTheme ? "text-white" : "text-black-100"}`}>There is an initial maximum supply of 200,000,000 BNB coins, of which 168,137,036 are currently in circulation as of September 2021.

                                    Binance conducts quarterly burning of the BNB supply, with the goal of reducing the total supply by half — or 100,000,000 BNB. On July 18, 2021, it conducted its 16th quarterly burning, which was worth $390 million in BNB price at the time of burning. However, that was not the most expensive burn — on April 16, 2021, the exchange burned nearly $600 million worth, in BNB price at the time of burning.

                                    According to the Binance whitepaper, exactly half of the maximum supply of BNB coins was allocated towards the initial coin offering (ICO) and public sale of the coin. The ICO was held in July 2017 shortly after the exchange launched, and saw Binance raise $15 million in funding, with BNB price at $0.10 during the ICO. Taking BNB price today, that represents an almost 4200X return on investment (ROI). Another 40% of the total supply, or around 80,000,000 BNB coins, was distributed among the founding members and team. Finally, the remaining 10% of the maximum supply was split among angel investors.</p>
                                <h3 className={`text-xl m-6 ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>How Is the BNB Network Secured?</h3>
                                <p class={`px-1 md:px-15 ${isDarkTheme ? "text-white" : "text-black-100"}`}>Initially, the BNB started as a traditional ERC-20 token on the Ethereum blockchain. Later on, the company introduced its own blockchain, and the tokens started being issued from the Binance blockchain, secured by the Tendermint byzantine-fault-tolerant (BFT) consensus mechanism.

                                    While ERC-20 tokens rely on the proof-of-stake (PoS) consensus, which allows them to be extremely scalable, and allows for the creation of smart contracts. Unlike PoS, the Binance blockchain does not support smart contract functionalities. In contrast, the Bitcoin blockchain is secured by the proof-of-work (PoW) consensus, which is far more limited and consumes large amounts of electrical and computing power.</p>
                            </div>
                        </div>
                    );
                }
                return null;
            })}
        </div>
    )
}

export default BNB;
