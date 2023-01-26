import React from 'react';

const asset = (props) => {
    return (
        <div className='flex flex-row w-10/12 mx-auto justify-between flex-wrap p-3 my-2.5 bg-black-100 rounded-xl'>
            <div className='flex flex-row'>
                <img></img>
                <p className='text-white'>{props.name}</p>
            </div>
            <div className='flex flex-row'>
                <p className='text-white'>{props.price}</p>
            </div>
            <div className='flex flex-row'>
                <p className='text-white'>{props.marketcap}</p>
            </div>
            <div className='flex flex-row'>
                <p className='text-white'>{props.volume24}</p>
            </div>
        </div>
    )
}

export default asset;