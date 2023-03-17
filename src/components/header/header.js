import React, {useContext} from 'react';
import WhiteLogo from '../../assets/imgs/logo.png';
import DarkLogo from '../../assets/imgs/logoDark.png'
import NameLogo from '../../assets/imgs/nameLogo.png';
import NameLogoDark from '../../assets/imgs/nameLogoDark.png'
import ThemeContext from '../ThemeContext';
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();

    function handleChangePage(evt) {
      navigate(`/`);
      console.log(evt);
    }

    const {isDarkTheme} = useContext(ThemeContext);
    const ChoseLogo = `${isDarkTheme ? NameLogo : NameLogoDark }`
    const Logo = `${isDarkTheme ? WhiteLogo : DarkLogo }`


    return (
        <div className={`flex flex-col justify-center min-w-full pt-10 ${isDarkTheme ? 'bg-black-200' : 'bg-white-mode-200'}`}>
            <div className='flex justify-center items-center h-16' onClick={handleChangePage}>
                <img src={Logo} alt='Rocket Logo' className='h-40 p-4'/>
                <img src={ChoseLogo} alt='The Crypto Simulator' className='h-28'/>
            </div>
            <div className={`flex h-0.5  mx-10 md:mx-30 lg:mx-36 xl:mx-auto xl:w-8/12 justify-center items-center mt-10 ${isDarkTheme ? 'bg-teal-100' : 'bg-black-300'}`}></div>
        </div>
    )
}

export default Header;
