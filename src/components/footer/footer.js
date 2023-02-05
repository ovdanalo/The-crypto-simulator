import React from "react";
import CoinGecko from '../../assets/imgs/coinGeckoLogo.png'

const Footer = () => {
    return (
        <div className='flex justify-center w-full min-h-foot bg-black-200'>
            
            <div className='w-1/3 pt-6'>
            <h1 className='text-gray-100 font-lato'><a href="about">Contact us</a></h1>
            </div>

             <div className='flex w-1/3 justify-center space-x-3 pt-6'> 
             <h1 className='text-gray-100 font-lato'><a href="https://www.coingecko.com">Powered by CoinGecko API</a></h1>
             <img className='w-7 h-7' src={CoinGecko} alt='coinGecko logo'></img>
             </div>

             <div className='w-1/3'> 
             <h1 className='text-gray-100 font-lato pt-6'><a href="term">Terms & Conditions</a></h1>
             </div>

        </div>

    )
}

export default Footer;