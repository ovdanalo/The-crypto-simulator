import React, {useContext} from "react";
import ThemeContext from "../../ThemeContext";

const USDcoin = (props) => {

    const { isDarkTheme} = useContext(ThemeContext);

    return (
        <div className={`flex flex-col  p-4 ${isDarkTheme ? "bg-black-100" : "bg-white-mode-300"}`}>
            {props.asset.map((item, index) => {
                if (item.name === "USD Coin") {
                    return (
                        <div>
                            <div className="flex flex-col justify-center items-center">
                            <div className={` rounded-lg m-4 w-full lg:w-1/2 ${isDarkTheme ? "bg-black-200" : "bg-white-mode-400"}`} key={index}>
                                <p className={` text-2xl ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>
                                    The price of {item.symbol.toUpperCase()} is {item.current_price}€
                                </p>
                            </div>
                            <div className={` rounded-lg m-4 w-full lg:w-1/2 ${isDarkTheme ? "bg-black-200" : "bg-white-mode-400"}`}>
                                <p className={` text-2xl ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>
                                    There now are {item.circulating_supply.toFixed(2)} {item.symbol.toUpperCase()} circulating
                                </p>
                            </div>
                            <div className={` rounded-lg m-4 w-full lg:w-1/2 ${isDarkTheme ? "bg-black-200" : "bg-white-mode-400"}`}>
                                <p className={` text-2xl ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>
                                    The maximum supply is {item.max_supply === null ? 'indefinite' : item.max_supply + ' ' + item.symbol.toUpperCase()}
                                </p>
                            </div>
                            </div>
                            <div>
                                <h3 className={` text-xl m-6 ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>What's {item.name}?</h3>
                                <p class={`px-1 md:px-15 ${isDarkTheme ? "text-white" : "text-black-100"}`}>USD Coin (known by its ticker USDC) is a stablecoin that is pegged to the U.S. dollar on a 1:1 basis. Every unit of this cryptocurrency in circulation is backed up by $1 that is held in reserve, in a mix of cash and short-term U.S. Treasury bonds. The Centre consortium, which is behind this asset, says USDC is issued by regulated financial institutions.

                                    The stablecoin originally launched on a limited basis in September 2018. Put simply, USD Coin’s mantra is “digital money for the digital age” — and the stablecoin is designed for a world where cashless transactions are becoming more common.

                                    Several use cases have been unveiled for the USD Coin. As well as providing a safe haven for crypto traders in times of volatility, those behind the stablecoin say it can also allow businesses to accept payments in digital assets, and shake up an array of sectors including decentralized finance and gaming.

                                    Overall, the goal is to create an ecosystem where USDC is accepted by as many wallets, exchanges, service providers and dApps as possible.</p>
                                <h3 className={` text-xl m-6 ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>Who Are the Founders of USD Coin?</h3>
                                <p class={`px-1 md:px-15 ${isDarkTheme ? "text-white" : "text-black-100"}`}>The Centre Consortium has two founding members. One of them is the peer-to-peer payment services company Circle, while the other is the Coinbase cryptocurrency exchange. Other crypto ventures are open to join this consortium.

                                    Explaining the rationale behind USDC, Circle co-founders Jeremy Allaire and Sean Neville wrote: “We believe that an open internet of value exchange can transform and integrate the world more deeply, eventually eliminating artificial economic borders and enabling a more efficient and inclusive global marketplace that connects every person on the planet.”

                                    In 2020, Circle and Coinbase collectively announced a major upgrade to USDC’s protocol and smart contract. The goal of these enhancements is to make it easier for USD Coin to be used for everyday payments, commerce and peer-to-peer transactions.</p>
                                <h3 className={` text-xl m-6 ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>What Makes USD Coin (USDC) Unique?</h3>
                                <p class={`px-1 md:px-15 ${isDarkTheme ? "text-white" : "text-black-100"}`}>The stablecoin market has become exceedingly crowded over recent years — but USD Coin has aimed to stand head and shoulders over competitors in several ways.

                                    One of them concerns transparency — and giving users the assurance that they will be able to withdraw 1 USDC and receive $1 in return without any issues. To this end, it says a major accounting firm is tasked with verifying the levels of cash that are held in reserve, and ensuring this matches up with the number of tokens in circulation.

                                    Unlike some crypto ventures, Circle and Coinbase have also achieved regulatory compliance — and this has helped pave the way for international expansion. Both projects are also well-funded, giving the stablecoin certainty.

                                    Coinbase briefly contemplated diversifying the funds backing USDC, but retracted that proposal after heavy community backlash. The transparency over the provenance of its funds has been a big reason for USDC's success. Unlike its rival USDT, which has found itself embroiled in repeated investigations, USDC has never been accused of any wrongdoing. That has led to USDC gobbling up much of USDT's dominance in the stablecoin market: although USDT commanded a 74%:16% lead in market share in February 2021, this has shrunk to a 45%:30% lead in February 2022.</p>
                                <h3 className={` text-xl m-6 ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>How Much Is Held in USD Coin Asset Reserves?</h3>
                                <p class={`px-1 md:px-15 ${isDarkTheme ? "text-white" : "text-black-100"}`}>Following the collapse of TerraUSD, stablecoin issuers have been under intense scrutiny over the quality of the reserves backing their tokens. In a transparency move, Circle Internet Financial LLC (Circle), the issuer of the USDC stablecoin released its reserves report as of July 31, 2022.

                                    According to the report, the total USDC reserves held by the company consist of $42.3 billion worth of US Treasury Securities and total cash deposits of $12.2 billion. The monthly reserve report was issued by leading global accounting firm Grant Thornton.

                                    The accounting firm later released an independent attestation dated August 24, 2022. It reads:

                                    “In our opinion, the Reserve Information in the accompanying USDC Reserve Report as of July 31, 2022 is fairly stated, based on the criteria set forth in the USDC Reserve Report, in all material respects.”</p>
                                <h3 className={` text-xl m-6 ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>How Many USD Coins (USDC) Are There in Circulation?</h3>
                                <p class={`px-1 md:px-15 ${isDarkTheme ? "text-white" : "text-black-100"}`}>It’s a bit difficult to give an exact number here — as in theory, the number of USDC that can exist is limitless. New coins are created in line with demand, whenever someone wants to purchase one with their humble dollar.

                                    That said, there have been factors that have helped USD Coin enjoy an explosion in popularity over the years — especially in 2020. One of them is the sudden, sharp rise in the popularity of decentralized finance. USDC is a common sight on many DeFi protocols given how it serves as an onramp to the wider ecosystem.</p>
                                <h3 className={` text-xl m-6 ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>How Is the USD Coin Network Secured?</h3>
                                <p class={`px-1 md:px-15 ${isDarkTheme ? "text-white" : "text-black-100"}`}>All of the USDCs in circulation are actually ERC-20 tokens, which can be found on the Ethereum blockchain. One of the biggest advantages here is how it can then be integrated with Ethereum-based applications. As we mentioned earlier, security and confidence in this stablecoin is delivered by proving that U.S. dollars are being held safely in reserve.</p>
                            </div>
                        </div>
                    );
                }
                return null;
            })}
        </div>
    )
}

export default USDcoin; 