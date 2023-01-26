import React from 'react';

const header = () => {
    return (
        <div className='flex flex-col justify-center min-w-full bg-black-200 pt-10'>
            <div className='flex justify-center items-center h-16'>
                <h1 className='text-5xl font-netron text-gray-100 text-shadow mx-8'>the crYpto simulatoR</h1>
            </div>
            <div className='flex h-0.5 bg-teal-100 mx-10 md:mx-30 lg:mx-36 xl:mx-auto xl:w-8/12 justify-center items-center mt-10'></div>
        </div>
    )
}

export default header;