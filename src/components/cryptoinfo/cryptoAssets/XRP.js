import React, {useContext} from "react";
import ThemeContext from "../../ThemeContext";

const XRP = (props) => {

    const { isDarkTheme} = useContext(ThemeContext);

    return (
        <div className={`flex flex-col  p-4 ${isDarkTheme ? "bg-black-100" : "bg-white-mode-200"}`}>
            {props.asset.map((item, index) => {
                if (item.name === "XRP") {
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
                                <p class={`px-1 md:px-10 ${isDarkTheme ? "text-white" : "text-black-100"}`}>Launched in 2021, the XRP Ledger (XRPL) is an open-source, permissionless and decentralized technology. Benefits of the XRP Ledger include its low-cost ($0.0002 to transact), speed (settling transactions in 3-5 seconds), scalability (1,500 transactions per second) and inherently green attributes (carbon-neutral and energy-efficient). The XRP Ledger also features the first decentralized exchange (DEX) and custom tokenization capabilities built into the protocol. Since 2012, the XRP Ledger has been operating reliably, having closed 70 million ledgers.</p>
                                <h3 className={`text-xl m-6 ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>Who Are the Founders of the XRP Ledger?</h3>
                                <p class={`px-1 md:px-10 ${isDarkTheme ? "text-white" : "text-black-100"}`}>In 2012, David Schwartz, Jed McCaleb and Arthur Britto launched the XRP Ledger with its native currency XRP as a faster, more energy-efficient alternative to the Bitcoin blockchain. In September that year, along with Chris Larsen, they founded the company that is today known as Ripple.</p>
                                <h3 className={`text-xl m-6 ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>What Makes XRPL Unique?</h3>
                                <p class={`px-1 md:px-10 ${isDarkTheme ? "text-white" : "text-black-100"}`}>The XRP Ledger presents a wide variety of applications and use cases related to payments including micropayments, DeFi, and, soon, NFTs. Deployed in 2012, the XRPL supports enterprises and Python, Java and JavaScript developers with powerful utility and flexibility. On the XRP website, developers can access different tutorials to help them get started using different coding languages, building apps, managing accounts and more.

                                    Alongside its native coin, XRP, the XRP Ledger is used by developers to create solutions that solve inefficiencies, including remittance and asset tokenization. Currently, the five main applications of the XRP Ledger are payments, tokenization, DeFi, CBDCs and stablecoins.</p>
                                <h3 className={`text-xl m-6 ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>How Many XRP Coins Are There in Circulation?</h3>
                                <p class={`px-1 md:px-10 ${isDarkTheme ? "text-white" : "text-black-100"}`}>The XRP Ledger architects gifted 80 billion XRP to Ripple so that the company could build use cases — including its global payments network, RippleNet — around the digital asset.</p>
                                <h3 className={`text-xl m-6 ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>How Is the XRP Ledger Network Secured?</h3>
                                <p class={`px-1 md:px-10 ${isDarkTheme ? "text-white" : "text-black-100"}`}>Unlike Bitcoin or Ethereum, the XRPL uses a unique Federated Consensus mechanism as its method of validating transactions. Transactions are confirmed on the XRPL through a consensus protocol, in which designated independent servers called validators come to an agreement on the order and outcome of XRP transactions. All servers in the network process each transaction according to the same rules, and any transaction that follows the protocol is confirmed right away. All transactions are public and transparent, and anyone can operate a validator. There are currently over 150 validators on the ledger, operated by universities, exchanges, businesses, and individuals around the world.

                                    Through the Federated Consensus mechanism, all verified transactions can be processed without a single point of failure as no single participant makes a decision independently.</p>
                                <h3 className={`text-xl m-6 ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>Ripple and the SEC</h3>
                                <p class={`px-1 md:px-10 ${isDarkTheme ? "text-white" : "text-black-100"}`}>Since late 2020, Ripple Labs, the creators of the XRP token, has been locked in a legal battle with the United States Securities and Exchange Commission. The big question is whether or not XRP is a security.

                                    On Dec. 22, 2020, the SEC filed a lawsuit against Ripple Labs and two of its executives on the grounds that they traded $1.3 billion in their XRP token as security without registering it with the commission. There have been arguments for and against the lawsuit. However, Ripple has strongly countered the claims, arguing that the SEC has been biased in its assessment.

                                    The SEC uses the “Howey test,” based on the Supreme Court ruling on SEC v. W.J. Howey Co in 1946, to determine whether a cryptocurrency is a security. An asset is considered a security if it is sold with the expectation of getting profits from the efforts of other parties. Based on the commission’s definition of XRP in its lawsuit, the cryptocurrency would pass the Howey test, and according to SEC regulations, all securities must be registered.

                                    While most companies targeted by the SEC in a similar matter chose to settle, Ripple decided to fight. The outcome of the lawsuit will undoubtedly have far-reaching implications in the crypto space. If Ripple prevails, the SEC could lose some of its credibility, giving other crypto-based companies the confidence to revolt. On the flip side, if the SEC wins the case, it could upend the way crypto firms operate and usher in a new wave of registration rules that apply to securities.</p>
                            </div>
                        </div>
                    );
                }
                return null;
            })}
        </div>
    )
}

export default XRP;
