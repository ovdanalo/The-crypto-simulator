import React from "react"

const banner=(props)=>{
    return(
        <div className="flex items-center w-8/12 min-h-dev mt-8 bg-black-100 rounded-full justify-center">
            <img src={props.img} alt='' className="h-28 rounded-full"/>
            <h1 class="text-2xl font-bold text-teal-100 px-32"><font size="6">DEVELHOPE</font><br/>FULLSTACK WEB COURSE<br/>TEAM 3</h1>
        </div>
    )
}
export default banner;
