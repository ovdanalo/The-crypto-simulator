import React from "react"

const Links = (props) => {
    return (
        <div className="flex items-center">
            <img className="h-6 " alt="" src={props.logo}></img>
            {/* {props.type === 'linkedin' ? <a className="text-teal-100" href={props.linkedin}>{props.type}</a>:<a className="text-teal-100"href={props.git} >{props.type }</a>} */}
            <a className="text-teal-100 mx-2" href={props.type === 'linkedin' ? props.linkedin : props.git}>{props.type}</a>
            {/* {props.type === 'linkedin' ? <a className="text-teal-100" href={props.linkedin}>{props.type}</a>:<a className="text-teal-100"href={props.git} >{props.type }</a>} */}
        </div>
    )
}
export default Links