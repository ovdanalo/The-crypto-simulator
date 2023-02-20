import React from "react"

const banner=(props)=>{
    return(
        <div className="flex flex-row items-center sm:w-96 md:w-8/12 min-h-dev mt-8 bg-black-100 rounded-full justify-center ">
                <img src={props.img} alt='' className="xl:h-28 sm:h-24 rounded-full  "/>
                <h1 className="md:text-xl xl:text-2xl font-bold text-teal-100 px-32  sm:px-0"><font className="sm:text-3xl md:text-4xl">DEVELHOPE</font><br/>FULLSTACK WEB COURSE<br/>TEAM 3</h1>
        </div>
    )
}
export default banner;
