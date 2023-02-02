import React from 'react';
import Links from './links/links';
import linkedin from '../../../assets/imgs/linkedin.png'
import github from '../../../assets/imgs/githubLogo.png'

const DevInfo = (props) => {
    return (
        <div className={"flex items-center justify-center w-8/12 min-h-dev bg-black-200 rounded-lg my-4 overflow-hidden "+ props.position}>
            <div className={'flex bg-teal-200 w-40 h-48 '+ props.roundedImg} >
                <img src={props.img} alt='' className='object-contain'></img>
            </div>
            <div className={'flex flex-col bg-black-100 w-3/4 h-48 '+ props.roundedDiv + ' ' + props.align}>
                <p className='flex text-teal-100 m-8 text-xl '>{props.devName}</p>
                <div className='flex h-0.5 w-8/12 bg-teal-100 my-1'></div>
                <div className={'flex space-x-2 w-8/12 h-10 m-4 ' + props.linkPos}>
                    <Links logo={linkedin} type='linkedin' linkedin={props.linkedin} />
                    <Links logo={github} type='github'git={props.git} />              
                </div>
            </div>
        </div>

    )
}

export default DevInfo;