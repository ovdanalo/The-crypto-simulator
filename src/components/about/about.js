import React from 'react';
import DevInfo from './devInfo/devInfo';
import PhotoDanilo from '../../assets/imgs/logo192.png'

const About = () => {
    return (
        <div className='flex flex-col items-center h-def w-8/12 bg-black-200 mx-auto my-12 rounded-lg'>
            <DevInfo devName='Danilo Candida' git='' linkedin='' img={PhotoDanilo}/>
            <DevInfo devName='Nicholas Pala' git='' linkedin='' photo=''/>
            <DevInfo devName='Felice Di Pasquale' git='' linkedin='' photo=''/>
            <DevInfo devName="Daniele Ugo D'Anna" git='' linkedin='' photo=''/>
            <DevInfo devName="Domenico De Maria" git='' linkedin='' photo=''/>

        </div>
    )
}

export default About;