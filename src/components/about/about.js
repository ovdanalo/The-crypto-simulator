import React from 'react';
import DevInfo from './devInfo/devInfo';
import PhotoDanilo from '../../assets/imgs/logo192.png'

const About = () => {
    return (
        <div className='flex flex-col items-center h-def w-8/12 bg-black-200 mx-auto my-12 rounded-lg '>
            <DevInfo devName='Danilo Candida' git='https://github.com/ovdanalo' linkedin='' img={PhotoDanilo} position='flex-row' roundedImg='rounded-l-full' roundedDiv='rounded-r-full'/>
            <DevInfo devName='Nicholas Pala' git='' linkedin='' img={PhotoDanilo} position='flex-row-reverse' roundedImg='rounded-r-full' roundedDiv='rounded-l-full'/>
            <DevInfo devName='Felice Di Pasquale' git='' linkedin='' img={PhotoDanilo} position='flex-row' roundedImg='rounded-l-full' roundedDiv='rounded-r-full'/>
            <DevInfo devName="Daniele Ugo D'Anna" git='' linkedin='' img={PhotoDanilo} position='flex-row-reverse' roundedImg='rounded-r-full' roundedDiv='rounded-l-full'/>
            <DevInfo devName="Domenico De Maria" git='' linkedin='' img={PhotoDanilo} position='flex-row' roundedImg='rounded-l-full' roundedDiv='rounded-r-full'/>

        </div>
    )
}

export default About;