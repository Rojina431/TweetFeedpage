import React from 'react';
import './SidebarOption.css';

function SidebarOption({active,text,Icon}){
    return(
       <div className={`sidebarOption ${active && ' sidebarOption--active' }`}>
           <Icon/>
           <h5>{text}</h5>
       </div>
    );
}
export default SidebarOption;