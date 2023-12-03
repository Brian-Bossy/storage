import React from 'react'
import "./SidebarItem.css";
import {MdArrowRight} from "react-icons/md";

const SidebarItem = ({arrow, icon, label }) => {
  return (
    <div className='sidebarItem'>
        <div className="sidebarItem_arrow">
            {arrow && (<MdArrowRight />)}
        </div>
        <div className="sidebarItem_main">
            {icon}
            <p>{label}</p>
        </div>
    </div>
  )
}

export default SidebarItem