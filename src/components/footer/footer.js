import React from "react";
import CoinGecko from '../../assets/imgs/coinGeckoLogo.png'

const Footer = () => {
    return (
        <div className='flex justify-center w-full min-h-foot bg-black-200'>
            
            <div className='w-1/3 pt-6'>
                <h1 className='text-gray-100 font-lato'><a href="contactus">Contact us</a></h1>
            </div>

            <div className='flex w-1/3 justify-center space-x-3 md:pt-3 sm:pt-6'> 
                <a href="https://www.coingecko.com">
                    <div className='flex justify-center w-auto'>
                        <h1 className='text-gray-100 font-lato xl:text-base sm:text-sm mt-1'>Powered by <h1 className="md:block sm:hidden">CoinGecko API</h1></h1>
                        <img className='w-7 h-7 md:mt-3 sm:mt-0 ml-2' src={CoinGecko} alt='coinGecko logo'></img>
                    </div>
                </a>
            </div>
        </div>

    )
}

export default Footer;