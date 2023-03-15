import React ,{useContext} from "react"
import ThemeContext from '../../ThemeContext';


const Banner=(props)=>{

    const {isDarkTheme} = useContext(ThemeContext);

    return(
        <div className={`flex flex-row items-center sm:w-96 md:w-8/12 min-h-dev mt-8 rounded-full justify-center ${isDarkTheme ? 'bg-black-100' : 'bg-white-mode-300'} `}>
                <img src={props.img} alt='' className="xl:h-28 sm:h-24 rounded-full  "/>
                <h1 className={`md:text-xl xl:text-2xl font-bold px-32  sm:px-0 ${isDarkTheme ? 'text-teal-100' : 'text-black-200'} `}><font className={`sm:text-3xl md:text-4xl ${isDarkTheme ? 'text-teal-100' : 'text-black-200'} `}>DEVELHOPE</font><br/>FULLSTACK WEB COURSE<br/>TEAM 3</h1>
        </div>
    )
}
export default Banner;