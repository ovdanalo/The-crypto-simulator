import React, {useContext} from "react";
import ThemeContext from "../../ThemeContext";
const ADA = (props) => {
    const { isDarkTheme} = useContext(ThemeContext);

    return (
        <div className={`flex flex-col  p-4 ${isDarkTheme ? "bg-black-100" : "bg-white-mode-200"}`}>
            {props.asset.map((item, index) => {
                if (item.name === "Cardano") {
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
                                <h3 className={`text-xl m-6  ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>What's {item.name}?</h3>
                                <p class={`px-1 md:px-15  ${isDarkTheme ? "text-white" : "text-black-100"}`}>Cardano is a proof-of-stake blockchain platform that says its goal is to allow “changemakers, innovators and visionaries” to bring about positive global change.

                                    To learn more about this project, check out our deep dive of Cardano.

                                    The open-source project also aims to “redistribute power from unaccountable structures to the margins to individuals” — helping to create a society that is more secure, transparent and fair.

                                    Cardano was founded back in 2017, and named after the 16th century Italian polymath Gerolamo Cardano. The native ADA token takes its name from the 19th century mathematician Ada Lovelace, widely regarded as the world’s first computer programmer. The ADA token is designed to ensure that owners can participate in the operation of the network. Because of this, those who hold the cryptocurrency have the right to vote on any proposed changes to the software.

                                    The team behind the layered blockchain say that there have already been some compelling use cases for its technology, which aims to allow decentralized apps and smart contracts to be developed with modularity.

                                    In August 2021, Charles Hoskinson announced the launch of the Alonzo hard fork, causing Cardano price to surge, gaining 116% in the following month. On Sept. 12, 2021, the Cardano ‘Alonzo’ hard fork officially launched, bringing smart contract functionality to the blockchain. Over 100 smart contracts were deployed in the following 24 hours after the launch.

                                    Cardano is used by agricultural companies to track fresh produce from field to fork, while other products built on the platform allow educational credentials to be stored in a tamper-proof way, and retailers to clamp down on counterfeit goods.</p>
                                <h3 className={`text-xl m-6  ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>Who Are the Founders of Cardano?</h3>
                                <p class={`px-1 md:px-15  ${isDarkTheme ? "text-white" : "text-black-100"}`}>Cardano was founded by Charles Hoskinson, who was also one of the co-founders of the Ethereum network. He is the CEO of IOHK, the company that built Cardano’s blockchain.

                                    In an interview for CoinMarketCap’s Crypto Titans series, Hoskinson said that he got involved in cryptocurrencies back in 2011 — and dabbled in mining and trading. He explained that his first professional involvement in the industry came in 2013, when he created a course about Bitcoin that ended up being taken by 80,000 students.

                                    As well as being a technology entrepreneur, Hoskinson is also a mathematician. In 2020, his technology company donated ADA worth $500,000 to the University of Wyoming’s Blockchain Research and Development Lab.</p>
                                <h3 className={`text-xl m-6  ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>What Makes Cardano Unique?</h3>
                                <p class={`px-1 md:px-15  ${isDarkTheme ? "text-white" : "text-black-100"}`}>Cardano is one of the biggest blockchains to successfully use a proof-of-stake consensus mechanism, which is less energy intensive than the proof-of-work algorithm relied upon by Bitcoin. Although the much larger Ethereum is going to be upgrading to PoS, this transition is only going to take place gradually.

                                    The project has taken pride in ensuring that all of the technology developed goes through a process of peer-reviewed research, meaning that bold ideas can be challenged before they are validated. According to the Cardano team, this academic rigor helps the blockchain to be durable and stable — increasing the chance that potential pitfalls can be anticipated in advance.

                                    In 2020, Cardano held a Shelley upgrade that aimed to make its blockchain “50 to 100 times more decentralized” than other large blockchains. At the time, Hoskinson predicted that this would pave the way for hundreds of assets to run on its network.

                                    The Alonzo hard fork launch in September 2021 will bring an end to the Shelley era, and usher in the Goguen phase. Users can develop and deploy smart contracts on Cardano, allowing native decentralized applications (DApps) to be built on blockchain. Cardano price broke the $3 mark and hit an all-time high of $3.101 on Sept. 2, 2021, ahead of the launch.</p>
                                <h3 className={`text-xl m-6  ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>What Is Cardano’s Vasil Hard Fork?</h3>
                                <p class={`px-1 md:px-15  ${isDarkTheme ? "text-white" : "text-black-100"}`}>Named after late Bulgarian mathematician Vasil Dabov, a prominent contributor to Cardano, the Vasil hard fork is touted as one of the most highly-anticipated upgrades for Cardano. The hard fork is the third development epoch of Cardano and is supposed to introduce several upgrades to the blockchain’s smart contract programming language Plutus and the network’s capacity.

                                    The event was originally billed to happen in June 2022, but has been postponed a number of times.

                                    Vasil will introduce five critical mechanisms to improve Cardano’s scalability and usability — CIP-31, CIP-32, CIP-33, CIP-40 and diffusion pipelining.

                                    CIP-31, aka “reference inputs” will introduce a new kind of input that would allow developers to look at the result of an output without having to spend it. This would optimize transaction throughput and increase concurrency.

                                    The CIP-32 proposal aims to enable inline datums. Rather than attach datum to datum hashes, which is the current state of things, CIP-32 would allow developers to attach datums to outputs. By implementing this update, devs can code scripts that directly point to the input, making room for simpler and quicker communication of datum values between users.

                                    The Cardano Improvement Proposal 33 would allow reference scripts to be attached to outputs. As a result, the reference scripts are used to satisfy the validation requirements in place of the spending transaction. These reference scripts will make the validation process more efficient and reduce the size of transactions.

                                    Meanwhile, CIP-40 features a brand-new type of output to transactions called collateral outputs, aimed at improving the overall scalability of the network.

                                    Diffusing pipelining is Cardano’s consensus layer scaling solution. The improvement proposal will see more DApp deployment by overlaying some of the steps that a block needs to go through as it moves across the chain: this would allow for concurrent transactions.</p>
                                <h3 className={`text-xl m-6  ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>How Many Cardano (ADA) Coins Are There in Circulation?</h3>
                                <p class={`px-1 md:px-15  ${isDarkTheme ? "text-white" : "text-black-100"}`}>There is a maximum supply of 45 billion ADA — but at the time of writing, there was a circulating supply of about 31 billion. Five rounds of public sales of Cardano tokens were held between September 2015 and January 2017. Cardano price during its pre-launch sale was $0.0024, which represents an over 1000x return, given Cardano price now.

                                    Approximately 2.5 billion ADA was allotted to IOHK once the network launched. Meanwhile, an additional 2.1 billion ADA was given to Emurgo, a global blockchain technology company that served as a founding entity of the Cardano protocol. Last but not least, 648 million ADA was given to the not-for-profit Cardano Foundation, which aims to promote the platform and increase levels of adoption.

                                    Overall, about 16% of ADA’s total supply went to the project’s founders, with the remaining 84% being split among investors.</p>
                                <h3 className={`text-xl m-6  ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>How Is the Cardano Network Secured?</h3>
                                <p class={`px-1 md:px-15  ${isDarkTheme ? "text-white" : "text-black-100"}`}>Cardano is secured through an “environmentally sustainable, verifiably secure” PoS protocol that’s known as Ouroboros.

                                    The project says that Ouroboros improves upon the security guarantees that are delivered by a PoW consensus mechanism while using substantially less power — claiming that it is four times more energy efficient than Bitcoin.

                                    It is described as a blend of unique technology and mathematically verified mechanisms, with behavioral psychology and economic philosophy thrown in for good measure. Overall, the objective of Ouroboros is to achieve sustainable and ethical growth.

                                    An incentive mechanism means that participants in the network are rewarded for their involvement.</p>
                                <h3 className={`text-xl m-6  ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>What Is Cardano’s Alonzo Upgrade?</h3>
                                <p class={`px-1 md:px-15  ${isDarkTheme ? "text-white" : "text-black-100"}`}>On Sept. 12, Cardano released its highly-anticipated Alonzo upgrade. Following the upgrade, the blockchain network can now support a wide range of crypto applications, including non-fungible tokens (NFTs) and smart contracts.

                                    According to the project’s founder Charles Hoskinson, Alonzo aims to introduce “programmability” to the network. He likened the upgrade to when JavaScript was introduced to web browsers and the transition from static web pages to the likes of Facebook and YouTube.

                                    Alonzo is named after American mathematician Alonzo Church, who is considered to be one of the founding fathers of computer science.

                                    In addition to supporting NFTs and smart contracts, Cardano can now be used for decentralized exchanges.

                                    In general, Alonzo puts Cardano in the same class as Ethereum, the world’s leading blockchain which supports other applications other than its native Ether token. Smart contracts, for instance, are one of the cornerstones of the decentralized finance sector — and Cardano now supports smart contracts.

                                    In February 2022, the number of Cardano wallets broke the three million milestone. Since December 2020, it has surged by 1,200%, from 190,000 to over 3,000,000. This coincided with an increase in smart contracts following the Alonzo Upgrade, and Cardano surpassed the 1,000 smart contracts milestone on Jan. 27, 2022.

                                    Another indicator of the ecosystem's explosive growth is developer activity: Cardano boasted the most developers contributing to its Github, beating out more developed blockchains like Solana. On average, more than 50 contributions are submitted to its repo per day.

                                    However, the network is still struggling with implementing its smart contracts, and users had complaints about a sluggish launch of its SundaeSwap decentralized exchange in January 2022.

                                </p>
                            </div>
                        </div>
                    );
                }
                return null;
            })}
        </div>
    )
}

export default ADA;
