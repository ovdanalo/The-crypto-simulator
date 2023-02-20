import React from 'react';
import Links from './links/links';
import linkedin from '../../../assets/imgs/linkedin.png'
import github from '../../../assets/imgs/githubLogo.png'

const DevInfo = (props) => {
    return (
        <div className={"flex items-center justify-center md:w-8/12 min-h-dev bg-black-200 rounded-lg my-4 overflow-hidden "+ props.position}>
            <div className={'flex gradient-info w-40 xl:h-48 sm:h-40 p-4 '+ props.roundedImg} >
                <img src={props.img} alt='' className='object-contain'></img>
            </div>
            <div className={'flex flex-col bg-black-100 w-3/4 xl:h-48 sm:h-40 '+ props.roundedDiv + ' ' + props.align}>
                <p className='flex text-teal-100 xl:m-8 sm:m-6 text-xl '>{props.devName}</p>
                <div className='flex h-0.5 w-8/12 bg-teal-100 my-1'></div>
                <div className={'flex space-x-2 w-8/12 h-10 m-4 ' + props.linkPos}>
                    <Links logo={linkedin} type='linkedin' linkedin={props.linkedin} />
                    <Links logo={github} type='github'git={props.git}  />              
                </div>
            </div>
        </div>

    )
}

export default DevInfo;