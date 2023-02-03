import React from "react";

const BTC = (props) => {

    return (
        <div className="flex flex-col bg-black-100 p-4">
            {props.asset.map((item, index) => {
                if (item.name === "Bitcoin") {
                    return (
                        <div>
                            <div className="bg-black-200 rounded-lg m-4" key={index}>
                                <p className="text-teal-100 text-2xl">
                                    The price of {item.symbol.toUpperCase()} is {item.current_price}€
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
                                <p className="text-white px-20">Bitcoin is a decentralized cryptocurrency originally described in a 2008 whitepaper by a person, or group of people, using the alias Satoshi Nakamoto. It was launched soon after, in January 2009.

                                    Bitcoin is a peer-to-peer online currency, meaning that all transactions happen directly between equal, independent network participants, without the need for any intermediary to permit or facilitate them. Bitcoin was created, according to Nakamoto’s own words, to allow “online payments to be sent directly from one party to another without going through a financial institution.”

                                    Some concepts for a similar type of a decentralized electronic currency precede BTC, but Bitcoin holds the distinction of being the first-ever cryptocurrency to come into actual use.</p>
                                <h3 className="text-teal-100 text-xl m-6">Who Are the Founders of Bitcoin?</h3>
                                <p className="text-white px-20">Bitcoin’s original inventor is known under a pseudonym, Satoshi Nakamoto. As of 2021, the true identity of the person — or organization — that is behind the alias remains unknown.

                                    On October 31, 2008, Nakamoto published Bitcoin’s whitepaper, which described in detail how a peer-to-peer, online currency could be implemented. They proposed to use a decentralized ledger of transactions packaged in batches (called “blocks”) and secured by cryptographic algorithms — the whole system would later be dubbed “blockchain.”

                                    Just two months later, on January 3, 2009, Nakamoto mined the first block on the Bitcoin network, known as the genesis block, thus launching the world’s first cryptocurrency. Bitcoin price was $0 when first introduced, and most Bitcoins were obtained via mining, which only required moderately powerful devices (e.g. PCs) and mining software. The first known Bitcoin commercial transaction occurred on May 22, 2010, when programmer Laszlo Hanyecz traded 10,000 Bitcoins for two pizzas. At Bitcoin price today in mid-September 2021, those pizzas would be worth an astonishing $478 million. This event is now known as “Bitcoin Pizza Day.” In July 2010, Bitcoin first started trading, with the Bitcoin price ranging from $0.0008 to $0.08 at that time.

                                    However, while Nakamoto was the original inventor of Bitcoin, as well as the author of its very first implementation, he handed the network alert key and control of the code repository to Gavin Andresen, who later became lead developer at the Bitcoin Foundation. Over the years a large number of people have contributed to improving the cryptocurrency’s software by patching vulnerabilities and adding new features.

                                    Bitcoin’s source code repository on GitHub lists more than 750 contributors, with some of the key ones being Wladimir J. van der Laan, Marco Falke, Pieter Wuille, Gavin Andresen, Jonas Schnelli and others.</p>
                                <h3 className="text-teal-100 text-xl m-6">What Makes Bitcoin Unique?</h3>
                                <p className="text-white px-20">Bitcoin’s most unique advantage comes from the fact that it was the very first cryptocurrency to appear on the market.

                                    It has managed to create a global community and give birth to an entirely new industry of millions of enthusiasts who create, invest in, trade and use Bitcoin and other cryptocurrencies in their everyday lives. The emergence of the first cryptocurrency has created a conceptual and technological basis that subsequently inspired the development of thousands of competing projects.

                                    The entire cryptocurrency market — now worth more than $2 trillion — is based on the idea realized by Bitcoin: money that can be sent and received by anyone, anywhere in the world without reliance on trusted intermediaries, such as banks and financial services companies.

                                    Thanks to its pioneering nature, BTC remains at the top of this energetic market after over a decade of existence. Even after Bitcoin has lost its undisputed dominance, it remains the largest cryptocurrency, with a market capitalization that surpassed the $1 trillion mark in 2021, after Bitcoin price hit an all-time high of $64,863.10 on April 14, 2021. This is owing in large part to growing institutional interest in Bitcoin, and the ubiquitousness of platforms that provide use-cases for BTC: wallets, exchanges, payment services, online games and more.</p>
                                <h3 className="text-teal-100 text-xl m-6">How Much Bitcoin Is in Circulation?</h3>
                                <p className="text-white px-20">Bitcoin’s total supply is limited by its software and will never exceed 21,000,000 coins. New coins are created during the process known as “mining”: as transactions are relayed across the network, they get picked up by miners and packaged into blocks, which are in turn protected by complex cryptographic calculations.

                                    As compensation for spending their computational resources, the miners receive rewards for every block that they successfully add to the blockchain. At the moment of Bitcoin’s launch, the reward was 50 bitcoins per block: this number gets halved with every 210,000 new blocks mined — which takes the network roughly four years. As of 2020, the block reward has been halved three times and comprises 6.25 bitcoins.

                                    Bitcoin has not been premined, meaning that no coins have been mined and/or distributed between the founders before it became available to the public. However, during the first few years of BTC’s existence, the competition between miners was relatively low, allowing the earliest network participants to accumulate significant amounts of coins via regular mining: Satoshi Nakamoto alone is believed to own over a million Bitcoin.

                                    Mining Bitcoins can be very profitable for miners, depending on the current hash rate and the price of Bitcoin. While the process of mining Bitcoins is complex, we discuss how long it takes to mine one Bitcoin on CoinMarketCap Alexandria — as we wrote above, mining Bitcoin is best understood as how long it takes to mine one block, as opposed to one Bitcoin. As of mid-September 2021, the Bitcoin mining reward is capped to 6.25 BTC after the 2020 halving, which is roughly $299,200 in Bitcoin price today.</p>
                                <h3 className="text-teal-100 text-xl m-6">How Is the Bitcoin Network Secured?</h3>
                                <p className="text-white px-20">Bitcoin is secured with the SHA-256 algorithm, which belongs to the SHA-2 family of hashing algorithms, which is also used by its fork Bitcoin Cash (BCH), as well as several other cryptocurrencies.</p>
                                <h3 className="text-teal-100 text-xl m-6">Bitcoin Energy Consumption</h3>
                                <p className="text-white px-20">Over the past few decades, consumers have become more curious about their energy consumption and personal effects on climate change. When news stories started swirling regarding the possible negative effects of Bitcoin’s energy consumption, many became concerned about Bitcoin and criticized this energy usage. A report found that each Bitcoin transaction takes 1,173 KW hours of electricity, which can “power the typical American home for six weeks.” Another report calculates that the energy required by Bitcoin annually is more than the annual hourly energy usage of Finland, a country with a population of 5.5 million.

                                    The news has produced commentary from tech entrepreneurs to environmental activists to political leaders alike. In May 2021, Tesla CEO Elon Musk even stated that Tesla would no longer accept the cryptocurrency as payment, due to his concern regarding its environmental footprint. Though many of these individuals have condemned this issue and move on, some have prompted solutions: how do we make Bitcoin more energy efficient? Others have simply taken the defensive position, stating that the Bitcoin energy problem may be exaggerated.

                                    At present, miners are heavily reliant on renewable energy sources, with estimates suggesting that Bitcoin’s use of renewable energy may span anywhere from 40-75%. However, to this point, critics claim that increasing Bitcoin’s renewable energy usage will take away from solar sources powering other sectors and industries like hospitals, factories or homes. The Bitcoin mining community also attests that the expansion of mining can help lead to the construction of new solar and wind farms in the future.

                                    Furthermore, some who defend Bitcoin argue that the gold and banking sector — individually — consume twice the amount of energy as Bitcoin, making the criticism of Bitcoin’s energy consumption a nonstarter. Moreover, the energy consumption of Bitcoin can easily be tracked and traced, which the same cannot be said of the other two sectors. Those who defend Bitcoin also note that the complex validation process creates a more secure transaction system, which justifies the energy usage.

                                    Another point that Bitcoin proponents make is that the energy usage required by Bitcoin is all-inclusive such that it encompasess the process of creating, securing, using and transporting Bitcoin. Whereas with other financial sectors, this is not the case. For example, when calculating the carbon footprint of a payment processing system like Visa, they fail to calculate the energy required to print money or power ATMs, or smartphones, bank branches, security vehicles, among other components in the payment processing and banking supply chain.

                                    What exactly are governments and nonprofits doing to reduce Bitcoin energy consumption? Earlier this year in the U.S., a congressional hearing was held on the topic where politicians and tech figures discussed the future of crypto mining in the U.S, specifically highlighting their concerns regarding fossil fuel consumption. Leaders also discussed the current debate surrounding the coal-to-crypto trend, particularly regarding the number of coal plants in New York and Pennsylvania that are in the process of being repurposed into mining farms.

                                    Aside from congressional hearings, there are private sector crypto initiatives dedicated to solving environmental issues such as the Crypto Climate Accord and Bitcoin Mining Council. In fact, the Crypto Climate Accord proposes a plan to eliminate all greenhouse gas emissions by 2040, And, due to the innovative potential of Bitcoin, it is reasonable to believe that such grand plans may be achieved.</p>
                                <h3 className="text-teal-100 text-xl m-6">What Is Bitcoin’s Role as a Store of Value?</h3>
                                <p className="text-white px-20">Bitcoin is the first decentralized, peer-to-peer digital currency. One of its most important functions is that it is used as a decentralized store of value. In other words, it provides for ownership rights as a physical asset or as a unit of account. However, the latter store-of-value function has been debated. Many crypto enthusiasts and economists believe that high-scale adoption of the top currency will lead us to a new modern financial world where transaction amounts will be denominated in smaller units.

                                    The smallest units of Bitcoin, 0.00000001 BTC, are called Satoshis (or Sats in short), in a nod to the pseudonymous creator. At Bitcoin price now, 1 Satoshi is equivalent to roughly $0.00048.

                                    The top crypto is considered a store of value, like gold, for many — rather than a currency. This idea of the first cryptocurrency as a store of value, instead of a payment method, means that many people buy the crypto and hold onto it long-term (or HODL) rather than spending it on items like you would typically spend a dollar — treating it as digital gold.</p>
                                <h3 className="text-teal-100 text-xl m-6">Crypto Wallets</h3>
                                <p className="text-white px-20">The most popular wallets for cryptocurrency include both hot and cold wallets. Cryptocurrency wallets vary from hot wallets and cold wallets. Hot wallets are able to be connected to the web, while cold wallets are used for keeping large amounts of coins outside of the internet.

                                    Some of the top crypto cold wallets are Trezor, Ledger and CoolBitX. Some of the top crypto hot wallets include Exodus, Electrum and Mycelium.</p>
                                <h3 className="text-teal-100 text-xl m-6">How Is Bitcoin’s Technology Upgraded?</h3>
                                <p className="text-white px-20">A hard fork is a radical change to the protocol that makes previously invalid blocks/transactions valid, and therefore requires all users to upgrade. For example, if users A and B are disagreeing on whether an incoming transaction is valid, a hard fork could make the transaction valid to users A and B, but not to user C.

                                    A hard fork is a protocol upgrade that is not backward compatible. This means every node (computer connected to the Bitcoin network using a client that performs the task of validating and relaying transactions) needs to upgrade before the new blockchain with the hard fork activates and rejects any blocks or transactions from the old blockchain. The old blockchain will continue to exist and will continue to accept transactions, although it may be incompatible with other newer Bitcoin clients.

                                    A soft fork is a change to the Bitcoin protocol wherein only previously valid blocks/transactions are made invalid. Since old nodes will recognise the new blocks as valid, a soft fork is backward-compatible. This kind of fork requires only a majority of the miners upgrading to enforce the new rules.

                                    Some examples of prominent cryptocurrencies that have undergone hard forks are the following: Bitcoin’s hard fork that resulted in Bitcoin Cash, Ethereum’s hard fork that resulted in Ethereum Classic.

                                    Bitcoin Cash has been hard forked since its original forking, with the creation of Bitcoin SV. </p>
                                <h3 className="text-teal-100 text-xl m-6">What Is Taproot?</h3>
                                <p className="text-white px-20">Taproot is a soft fork that bundles together BIP 340, 341 and 342 and aims to improve the scalability, efficiency, and privacy of the blockchain by introducing several new features.

                                    The two major changes are the introduction of the Merkelized Abstract Syntax Tree (MAST) and Schnorr Signature. MAST introduces a condition allowing the sender and recipient of a transaction to sign off on its settlement together. Schnorr Signature allows users to aggregate several signatures into one for a single transaction. This results in multi-signature transactions looking the same as regular transactions or more complex ones. By introducing this new address type, users can also save on transaction fees, as even complex transactions look like simple, single-signature ones.

                                    Although HODLers will probably not notice a big impact, Taproot could become a key milestone to equipping the network with smart contract functionality. In particular, Schnorr Signatures would lay the foundation for more complex applications to be built on top of the existing blockchain, as users start switching to Taproot addresses primarily. If adopted by users, Taproot could, in the long run, result in the network developing its own DeFi ecosystem that rivals those on alternative blockchains like Ethereum.</p>
                                <h3 className="text-teal-100 text-xl m-6">What Is the Lightning Network?</h3>
                                <p className="text-white px-20">The Lightning Network is an off-chain, layered payment protocol that operates bidirectional payment channels which allows instantaneous transfer with instant reconciliation. It enables private, high volume and trustless transactions between any two parties. The Lightning Network scales transaction capacity without incurring the costs associated with transactions and interventions on the underlying blockchain.</p>
                                <h3 className="text-teal-100 text-xl m-6">Who Are the Largest Corporate Holders of Bitcoin?</h3>
                                <p className="text-white px-20">A few years ago, the idea that a publicly traded company might hold Bitcoin on its balance sheets seemed highly laughable. The flagship cryptocurrency was considered to be too volatile to be adopted by any serious business. Many top investors, including Warren Buffett, labeled the asset a “bubble waiting to pop.”

                                    This negative sentiment appears to have been broken, with a number of corporate behemoths buying up Bitcoin since 2020. In particular, business intelligence firm MicroStrategy set the pace after it bought $425 million worth of Bitcoin in August and September 2020. Since then, many others have followed suit, including EV manufacturer Tesla.

                                    MicroStrategy has by far the largest Bitcoin portfolio held by any publicly-traded company. The business analytics platform has adopted Bitcoin as its primary reserve asset, aggressively buying the cryptocurrency through 2021 and 2022. As of August 30, 2022, the company had 129,699 Bitcoin in its reserve, equivalent to just over $2.5 billion.

                                    Other top corporate holders include Marathon Digital Holdings, with 10,054 BTC, Coinbase (9,000), Square Inc. (8,027), and Hut 8 Mining Corp. (7,078).</p>
                                <h3 className="text-teal-100 text-xl m-6">Is Bitcoin Political?</h3>
                                <p className="text-white px-20">Bitcoin is becoming more political by the day, particularly after El Salvador began accepting the currency as legal tender. The country's president, Nayib Bukele, announced and implemented the decision almost unilaterally, dismissing criticism from his citizens, the Bank of England, the IMF, Vitalik Buterin and many others. Since the Bitcoin legal tender law was passed in September 2021, Bukele has also announced plans to build Bitcoin City, a city fully based on mining Bitcoin with geothermal energy from volcanoes.

                                    Countries like Mexico, Russia and others have been rumored to be candidates also to accept Bitcoin as legal tender, but thus far, El Salvador stands alone.

                                    On the flip side, countries like China have moved to heavily clamp down on Bitcoin mining and trading activities. In May 2021, the Chinese government declared that all crypto-related transactions are illegal. This was followed by a heavy crackdown on Bitcoin mining operations, forcing many crypto-related businesses to flee to friendlier regions.

                                    Surprisingly, the anti-crypto stance of the Chinese government has done little to stop the industry. According to data by the University of Cambridge, China is now the second-biggest contributor to Bitcoin's global hash rate, only behind the United States.</p>

                            </div>
                        </div>
                    );
                }
                return null;
            })}
        </div>
    )
}

export default BTC; 