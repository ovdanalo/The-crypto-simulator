import React,{useContext} from "react";
import CoinGecko from '../../assets/imgs/coinGeckoLogo.png'
import ThemeContext from "../ThemeContext";


const Footer = () => {

    const { isDarkTheme} = useContext(ThemeContext);


    return (
        <div className={`flex justify-center w-full min-h-foot ${isDarkTheme ? 'bg-black-200' : 'bg-white-mode-200'}`}>

            <div className='w-1/3 pt-6'>
                <h1 className={`flex justify-center font-lato ${isDarkTheme ? 'text-gray-100' : 'text-black-200'}`}><a href="contactus">Contact us</a></h1>
            </div>

            <div className='flex w-1/3 justify-center space-x-3 pt-3'>
                <a href="https://www.coingecko.com">
                    <div className='flex justify-center w-auto'>
                        <h1 className={`font-lato xl:text-base sm:text-sm mt-1 ${isDarkTheme ? 'text-gray-100' : 'text-black-100'}`}>Powered by <h1 className="md:block ">CoinGecko</h1></h1>
                        <img className='w-7 h-7 my-auto ml-2' src={CoinGecko} alt='coinGecko logo'></img>
                    </div>
                </a>
            </div>
        </div>

    )
}

export default Footer;
