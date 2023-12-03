import React from 'react'
import FileComponent from "./FileComponent";
import SidebarItem from "./SidebarItem";
import {MdInsertDriveFile} from "react-icons/md";
import {MdImportantDevices} from "react-icons/md";
import {BsFillPeopleFill} from "react-icons/bs";
import {MdOutlineQueryBuilder} from "react-icons/md";
import {MdStarBorder} from "react-icons/md";
import {MdDeleteOutline} from "react-icons/md";
import {MdStorage} from "react-icons/md";
import "./Sidebar.css";


const Sidebar = () => {

  return (
    <div className='sidebar'>
<FileComponent />
<div className='sidebar_itemsContainer'>
    <SidebarItem arrow icon={(<MdInsertDriveFile style={{ fontSize: '2em', color: 'teal', cursor: 'pointer'}}/>)} label={'My Drive' } />
    <SidebarItem arrow icon={(<MdImportantDevices style={{ fontSize: '2em', color: 'teal', cursor: 'pointer'}}/>)} label={'Computers'} />
    <SidebarItem arrow icon={(<BsFillPeopleFill style={{ fontSize: '2em', color: 'teal', cursor: 'pointer'}}/>)} label={'Shared with me'} />
    <SidebarItem arrow icon={(<MdOutlineQueryBuilder style={{ fontSize: '2em', color: 'teal', cursor: 'pointer'}}/>)} label={'Recent'} />
    <SidebarItem arrow icon={(<MdStarBorder style={{ fontSize: '2em', color: 'teal', cursor: 'pointer'}}/>)} label={'Starred'} />
    <SidebarItem arrow icon={(<MdDeleteOutline style={{ fontSize: '2em', color: 'teal', cursor: 'pointer'}}/>)} label={'Bin'} />
    <SidebarItem arrow icon={(<MdStorage style={{ fontSize: '2em', color: 'teal', cursor: 'pointer'}}/>)} label={'Storage'} />
</div>

    </div>
  )
}

export default Sidebar