import React from "react";

const ETH = (props) => {

    return (
        <div className="flex flex-col bg-black-100 p-4">
            {props.asset.map((item, index) => {
                if (item.name === "Ethereum") {
                    return (
                        <div>
                            <div className="flex flex-col justify-center items-center">
                            <div className="bg-black-200 rounded-lg m-4 w-full lg:w-1/2" key={index}>
                                <p className="text-teal-100 text-2xl">
                                    The price of {item.symbol.toUpperCase()} is {item.current_price}€
                                </p>
                            </div>
                            <div className="bg-black-200 rounded-lg m-4 w-full lg:w-1/2">
                                <p className="text-teal-100 text-2xl">
                                    There now are {item.circulating_supply.toFixed(2)} {item.symbol.toUpperCase()} circulating
                                </p>
                            </div>
                            <div className="bg-black-200 rounded-lg m-4 w-full lg:w-1/2">
                                <p className="text-teal-100 text-2xl">
                                    The maximum supply is {item.max_supply === null ? 'indefinite' : item.max_supply + ' ' + item.symbol.toUpperCase()}
                                </p>
                            </div>
                            </div>
                            <div>
                                <h3 className="text-teal-100 text-xl m-6">What's {item.name}?</h3>
                                <p class="text-white px-1 md:px-15">Ethereum is a decentralized open-source blockchain system that features its own cryptocurrency, Ether. ETH works as a platform for numerous other cryptocurrencies, as well as for the execution of decentralized smart contracts.

                                    Ethereum was first described in a 2013 whitepaper by Vitalik Buterin. Buterin, along with other co-founders, secured funding for the project in an online public crowd sale in the summer of 2014. The project team managed to raise $18.3 million in Bitcoin, and Ethereum’s price in the Initial Coin Offering (ICO) was $0.311, with over 60 million Ether sold. Taking Ethereum’s price now, this puts the return on investment (ROI) at an annualized rate of over 270%, essentially almost quadrupling your investment every year since the summer of 2014.

                                    The Ethereum Foundation officially launched the blockchain on July 30, 2015, under the prototype codenamed “Frontier.” Since then, there has been several network updates — “Constantinople” on Feb. 28, 2019, “Istanbul” on Dec. 8, 2019, “Muir Glacier” on Jan. 2, 2020, “Berlin” on April 14, 2021, and most recently on Aug. 5, 2021, the “London” hard fork.

                                    Ethereum’s own purported goal is to become a global platform for decentralized applications, allowing users from all over the world to write and run software that is resistant to censorship, downtime and fraud.</p>
                                <h3 className="text-teal-100 text-xl m-6">Who Are the Founders of {item.name}?</h3>
                                <p class="text-white px-1 md:px-15">Ethereum has a total of eight co-founders — an unusually large number for a crypto project. They first met on June 7, 2014, in Zug, Switzerland.

                                    Russian-Canadian Vitalik Buterin is perhaps the best known of the bunch. He authored the original white paper that first described Ethereum in 2013 and still works on improving the platform to this day. Prior to ETH, Buterin co-founded and wrote for the Bitcoin Magazine news website.
                                    British programmer Gavin Wood is arguably the second most important co-founder of ETH, as he coded the first technical implementation of Ethereum in the C++ programming language, proposed Ethereum’s native programming language Solidity and was the first chief technology officer of the Ethereum Foundation. Before Ethereum, Wood was a research scientist at Microsoft. Afterward, he moved on to establish the Web3 Foundation.
                                    Among the other co-founders of Ethereum are: - Anthony Di Iorio, who underwrote the project during its early stage of development. - Charles Hoskinson, who played the principal role in establishing the Swiss-based Ethereum Foundation and its legal framework. - Mihai Alisie, who provided assistance in establishing the Ethereum Foundation. - Joseph Lubin, a Canadian entrepreneur, who, like Di Iorio, has helped fund Ethereum during its early days, and later founded an incubator for startups based on ETH called ConsenSys. - Amir Chetrit, who helped co-found Ethereum but stepped away from it early into the development.</p>
                                <h3 className="text-teal-100 text-xl m-6">What Makes Ethereum Unique?</h3>
                                <p class="text-white px-1 md:px-15">Ethereum has pioneered the concept of a blockchain smart contract platform. Smart contracts are computer programs that automatically execute the actions necessary to fulfill an agreement between several parties on the internet. They were designed to reduce the need for trusted intermediates between contractors, thus reducing transaction costs while also increasing transaction reliability.

                                    Ethereum’s principal innovation was designing a platform that allowed it to execute smart contracts using the blockchain, which further reinforces the already existing benefits of smart contract technology. Ethereum’s blockchain was designed, according to co-founder Gavin Wood, as a sort of “one computer for the entire planet,” theoretically able to make any program more robust, censorship-resistant and less prone to fraud by running it on a globally distributed network of public nodes.

                                    In addition to smart contracts, Ethereum’s blockchain is able to host other cryptocurrencies, called “tokens,” through the use of its ERC-20 compatibility standard. In fact, this has been the most common use for the ETH platform so far: to date, more than 280,000 ERC-20-compliant tokens have been launched. Over 40 of these make the top-100 cryptocurrencies by market capitalization, for example, USDT, LINK and BNB. Since the emergence of Play2Earn games, there has been a substantial increase in interest in the ETH to PHP price.</p>
                                <h3 className="text-teal-100 text-xl m-6">What is Ethereum Name Service?</h3>
                                <p class="text-white px-1 md:px-15">Ethereum Name Service, aka ENS, is a distributed and extensible naming system based on the Ethereum blockchain. It is essentially the Web3 version of DNS, short for domain name service.

                                    In its original state, a cryptocurrency address consists of a long string of numbers and letters designed to be read by computers. It may look like this — “0xDC25EF3F5B8A186998338A2ADA83795FBA2D695E” — making it confusing at times to read, and in some cases even leading to loss of funds.

                                    ENS provides a solution to this problem of long and confusing crypto addresses by assigning human-readable names to machine-readable identifiers such as Ethereum addresses, metadata, other cryptocurrency addresses and content hashes. With ENS, the long address above could become something as simple as “Alice.eth,” and you can receive any type of cryptocurrency or NFT via your ENS domain.

                                    ENS is based on two Ethereum smart contracts. The first is the ENS registry, which records three critical pieces of information: the owner of the domain, the resolver for the domain and the caching time for all records under the domain. The second smart contract is the Resolver, which translates the domain name to a machine-readable address and vice-versa.

                                    It is worth adding that in addition to integrating with .eth names, ENS also supports the most popular DNS names, including .com, .org, .io, .app and several others.</p>
                                <h3 className="text-teal-100 text-xl m-6">What is an Ethereum Killer?</h3>
                                <p class="text-white px-1 md:px-15">Since its inception, Ethereum has maintained its spot as the second-largest cryptocurrency by market capitalization. But like every other blockchain network that exists, Ethereum is not perfect. Notable, the legacy blockchain is plagued with high gas fees and low throughput of between 15 to 30 transactions per second.

                                    Although plans are already on the way to solve these shortcomings through several upgrades, many competitors have capitalized on this delay to offer crypto users cheaper and faster transactions.

                                    The term “Ethereum Killer” emerged around 2016/2017 as substitute blockchains such as Cardano began to enter the crypto scene. In 2018, EOS made its debut as the next “Ethereum killer,” raising $4.1 billion from investors, the highest amount an ICO had ever generated. Since then, others like Tezos, Solana, Fantom, Avalanche and Binance Smart Chain have surfaced as possible Ethereum killers.

                                    Each of these blockchains employs a different consensus model to tackle Ethereum’s PoW-induced limitations. For instance, Solana uses proof-of-history (PoH) while Binance Smart Chain utilizes both proof-of-authority (PoA) and delegated proof-of-stake (DPoS).

                                    However, none of these alternative blockchains have been able to unseat Ethereum as the second-largest cryptocurrency by market cap. Ethereum is also currently the largest blockchain for NFT trading activities.</p>
                                <h3 className="text-teal-100 text-xl m-6">Ethereum London Hard Fork</h3>
                                <p class="text-white px-1 md:px-15">The Ethereum network has been plagued with high transaction fees, often spiking at seasons of high demand. In May 2021, the average transaction fee of the network peaked at $71.72.

                                    In addition to the high cost of transactions, the leading altcoin also suffers from scalability issues.

                                    As already mentioned, there are plans to transition to a proof-of-stake algorithm in order to boost the platform’s scalability and add a number of new features. The development team has already begun the transition process to ETH 2.0, implementing some upgrades along the way, including the London hard fork.

                                    The London upgrade went live in August 2021. It included five Ethereum Improvement Proposals (EIPs), namely EIP-3529, EIP-3198, EIP-3541, and most notably EIP-1559 and EIP-3554.

                                    EIP-1559 is arguably the most popular upgrade out of all the EIPs.</p>
                                <h3 className="text-teal-100 text-xl m-6">What Is EIP-1559?</h3>
                                <p class="text-white px-1 md:px-15">The EIP-1559 upgrade introduces a mechanism that changes the way gas fees are estimated on the Ethereum blockchain. Before the upgrade, users had to participate in an open auction for their transactions to be picked up by a miner. This process is known as a “first-price auction,” and as expected, the highest bidder wins.

                                    With EIP-1559, this process is handled by an automated bidding system, and there is a set “base fee” for transactions to be included in the next block. This fee varies based on how congested the network is. Furthermore, users who wish to speed up their transactions can pay a “priority fee” to a miner for faster inclusion.

                                    EIP-1559 also introduces a fee-burning mechanism. A part of every transaction fee (the base fee) is burned and removed out of circulation. This is intended to lower the circulating supply of Ether and potentially increase the value of the token over time.

                                    Interestingly, less than two months after the London upgrade was implemented, the network had burned over $1 billion worth of Ether.</p>
                                <h3 className="text-teal-100 text-xl m-6">Ethereum 2.0</h3>
                                <p class="text-white px-1 md:px-15">In 2022, Ethereum plans to switch to proof-of-stake with its Ethereum 2.0 update. This switch has been in the Ethereum roadmap since the network's inception and would see a new consensus mechanism, as well as introduce sharding as a scaling solution. The current Ethereum chain will become the Beacon Chain and serve as a settlement layer for smart contract interactions on other chains.

                                    In late 2021, Ethereum's Arrow Glacier update was delayed to June 2022. Until then, Vitalik Buterin expects the road to the network's endgame to be shaped by optimistic rollups and Zk-rollups.

                                    In January 2022, the Ethereum Foundation announced the decision to remove the “Ethereum 2.0” terminology to “save all future users from navigating this confusing mental model.” It went on to explain that the previously-referred-to terms of “Ethereum 1.0” would be branded the “execution layer,” while “Ethereum 2.0” will be called the “consensus layer”. This is ultimately to provide a more accurate version of the Ethereum roadmap.

                                    In an update on the progress of the Merge, on April 13, 2022, Ethereum developer Tim Beiko tweeted an update on the progress of the Merge, stating that they are “definitely in the final chapter of PoW on Ethereum.” He also mentioned that users can expect it to occur a few months after June, although no exact date was provided. This came on the back of the first mainnet shadow fork — to test the transition to PoS on Ethereum — that was successfully implemented on April 11, 2022.</p>
                                <h3 className="text-teal-100 text-xl m-6">The Ethereum Merge</h3>
                                <p class="text-white px-1 md:px-15">In 2022, Ethereum renamed its transition from proof-of-work to proof-of-stake from Ethereum 2.0 to The Merge. The Merge is scheduled to go ahead on Sept. 15, 2022, with the merge of the Goerli testnet successfully completed on Aug. 11, 2022.
                                    The Merge implements several critical changes to Ethereum. First, it merges the existing PoW Ethereum mainnet with the Beacon Chain, a PoS chain. Together, the two chains will form the new proof-of-stake Ethereum, which will consist of a consensus layer and an execution layer. The consensus layer will synchronize the chain state across the network, while the execution layer handles transactions and block production.

                                    Second, the Merge significantly reduces ETH issuance. This has been dubbed the "triple halving" in a nod to the Bitcoin halving, since the Merge reduces ETH issuance by 90%. With more than 14M ETH already staked, ETH could very well become deflationary after the transition. Furthermore, stakers are expected to earn between 8% and 12% APR at current projections. Staked ETH will not be withdrawable immediately after the Merge — it will only be enabled after the Shanghai upgrade, estimated to be 6 to 12 months later.
                                    The Merge will not increase transaction throughput or reduce gas fees, as the block production rate stays roughly the same at 12 seconds (currently 13 seconds). It will also not enable on-chain governance, with protocol changes still discussed and decided off-chain through stakeholders.

                                    Importantly, the transition to PoS is expected to reduce Ethereum's annual energy consumption from 112 TWh/yr to only 0.01 TWh/yr — a 99.9% drop. This reduction prompted investors to expect an influx of institutional money in a "greener" Ethereum. On the flip side, Ethereum miners, in an industry estimated to be worth $19 billion, seek to champion ETHPoW, a potential hard fork of Ethereum on proof-of-work.
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

export default ETH;