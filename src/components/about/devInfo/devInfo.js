import React from 'react';
import Links from './links/links';
import linkedin from '../../../assets/imgs/linkedin.png'
import github from '../../../assets/imgs/githubLogo.png'


const DevInfo = (props) => {
    return (
        <div className={"flex items-center w-8/12 min-h-dev bg-black-200 rounded-lg "+ props.position}>
            <div className={'bg-red-100 w-28 h-28 '+ props.roundedImg}>
                <img src={props.img} alt=''></img>
            </div>
            <div className={'flex flex-col items-center bg-black-100 w-3/4 h-28 '+ props.roundedDiv}>
                <p className='flex text-teal-100 my-2 '>{props.devName}</p>
                <div className='flex h-0.5 w-8/12 bg-teal-100 my-1'></div>
                <div className='flex space-x-2 w-8/12 h-4 justify-center'>
                    <Links logo={linkedin} type='linkedin' linkedin={props.linkedin} />
                    <Links logo={github} type='github'git={props.git} />
                    
                </div>
            </div>
        </div>

    )
}

export default DevInfo;