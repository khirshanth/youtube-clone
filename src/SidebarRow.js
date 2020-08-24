import React from "react";
import "./row.css"


function SidebarRow({Icon,title}){
    return(
        <div className="side-row">
            <Icon className="side-icon"/>  
            <h2 className="side-name">{title}</h2>
            
        </div>
    )
}
export default SidebarRow