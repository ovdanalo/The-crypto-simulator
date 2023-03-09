import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/imgs/logo.png";
import NameLogo from "../../assets/imgs/nameLogo.png";
const Header = () => {
  const navigate = useNavigate();

  function handleChangePage(evt) {
    navigate(`/top-10`);
    console.log(evt);
  }
  return (
    <div className='flex flex-col justify-center min-w-full bg-black-200 pt-10'>
      <div
        onClick={handleChangePage}
        className='flex justify-center items-center h-16'
      >
        <img src={Logo} alt='Rocket Logo' className='h-40 p-4' />
        <img src={NameLogo} alt='The Crypto Simulator' className='h-28' />
      </div>
      <div className='flex h-0.5 bg-teal-100 mx-10 md:mx-30 lg:mx-36 xl:mx-auto xl:w-8/12 justify-center items-center mt-10'></div>
    </div>
  );
};

export default Header;
