import React from 'react';

const DevInfo = (props) => {
    return(
        <div className='flex flex-row w-8/12 min-h-dev bg-white'>
            <div className='bg-red-100 w-1/4 min-h-full'>
                <img src={props.img} alt=''></img>
            </div>
            <div className='flex flex-col items-center bg-green-100 w-3/4 min-h-full '>
                <p className='text-teal-100 my-2'>{props.devName}</p>
                <div className='h-0.5 w-4/12 bg-teal-100 my-1'></div>
            </div>
        </div>

    )
}

export default DevInfo;