import React, {useContext} from "react"
import ThemeContext from "../../../ThemeContext";

const Links = (props) => {

    const {isDarkTheme} = useContext(ThemeContext);

    return (
        <div className="flex items-center">
            <img className="h-6 " alt="" src={props.logo}></img>
            {/* {props.type === 'linkedin' ? <a className="text-teal-100" href={props.linkedin}>{props.type}</a>:<a className="text-teal-100"href={props.git} >{props.type }</a>} */}
            <a className={` mx-2 ${isDarkTheme ? 'text-teal-100' : 'text-black-200'}`} href={props.type === 'linkedin' ? props.linkedin : props.git}>{props.type}</a>
            {/* {props.type === 'linkedin' ? <a className="text-teal-100" href={props.linkedin}>{props.type}</a>:<a className="text-teal-100"href={props.git} >{props.type }</a>} */}
        </div>
    )
}
export default Links