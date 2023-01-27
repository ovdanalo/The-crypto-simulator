import React from 'react';

const DevInfo = (props) => {
    return (
        <div className={"flex w-8/12 min-h-dev bg-white "+ props.position}>
            <div className='bg-red-100 w-1/4 min-h-full'>
                <img src={props.img} alt=''></img>
            </div>
            <div className={'flex flex-col bg-green-100 w-3/4 min-h-full '+ props.contentPosition}>
                <p className='text-teal-100 my-2 '>{props.devName}</p>
                <div className='h-0.5 w-4/12 bg-teal-100 my-1'></div>
                <div className='flex space-x-2 w-8/12 h-4'>
                    <div className='flex w-1/2 h-4'>
                        <div className='w-1/4 h-4 bg-teal-200'></div>
                        <div className='w-3/4 h-4 bg-red-100'></div>
                    </div>
                    <div className='flex w-1/2 h-4'>
                        <div className='w-1/4 h-4 bg-teal-200'></div>
                        <div className='w-3/4 h-4 bg-red-100'></div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default DevInfo;