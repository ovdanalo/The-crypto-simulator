import React ,{useContext} from 'react';
import Links from './links/links';
import linkedin from '../../../assets/imgs/linkedin.png'
import githubWhite from '../../../assets/imgs/githubLogo.png'
import githubDark from '../../../assets/imgs/githubLogoDark.png'
import ThemeContext from '../../ThemeContext';

const DevInfo = (props) => {
    const {isDarkTheme} = useContext(ThemeContext);

    const github = `${isDarkTheme ? githubWhite : githubDark}`

    return (
        <div className={`flex items-center justify-center md:w-8/12 min-h-dev  rounded-full my-4 overflow-hidden `+ props.position}>
            <div className={`flex w-40 xl:h-48 sm:h-40 p-4 ${isDarkTheme ? 'bg-black-400' : 'bg-white-mode-200'} `+ props.roundedImg} >
                <img src={props.img} alt='' className='object-contain'></img>
            </div>
            <div className={`flex flex-col w-3/4 xl:h-48 sm:h-40 ${isDarkTheme ? 'bg-black-400' : 'bg-white-mode-200'} `+ props.roundedDiv + ' ' + props.align}>
                <p className={`flex  xl:m-8 sm:m-6 text-xl ${isDarkTheme ? 'text-teal-100' : 'text-black-200'}`}>{props.devName}</p>
                <div className={`flex h-0.5 w-8/12  my-1 ${isDarkTheme ? 'bg-teal-100' : 'bg-black-100'}`}></div>
                <div className={'flex space-x-2 w-8/12 h-10 m-4 ' + props.linkPos}>
                    <Links logo={linkedin} type='linkedin' linkedin={props.linkedin} />
                    <Links logo={github} type='github'git={props.git}  />
                </div>
            </div>
        </div>

    )
}

export default DevInfo;
