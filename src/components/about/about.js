import React from 'react';
import DevInfo from './devInfo/devInfo';
import PhotoDanilo from '../../assets/imgs/danilo.png'
import PhotoFelice from '../../assets/imgs/felice.png'
import PhotoDome from '../../assets/imgs/dome.png'
import PhotoNic from '../../assets/imgs/nic.png'
import PhotoDani from '../../assets/imgs/dani.png'
import Banner from './banner/banner';
import ImgDevelhope from '../../assets/imgs/Develhope.png'


const About = () => {
    return (
        <div className='flex flex-col items-center h-def xl:w-8/12 sm:w-full md:w-8/12 bg-black-200 mx-auto my-12 rounded-lg  '>
            <Banner img={ImgDevelhope} />
            <DevInfo devName='Danilo Candida' git='https://github.com/ovdanalo' linkedin='https://www.linkedin.com/in/danilo-candida-1ba473210/' img={PhotoDanilo} align='items-start' position='flex-row' linkPos='justify-start' roundedImg='rounded-l-full ' roundedDiv='rounded-r-full'/>
            <DevInfo devName='Nicholas Pala' git='https://github.com/nickstershovel' linkedin='' img={PhotoNic} align='items-end' position='flex-row-reverse' linkPos='justify-end' roundedImg='rounded-r-full' roundedDiv='rounded-l-full'/>
            <DevInfo devName='Felice Di Pasquale' git='https://github.com/felixe88' linkedin='' img={PhotoFelice} align='items-start' position='flex-row' linkPos='justify-start' roundedImg='rounded-l-full' roundedDiv='rounded-r-full'/>
            <DevInfo devName="Daniele Ugo D'Anna" git='https://github.com/Nelexiad' linkedin='' img={PhotoDani} align='items-end' position='flex-row-reverse' linkPos='justify-end' roundedImg='rounded-r-full' roundedDiv='rounded-l-full'/>
            <DevInfo devName="Domenico De Maria" git='https://github.com/domedema' linkedin='' img={PhotoDome} align='items-start' position='flex-row' linkPos='justify-start' roundedImg='rounded-l-full' roundedDiv='rounded-r-full' />
        </div>
    )
}

export default About;