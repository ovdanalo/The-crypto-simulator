import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
    return (
        <div className='flex flex-row justify-center items-center space-x-24 h-16 bg-black-200 sticky top-0 pt-3'>
            <div className='text-gray-100 font-lato'><Link to="/top-10">Top 10</Link></div>
            <div className='text-gray-100 font-lato'><Link to="/realtime-investment">Realtime Investment</Link></div>
            <div className='text-gray-100 font-lato'><Link to="/historic-investment">Historic Investment</Link></div>
            <div className='text-gray-100 font-lato'><Link to="/cryptocurrencies-info">Cryptocurrencies Info</Link></div>
            <div className='text-gray-100 font-lato'><Link to="/realtime-investment">About</Link></div>
            <div>
                <button></button>
            </div>
        </div>
    )
}

export default navbar;