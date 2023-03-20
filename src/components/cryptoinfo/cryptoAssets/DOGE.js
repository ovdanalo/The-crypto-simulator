import React, {useContext} from "react";
import ThemeContext from "../../ThemeContext";

const DOGE = (props) => {

    const { isDarkTheme} = useContext(ThemeContext);

    return (
        <div className={`flex flex-col  p-4 ${isDarkTheme ? "bg-black-100" : "bg-white-mode-300"}`}>
            {props.asset.map((item, index) => {
                if (item.name === "Dogecoin") {
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
                                <p class={`text-white px-1 md:px-15 ${isDarkTheme ? "text-white" : "text-black-100"}`}>Dogecoin (DOGE) is based on the popular "doge" Internet meme and features a Shiba Inu on its logo. The open-source digital currency was created by Billy Markus from Portland, Oregon and Jackson Palmer from Sydney, Australia, and was forked from Litecoin in December 2013. Dogecoin's creators envisaged it as a fun, light-hearted cryptocurrency that would have greater appeal beyond the core Bitcoin audience, since it was based on a dog meme. Tesla CEO Elon Musk posted several tweets on social media that Dogecoin is his favorite coin.</p>
                                <h3 className={`text-xl m-6 ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>How Do You Mine Dogecoin?</h3>
                                <p class={`text-white px-1 md:px-15 ${isDarkTheme ? "text-white" : "text-black-100"}`}>Dogecoin differs from Bitcoin's proof-of-work protocol in several ways, one of which is by using Scrypt technology. The altcoin has also a block time of 1 minute, and the total supply is uncapped, which means that there is no limit to the number of Dogecoin that can be mined. You can mine Dogecoin either solo, or by joining a mining pool. A Doge miner can mine the digital currency on Windows, Mac or Linux, and with a GPU. As of 2014, you can also mine Litecoin in the same process of mining Dogecoin, as the processes were merged.</p>
                                <h3 className={`text-xl m-6 ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>What Can Dogecoin Be Used For?</h3>
                                <p class={`text-white px-1 md:px-15 ${isDarkTheme ? "text-white" : "text-black-100"}`}>Dogecoin has been used primarily as a tipping system on Reddit and Twitter to reward the creation or sharing of quality content. You can get tipped Dogecoin by participating in a community that uses the digital currency, or you can get your Dogecoin from a Dogecoin faucet. A Dogecoin faucet is a website that will give you a small amount of Dogecoin for free as an introduction to the currency, so that you can begin interacting in Dogecoin communities.</p>
                                <h3 className={`text-xl m-6 ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>How Can You Buy Dogecoin?</h3>
                                <p class={`text-white px-1 md:px-15 ${isDarkTheme ? "text-white" : "text-black-100"}`}>You can sell or buy Dogecoin at any exchange that offers the digital currency, store it on an exchange or in a Dogecoin wallet, and tip Dogecoin in any communities that accept Dogecoin. For the latest list of exchanges and trading pairs for this cryptocurrency, click on our market pairs tab.</p>
                                <h3 className={`text-xl m-6 ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>Elon Musk and Dogecoin</h3>
                                <p class={`text-white px-1 md:px-15 ${isDarkTheme ? "text-white" : "text-black-100"}`}>The success of Dogecoin is closely intertwined with Elon Musk's passion for it. Musk began tweeting about Dogecoin in early 2021, sharing a Lion King DOGE meme. That kickstarted a furious DOGE rally — with temporary dips — that culminated in Musk's appearance on Saturday Night Live.

                                    After the SNL appearance, DOGE crashed despite Musk's promises to moon its price. In the following months, Musk seemed to lose interest, and the price of DOGE has tumbled over 70% from its all-time high. However, Musk still wields power over Dogecoin, as occasional tweets indicate.</p>
                                <h3 className={`text-xl m-6 ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>Dogecoin Foundation and Board of Advisors</h3>
                                <p class={`text-white px-1 md:px-15 ${isDarkTheme ? "text-white" : "text-black-100"}`}>In 2014, a not-for-profit foundation was formed by members of the Dogecoin team to provide support, advocacy, trademark protection and governance for the cryptocurrency project. However, the foundation was dissolved over time.

                                    After several years of being inactive, the foundation was relaunched in 2021 with a “renewed focus on supporting the Dogecoin Ecosystem, community and promoting the future of the Dogecoin Blockchain.” In addition to some of the original core team, the project now has some seasoned industry players as part of its board of advisors.

                                    According to the foundation’s website, members of the board will meet monthly to discuss issues relating to Dogecoin.

                                    In regards to its advisors, the group is made up of Dogecoin founder Billy Markus, the project’s core developer Max Keller, Ethereum founder Vitalik Buterin and Elon Musk as represented by the head of the Musk’s family office, Jared Birchall.

                                    Members of the Board of Advisors will function in various capacities. While Keller will serve as the project’s technical advisor, Markus will be in charge of the community and memes. Meanwhile, Buterin will function as the blockchain and crypto advisor for the foundation, and Birchall will represent Elon Musk as legal and financial advisor.

                                    As a first assignment, the Board of Advisors will be working to secure three-year funding that would allow it to employ a small, dedicated staff to work on Dogecoin full-time. Up until now, the work on the ecosystem has been done by volunteers.</p>
                                <h3 className={`text-xl m-6 ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>What Is Dogecoin’s Libdogecoin?</h3>
                                <p class={`text-white px-1 md:px-15 ${isDarkTheme ? "text-white" : "text-black-100"}`}>Weeks after the release of Dogecoin Core version 1.14.6, core developer Michi Lumin announced the launch of Libdogecoin, a C-library of the network’s building blocks.

                                    Libdogecoin would allow developers to build Dogecoin-compliant products “without needing to worry about the deeper specifics of the crypto functions.” This means that less technical members can easily design products that comply with Dogecoin standards.

                                    Since the update is a pure library, it will not provide a “runnable” node facility. However, Libdogecoin will support multiple languages, including Python, Node.js and Ruby.</p>
                                <h3 className={`text-xl m-6 ${isDarkTheme ? "text-teal-100" : "text-black-100"}`}>Companies That Accept Dogecoin</h3>
                                <p class={`text-white px-1 md:px-15 ${isDarkTheme ? "text-white" : "text-black-100"}`}>Due to its low transaction fees and constant patronage from Elon Musk, a number of traditional companies have moved to make Dogecoin a payment option.

                                    Here’s a list of some companies that currently accept Dogecoin payments:
                                    <ul>
                                        <li>Tesla</li>
                                        <li>AMC Theaters</li>
                                        <li>GameStop</li>
                                        <li>airBaltic</li>
                                        <li>Dallas Mavericks</li>
                                        <li>EasyDNS</li>
                                        <li>Newegg</li>
                                        <li>Twitch</li>
                                    </ul></p>
                            </div>
                        </div>
                    );
                }
                return null;
            })}
        </div>
    )
}

export default DOGE; 