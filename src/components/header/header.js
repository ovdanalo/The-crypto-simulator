import React from 'react';
import Logo from '../../assets/imgs/logo.png';
import NameLogo from '../../assets/imgs/nameLogo.png';
const header = () => {
    return (
        <div className='flex flex-col justify-center min-w-full bg-black-200 pt-10'>
            <div className='flex justify-center items-center h-16'>
                <img src={Logo} alt='Rocket Logo' className='h-40 p-4'/>
                <img src={NameLogo} alt='The Crypto Simulator' className='h-28 dropshadow-logo'/>
            </div>
            <div className='flex h-0.5 bg-teal-100 mx-10 md:mx-30 lg:mx-36 xl:mx-auto xl:w-8/12 justify-center items-center mt-10'></div>
        </div>
    )
}

export default header;