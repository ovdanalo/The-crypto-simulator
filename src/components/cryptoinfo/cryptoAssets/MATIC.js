import React, {useContext} from "react";
import ThemeContext from "../../ThemeContext";

const MATIC = (props) => {

    const { isDarkTheme} = useContext(ThemeContext);

    return (
        <div className={`flex flex-col  p-4 ${isDarkTheme ? "bg-black-100" : "bg-white-mode-300"}`}>
            {props.asset.map((item, index) => {
                if (item.name === "Polygon") {
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
                                <h3 className={`text-xl m-6 ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>What's {item.name}?</h3>
                                <p class={`px-1 md:px-15 ${isDarkTheme ? "text-white " : "text-black-100"}`}>Polygon (previously Matic Network) is the first well-structured, easy-to-use platform for Ethereum scaling and infrastructure development. Its core component is Polygon SDK, a modular, flexible framework that supports building multiple types of applications.

                                    To learn more about this project, check out our deep dive of Polygon Matic.

                                    Using Polygon, one can create optimistic rollup chains, ZK rollup chains, stand alone chains or any other kind of infra required by the developer.

                                    Polygon effectively transforms Ethereum into a full-fledged multi-chain system (aka Internet of Blockchains). This multi-chain system is akin to other ones such as Polkadot, Cosmos, Avalanche etc. with the advantages of Ethereum’s security, vibrant ecosystem and openness.

                                    The $MATIC token will continue to exist and will play an increasingly important role, securing the system and enabling governance.

                                    Polygon (formerly Matic Network) is a Layer 2 scaling solution backed by Binance and Coinbase. The project seeks to stimulate mass adoption of cryptocurrencies by resolving the problems of scalability on many blockchains.

                                    Polygon combines the Plasma Framework and the proof-of-stake blockchain architecture. The Plasma framework used by Polygon as proposed by the co-founder of Ethereum, Vitalik Buterin, allows for the easy execution of scalable and autonomous smart contracts.

                                    Nothing will change for the existing ecosystem built on the Plasma-POS chain. With Polygon, new features are being built around the existing proven technology to expand the ability to cater to diverse needs from the developer ecosystem. Polygon will continue to develop the core technology so that it can scale to a larger ecosystem.

                                    Polygon boasts of up to 65,000 transactions per second on a single side chain, along with a respectable block confirmation time of less than two seconds. The framework also allows for the creation of globally available decentralized financial applications on a single foundational blockchain.

                                    The Plasma framework gives Polygon the potential of housing an unlimited number of decentralized applications on their infrastructure without experiencing the normal drawbacks common on proof-of-work blockchains. So far, Polygon has attracted more than 50 DApps to its PoS-secured Ethereum sidechain.

                                    MATIC, the native tokens of Polygon, is an ERC-20 token running on the Ethereum blockchain. The tokens are used for payment services on Polygon and as a settlement currency between users who operate within the Polygon ecosystem. The transaction fees on Polygon sidechains are also paid in MATIC tokens.</p>
                                <h3 className={`text-xl m-6 ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>Who Are the Founders of Polygon?</h3>
                                <p class={`px-1 md:px-15 ${isDarkTheme ? "text-white " : "text-black-100"}`}>Polygon (formerly Matic Network) was launched in October 2017. Polygon was co-founded by Jaynti Kanani, Sandeep Nailwal and Anurag Arjun, two experienced blockchain developers and a business consultant.

                                    Before moving to its network in 2019, the Polygon team was a huge contributor in the Ethereum ecosystem. The team worked on implementing the Plasma MVP, the WalletConnect protocol and the widely-used Dagger event notification engine on Ethereum.

                                    The team included co-founder of Polygon, Jaynti Kanani. Jaynti, a full-stack developer and blockchain engineer currently serves as the CEO of Polygon.

                                    Jaynti played an integral role in implementing Web3, Plasma and the WalletConnect protocol on Ethereum. Prior to his blockchain involvement, Jaynti worked as a data scientist with Housing.com.

                                    Co-founder and chief operations officer of Polygon, Sandeep Nailwal is a blockchain programmer and entrepreneur. Before jointly starting Polygon (formerly Matic), Sandeep had served as the CEO of Scopeweaver, and the chief technical officer of Welspun Group.

                                    Anurag Arjun is the only non-programming co-founder of Polygon. As a product manager, he has had stints with IRIS Business, SNL Financial, Dexter Consultancy and Cognizant Technologies.</p>
                                <h3 className={`text-xl m-6 ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>What Makes Polygon Unique?</h3>
                                <p class={`px-1 md:px-15 ${isDarkTheme ? "text-white " : "text-black-100"}`}>Polygon is self-described as a Layer 2 scaling solution, which means that the project doesn’t seek to upgrade its current basic blockchain layer any time soon. The project focuses on reducing the complexity of scalability and instant blockchain transactions.

                                    Polygon uses a customized version of the Plasma framework which is built on proof-of-stake checkpoints that run through the Ethereum main-chain. This unique technology allows each sidechain on Polygon to achieve up to 65,536 transactions per block.

                                    Commercially, the sidechains of Polygon are structurally designed to support a variety of decentralized finance (DeFi) protocols available in the Ethereum ecosystem.

                                    While Polygon currently supports only Ethereum basechain, the network intends to extend support for additional basechains, based on community suggestions and consensus. This would make Polygon an interoperable decentralized Layer 2 blockchain platform</p>
                                <h3 className={`text-xl m-6 ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>Polygon (MATIC) London Hard Fork and EIP-1559 Upgrade</h3>
                                <p class={`px-1 md:px-15 ${isDarkTheme ? "text-white " : "text-black-100"}`}>Polygon announced the much-anticipated London Hard Fork and Ethereum Improvement Proposal (EIP) 1559 upgrade will go live on the mainnet on Jan. 18, 2022. The upgrade will completely change the way the fee mechanism works on the Ethereum network — it eliminates first-price auction as the main fee calculation mechanism and instead uses a base fee that is burned, instead of sent to miners. Although it does not lower transaction fees, it makes it more stable, allowing users to estimate costs better and reduce overpayment.

                                    However, as MATIC tokens are burned as base fees — and MATIC has a fixed supply of 10 billion tokens — it will have a deflationary effect on the digital asset. Polygon’s core team projected an annual burn of MATIC amounting to 0.27% of the token’s total supply — around 27 million tokens. This deflationary pressure will most likely benefit validators and delegators the most, as rewards for processing transactions on Polygon are denominated in MATIC. Furthermore, base fee will increase automatically once the block is filled up, resulting in fewer spam transactions and less network congestion. Ethereum mainnet’s London Hard Fork went live on Aug. 5, 2021.</p>
                                <h3 className={`text-xl m-6 ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>Polygon Network Carbon Neutrality</h3>
                                <p class={`px-1 md:px-15 ${isDarkTheme ? "text-white " : "text-black-100"}`}>Polygon is one of the multiple blockchains achieving carbon neutrality. That initiative is part of Polygon's Green Manifesto, which aims to focus on sustainable development for blockchain. Polygon committed $20 million for various community initiatives to utilize Web3 technology to build a sustainable future for all. That includes focusing on new solutions for on-chain carbon credit retirement.

                                    Through a partnership with KlimaDAO, Polygon bought $400,000 worth of carbon credits. Those credits represent nearly 90,000 tonnes of CO2 emissions. The tokens were retired through KlimaDAO's offset aggregator tool, with BCT and MCO2 carbon credits created from offsets certified under the Verified Carbon Standard.

                                    KlimaDAO is a decentralized collective of environmentalists, entrepreneurs, and developers looking to modernize the carbon market through on-chain technology.

                                    Furthermore, KlimaDAO and Offsetra analyzed Polygon's network energy footprint to determine emission hotspots and figure out a compelling mitigation approach. That includes looking at emissions from staking node hardware, the energy consumption of staking operations and more,

                                    Becoming carbon neutral is the first step for Polygon toward sustainability. Even though the network relies on proof-of-stake, far more energy-efficient than proof-of-work, the network continues to impact the environment. That applies to both Polygon-only activity and the native smart contracts interacting with the Ethereum blockchain.

                                    Polygon and KlimaDAO have also retired carbon credits from various network-native projects, including Bull Run Forest Conservation Project, the Ghani Solar Power Project, Moss.Earth and the wind power project at Jaibhim, India.</p>
                                <h3 className={`text-xl m-6 ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>How Many Polygon (MATIC) Tokens Are There in Circulation?</h3>
                                <p class={`px-1 md:px-15 ${isDarkTheme ? "text-white " : "text-black-100"}`}>MATIC tokens are released on a monthly basis. MATIC currently has a circulating supply of 4,877,830,774 MATIC tokens and a max supply of 10,000,000,000 MATIC tokens.

                                    At its initial private sale in 2017, 3.8 percent of MATIC’s max supply was issued. In the April 2019 launchpad sale, another 19 percent of the total supply was sold. The MATIC price was $0.00263 per token, and $5 million was generated.

                                    The remaining MATIC tokens are distributed as follows:

                                    Team tokens: 16 percent of the total supply.
                                    Advisors tokens: 4 percent of the total supply.
                                    Network Operations tokens: 12 percent of the total supply.
                                    Foundation tokens: 21.86 percent of the total supply.
                                    Ecosystem tokens: 23.33 percent of the total supply.
                                    According to the release schedule, all the tokens will be released by December 2022.</p>
                                <h3 className={`text-xl m-6 ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>How Is the Polygon Secured?</h3>
                                <p class={`px-1 md:px-15 ${isDarkTheme ? "text-white " : "text-black-100"}`}>As a Layer 2 solution utilizing a network of proof-of-stake validators for asset security, staking is an integral part of the Polygon ecosystem. Validators on the network will stake their MATIC tokens as collateral to become part of the network’s PoS consensus mechanism and will receive MATIC tokens in return.

                                    Members of the network who do not wish to become validators can delegate their MATIC tokens to another validator, but will still take part in their staking process and earn staking rewards.

                                    In addition to the proof-of-stake checkpointing, Polygon uses block producers at the block producer layer to achieve a higher degree of decentralization. These block producers give finality to the main chains using checkpoints and fraud-proof mechanisms.</p>
                            </div>
                        </div>
                    );
                }
                return null;
            })}
        </div>
    )
}

export default MATIC; 