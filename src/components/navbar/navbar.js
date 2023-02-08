import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col md:flex-row justify-center items-center h-16 bg-black-200 sticky top-0 pt-3">
            <div className="text-gray-100 font-lato mx-8 mb-4 md:mb-0 hidden md:block">
                <Link to="/top-10">Top 10</Link>
            </div>
            <div className="text-gray-100 font-lato mx-8 mb-4 md:mb-0 hidden md:block">
                <Link to="/realtime-investment">Realtime Investment</Link>
            </div>
            <div className="text-gray-100 font-lato mx-8 mb-4 md:mb-0 hidden md:block">
                <Link to="/historic-investment">Historic Investment</Link>
            </div>
            <div className="text-gray-100 font-lato mx-8 mb-4 md:mb-0 hidden md:block">
                <Link to="/cryptocurrencies-info">Cryptocurrencies Info</Link>
            </div>
            <div className="text-gray-100 font-lato mx-8 mb-4 md:mb-0 hidden md:block">
                <Link to="/about">About</Link>
            </div>
            <div className="text-gray-100 font-lato mx-8 mb-4 md:mb-0 hidden md:block">
                <Link to="/contactUs">Contact Us</Link>
            </div>
            <div className="block md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center p-2"
                >
                    <svg
                        className="w-6 h-6 fill-current"
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
                    className={`bg-black-200 text-gray-100 font-lato py-2 mt-2 ${isOpen ? "block" : "hidden"
                        }`}
                >
                    <Link to="/top-10" className="block px-4 py-2">
                        Top 10
                    </Link>
                    <Link to="/realtime-investment" className="block px-4 py-2">
                        Realtime Investment
                    </Link>
                    <Link to="/historic-investment" className="block px-4 py-2">
                        Historic Investment
                    </Link>
                    <Link to="/cryptocurrencies-info" className="block px-4 py-2">
                        Cryptocurrencies Info
                    </Link>
                    <Link to="/about" className="block px-4 py-2">
                        About
                    </Link>
                    <Link to="/contactUs" className="block px-4 py-2">
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;