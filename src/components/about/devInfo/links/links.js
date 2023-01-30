import React from "react"

const Links = (props) => {
    return (
        <div className="flex flex-row">
            <img className="h-6 " alt="" src={props.logo}></img>
            {props.type === 'linkedin' ? <a className="text-teal-100" href={props.linkedin}>{props.type}</a>:<a className="text-teal-100"href={props.git} >{props.type }</a>}
        </div>
    )
}
export default Links