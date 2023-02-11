import React from "react"

const banner=(props)=>{
    return(
        <div className="flex flex-row items-center xl:w-8/12 sm:w-8/12  min-h-dev mt-8 bg-black-100 rounded-full justify-center ">
            <img src={props.img} alt='' className="xl:h-28 sm:h-24 rounded-full  "/>
            <h1 className="xl:text-2xl sm:text-sm md:text-base font-bold text-teal-100 px-32  sm:px-0"><font className="xl:text-5xl sm:text-3xl md:text-4xl">DEVELHOPE</font><br/>FULLSTACK WEB COURSE<br/>TEAM 3</h1>
        </div>
    )
}
export default banner;
