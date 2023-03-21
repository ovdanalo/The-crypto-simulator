import React, { useContext } from "react";
import ThemeContext from "../../ThemeContext";

const OKB = (props) => {

    const { isDarkTheme } = useContext(ThemeContext);

    return (
        <div className={`flex flex-col  p-4 ${isDarkTheme ? "bg-black-100" : "bg-white-mode-200"}`}>
            {props.asset.map((item, index) => {
                if (item.name === "OKB") {
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
                                <h3 className={` text-xl m-6 ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>What's {item.name} ({item.name})?</h3>
                                <p class={` px-1 md:px-15 ${isDarkTheme ? "text-white" : "text-black-100"}`}>OKB is a cryptocurrency released by the OK Blockchain Foundation and the Maltese Crypto Exchange, OKEx. The exchange is one of the largest in the world and currently ranks third in terms of liquidity, fourth in terms of trading volume, and provides a wide selection of trading pairs. OKEx is similar in many respects to the cryptocurrency exchange giant Binance, but there are some key differences. The OKEx platform has its own cloud mining service, and the company has a more targeted coverage in providing trading options for users. Meanwhile, Binance is committed to offering a wide range of cryptocurrency services globally.

                                    OKB is the OKEx utility token that allows users to access the special features of the cryptocurrency exchange. The coin is used to calculate and pay trading fees, grant users access to voting and governance on the platform, and reward users who hold OKB.

                                    Since its launch in 2017, OKEx has become a global trading leader. The platform was launched in the spring of 2017 and emerged as a derivation of the original OKCoin platform (operating since 2013 in China). OKCoin now focuses on fiat-to-cryptocurrency exchange, while OKEx focuses on cryptocurrency trading with an integrated API for algorithmic trading. The exchange also offers users access to a multi-currency wallet and margin trading functions.</p>
                                <h3 className={` text-xl m-6 ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>Who are the founders of OKB?</h3>
                                <p class={` px-1 md:px-15 ${isDarkTheme ? "text-white" : "text-black-100"}`}>Jay Hao has been the CEO of OKEx since the beginning, and he still holds this position. Hao has devoted his career to technology and engineering. He has been following the blockchain sector for some time, focusing on blockchain-based apps for video streaming and mobile gaming. Prior to joining OKEx, Hao had twenty years of experience in the semiconductor industry. He developed a wide range of codecs: UVLED, ASIC, FPGA, and multimedia codecs and SOCs for multimedia processors. During this period, Hao accumulated significant experience in product development and management.

                                    Another key member of the management team is Mingxing "Star" Xu. He founded OKCoin in China in 2013 and earned a great reputation in the industry. In 2017, Xu co-founded the OKEx exchange in Malta, which operates as a separate legal entity. Today Xu is the CEO of OK Group.
                                </p>
                                <h3 className={` text-xl m-6 ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>What makes OKB (OKB) unique?</h3>
                                <p class={` px-1 md:px-15 ${isDarkTheme ? "text-white" : "text-black-100"}`}>The OKB token plays a significant role in the OKEx ecosystem. It allows users to receive up to a 40% discount on transactions, depending on the number of tokens held by each user. The exchange market divides users into two types of groups: regular and VIP. Regular users are assigned a level based on their OKB holdings, while VIP users are assigned a level based on their trading volume. Commission rates are updated daily, and users receive a discount based on their respective level.

                                    Members of the platform can receive passive income if they hold OKB tokens and the token is involved in OKEx Earn (a project that helps users earn on their assets). Another purpose of the OKB token is to allocate funds on the OKEx Jumpstart platform. Participation in Jumpstart is only available after registration on the site, so sales are made through MixTrust.

                                    OKB is the native asset of OKExChain (the OKEx blockchain). The OKB token is used in the system to facilitate spot trading, derivative trading, and the simultaneous development of multiple scalable applications. Additionally, a multi-level architecture reduces consensus times, improves scalability, and increases security.

                                    To add value to OKB and make the digital currency more attractive to holders, OKEx regularly burns tokens every three months and records the burned tokens on the official website. For this procedure, OKEX uses 30% of commission income. Additionally, welcome bonuses are offered to new users.</p>
                                <h3 className={` text-xl m-6 ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>How is the OKB Network protected?</h3>
                                <p class={` px-1 md:px-15 ${isDarkTheme ? "text-white" : "text-black-100"}`}>The coin is an ERC-20 token based on proof-of-stake (PoS) consensus. OKB originally operated on the Ethereum blockchain, but the company later transitioned to its own blockchain: OKExChain.

                                    OKEx is a very transparent platform. The developers ensure that security is their top priority as OKEx features a reliable and stable trading system. They use load balancing on servers, distributed clusters, and other technologies for protection.

                                    Additionally, OKEx has developed hot and cold wallets — cold wallets being one of the safest methods for storing cryptocurrencies. Hot wallets, however, require the utmost attention to security and functionality. Therefore, OKEx has added a semi-autonomous multi-signature feature that allows for fast, convenient, and secure transactions.</p>
                                <h3 className={` text-xl m-6 ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>Where can you buy OKB (OKB)?</h3>
                                <p class={` px-1 md:px-15 ${isDarkTheme ? "text-white" : "text-black-100"}`}>The easiest way to obtain OKB tokens is to purchase them through OKEx. However, there are also many alternative cryptocurrency markets where you can buy or trade the token. These include OKEx, FTX, Gate.io, Uniswap (V2), HitBTC, BiONE, LBank, Hotcoin Global, Coin Ex, ProBitGlobal, and Hotbit.</p>
                            </div>
                        </div>
                    );
                }
                return null;
            })}
        </div>
    )
}

export default OKB;
