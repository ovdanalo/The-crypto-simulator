import React from 'react';

const label = () => {
    return (
        <div className='flex flex-row w-10/12 mx-auto justify-between flex-wrap p-3 my-2.5 bg-black-100 rounded-xl'>
            <div className='flex flex-row'>
                <img></img>
                <p className='text-white'>Crypto Name</p>
            </div>
            <div className='flex flex-row'>
                <p className='text-white'>Price</p>
            </div>
            <div className='flex flex-row'>
                <p className='text-white'>Market Cap</p>
            </div>
            <div className='flex flex-row'>
                <p className='text-white'>24h Volume</p>
            </div>
        </div>
    )
}

export default label;