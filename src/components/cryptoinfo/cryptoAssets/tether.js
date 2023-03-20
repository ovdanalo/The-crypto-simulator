import React, {useContext} from "react";
import ThemeContext from "../../ThemeContext";

const TETHER = (props) => {

    const { isDarkTheme} = useContext(ThemeContext);

    return (
        <div className={`flex flex-col  p-4 ${isDarkTheme ? "bg-black-100" : "bg-white-mode-300"}`}>
            {props.asset.map((item, index) => {
                if (item.name === "Tether") {
                    return (
                        <div>
                            <div className="flex flex-col justify-center items-center">
                            <div className={` rounded-lg m-4 w-full lg:w-1/2 ${isDarkTheme ? "bg-black-200" : "bg-white-mode-400"}`} key={index}>
                                <p className={`text-2xl ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>
                                    The price of {item.symbol.toUpperCase()} is {item.current_price}€
                                </p>
                            </div>
                            <div className={` rounded-lg m-4 w-full lg:w-1/2 ${isDarkTheme ? "bg-black-200" : "bg-white-mode-400"}`}>
                                <p className={`text-2xl ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>
                                    There now are {item.circulating_supply.toFixed(2)} {item.symbol.toUpperCase()} circulating
                                </p>
                            </div>
                            <div className={` rounded-lg m-4 w-full lg:w-1/2 ${isDarkTheme ? "bg-black-200" : "bg-white-mode-400"}`}>
                                <p className={`text-2xl ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>
                                    The maximum supply is {item.max_supply === null ? 'indefinite' : item.max_supply + ' ' + item.symbol.toUpperCase()}
                                </p>
                            </div>
                            </div>
                            <div>
                                <h3 className={` text-xl m-6 ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>What's {item.name}?</h3>
                                <p class={` px-1 md:px-15 ${isDarkTheme ? "text-white" : "text-black-100"}`}>USDT is a stablecoin (stable-value cryptocurrency) that mirrors the price of the U.S. dollar, issued by a Hong Kong-based company Tether. The token’s peg to the USD is achieved via maintaining a sum of commercial paper, fiduciary deposits, cash, reserve repo notes, and treasury bills in reserves that is equal in USD value to the number of USDT in circulation.

                                    Originally launched in July 2014 as Realcoin, a second-layer cryptocurrency token built on top of Bitcoin’s blockchain through the use of the Omni platform, it was later renamed to USTether, and then, finally, to USDT. In addition to Bitcoin’s, USDT was later updated to work on the Ethereum, EOS, Tron, Algorand, and OMG blockchains.

                                    The stated purpose of USDT is to combine the unrestricted nature of cryptocurrencies — which can be sent between users without a trusted third-party intermediary — with the stable value of the US dollar.

                                    Stablecoins are increasingly used as an inflation hedge in recent times; compared to keeping fiat currency in a savings account averaging 0.06%, users can lend their stablecoins and earn yields ranging from 3% to as high as 20%. However, keep in mind that regulatory, platform risks and more entail.</p>
                                <h3 className={` text-xl m-6 ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>Who Are The Founders Of Tether?</h3>
                                <p class={` px-1 md:px-15 ${isDarkTheme ? "text-white" : "text-black-100"}`}>USDT — or as it was known at the time, Realcoin — was launched in 2014 by Brock Pierce, Reeve Collins and Craig Sellars.

                                    Brock Pierce is a well-known entrepreneur who has co-founded a number of high-profile projects in the crypto and entertainment industries. In 2013, he co-founded a venture capital firm Blockchain Capital, which by 2017 had raised over $80 million in funding. In 2014, Pierce became the director of the Bitcoin Foundation, a nonprofit established to help improve and promote Bitcoin. Pierce has also co-founded Block.one, the company behind EOS, one of the largest cryptocurrencies on the market.

                                    Reeve Collins was the CEO of Tether for the first two years of its existence. Prior to that, he had co-founded several successful companies, such as the online ad network Traffic Marketplace, entertainment studio RedLever and gambling website Pala Interactive. As of 2020, Collins is heading SmarMedia Technologies, a marketing and advertising tech company.

                                    Other than working on Tether, Craig Sellars has been a member of the Omni Foundation for over six years. Its Omni Protocol allows users to create and trade smart-contract based properties and currencies on top of Bitcoin’s blockchain. Sellars has also worked in several other cryptocurrency companies and organizations, such as Bitfinex, Factom, Synereo and the MaidSafe Foundation.</p>
                                <h3 className={` text-xl m-6 ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>What Makes Tether Unique?</h3>
                                <p class={` px-1 md:px-15 ${isDarkTheme ? "text-white" : "text-black-100"}`}>USDT’s unique feature is the fact that its value is guaranteed by Tether to remain pegged to the U.S. dollar. According to Tether, whenever it issues new USDT tokens, it allocates the same amount of USD to its reserves, thus ensuring that USDT is fully backed by cash and cash equivalents.

                                    The famously high volatility of the crypto markets means that cryptocurrencies can rise or fall by 10-20% within a single day, making them unreliable as a store of value. USDT, on the other hand, is protected from these fluctuations.

                                    This property makes USDT a safe haven for crypto investors: during periods of high volatility, they can park their portfolios in Tether without having to completely cash out into USD. In addition, USDT provides a simple way to transact a U.S. dollar equivalent between regions, countries and even continents via blockchain — without having to rely on a slow and expensive intermediary, like a bank or a financial services provider.

                                    However, over the years, there have been a number of controversies regarding the validity of Tether’s claims about their USD reserves, at times disrupting USDT’s price, which went down as low as $0.88 at one point in its history. Many have raised concerns about the fact that Tether’s reserves have never been fully audited by an independent third party.</p>
                                <h3 className={` text-xl m-6 ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>What Is the Tether FUD About?</h3>
                                <p class={` px-1 md:px-15 ${isDarkTheme ? "text-white" : "text-black-100"}`}>Tether has been the target of a lot of FUD due to its murky balance sheet and lack of a public audit. The company has repeatedly been fined for misleading statements around the state of its books. After Tether released a first breakdown of its balances, it came under even more scrutiny from regulators over its claims that all issued stablecoins are fully backed by dollar reserves.

                                    Even though a report supposedly cleared Tether from any allegations of wrongdoing, doubts remain. The company has been in repeated spats over its business practices, but most in crypto accept that Tether is, in a way, "too big too fail."</p>
                                <h3 className={` text-xl m-6 ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>How Many Tether (USDT) Coins Are There In Circulation?</h3>
                                <p class={` px-1 md:px-15 ${isDarkTheme ? "text-white" : "text-black-100"}`}>There is no hard-coded limit on the total supply of USDT — given the fact that it belongs to a private company, theoretically, its issuance is limited only by Tether’s own policies. However, because Tether claims that every single USDT is supposed to be backed by one U.S. dollar, the amount of tokens is limited by the company’s actual cash reserves.

                                    Moreover, Tether does not disclose its issuance schedules ahead of time. Instead, they provide daily transparency reports, listing the total amount of their asset reserves and liabilities, the latter corresponding to the amount of USDT in circulation.

                                    As of September 2020, there are over 14.4 billion USDT tokens in circulation, which are backed by $14.6 billion in assets, according to Tether.</p>
                                <h3 className={` text-xl m-6 ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>How Is the Tether Network Secured?</h3>
                                <p class={` px-1 md:px-15 ${isDarkTheme ? "text-white" : "text-black-100"}`}>USDT does not have its own blockchain — instead, it operates as a second-layer token on top of other cryptocurrencies’ blockchains: Bitcoin, Ethereum, EOS, Tron, Algorand, Bitcoin Cash and OMG, and is secured by their respective hashing algorithms.</p>
                            </div>
                        </div>
                    );
                }
                return null;
            })}
        </div>
    )
}

export default TETHER; 