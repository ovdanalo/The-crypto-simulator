import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../index.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col md:flex-row justify-center items-center h-16 bg-black-200 sticky pt-3 z-10" style={{
            top: -1,
        } }>
            <div className="text-gray-100 font-lato mx-8 mb-4 md:mb-0 hidden lg:block hover:text-teal-100 duration-200 ease-in-out">
                <Link to="/top-10">Top 10</Link>
            </div>
            <div className="text-gray-100 font-lato mx-8 mb-4 md:mb-0 hidden lg:block hover:text-teal-100 duration-200 ease-in-out">
                <Link to="/realtime-investment">Realtime Investment</Link>
            </div>
            <div className="text-gray-100 font-lato mx-8 mb-4 md:mb-0 hidden lg:block hover:text-teal-100 duration-200 ease-in-out">
                <Link to="/historic-investment">Historic Investment</Link>
            </div>
            <div className="text-gray-100 font-lato mx-8 mb-4 md:mb-0 hidden lg:block hover:text-teal-100 duration-200 ease-in-out">
                <Link to="/cryptocurrencies-info">Cryptocurrencies Info</Link>
            </div>
            <div className="text-gray-100 font-lato mx-8 mb-4 md:mb-0 hidden lg:block hover:text-teal-100 duration-200 ease-in-out">
                <Link to="/about">About</Link>
            </div>
            <div className="flex lg:hidden right-0 justify-start">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex p-2 border border-white rounded-full hover:bg-black-100 duration-200 ease-in-out hover:shadow-lg"
                >
                    <svg
                        className="w-8 h-8 fill-teal-100 duration-200 ease-in-out"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isOpen ? (
                            <path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.41z"></path>
                        ) : (
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                        )}
                    </svg>
                </button>
                <div
                
                    className={`${isOpen ? 'bg-black-200 rounded-xl  text-gray-100 font-lato py-2 mt-1 navbar-menu flex flex-col absolute justify-start w-1/2 ' : 'hidden'
                        }`}
                    style={{
                        top: '92%',
                        right: '25%',
                        left: '25%',
                        boxShadow: '0px 4px 8px 2px rgba(0, 0, 0, 0.5)',
                    }}
                >
                    <Link to="/top-10" className="px-4 py-2  hover:text-teal-100 duration-200 ease-in-out">
                        Top 10
                    </Link>
                    <Link to="/realtime-investment" className="px-4 py-2  hover:text-teal-100 duration-200 ease-in-out">
                        Realtime Investment
                    </Link>
                    <Link to="/historic-investment" className="px-4 py-2  hover:text-teal-100 duration-200 ease-in-out">
                        Historic Investment
                    </Link>
                    <Link to="/cryptocurrencies-info" className="px-4 py-2  hover:text-teal-100 duration-200 ease-in-out">
                        Cryptocurrencies Info
                    </Link>
                    <Link to="/about" className="px-4 py-2  hover:text-teal-100 duration-200 ease-in-out">
                        About
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Navbar;
