import React from "react";
import { BsSearch } from "react-icons/bs";
import { MdOutlineExpandMore } from "react-icons/md";
import {BiHelpCircle} from "react-icons/bi";
import {AiFillSetting} from "react-icons/ai";
import {AiFillAppstore} from "react-icons/ai";
import {RxAvatar} from "react-icons/rx";
import "./Header.css";



const Header = () => {

  const iconStyle = {
    fontSize: '2em', // Change the size
    color: 'coral',   // Change the color
    marginRight: '20px', // Add margin to the right
    cursor: 'pointer'
  };
  return (
    <div className="header">
   <div className="header_logo">
    <img style={{borderRadius: '50%', maxWidth: '100%', height: '50px', width: '50px'}} src="/Images/homepage.png" alt="Brian" loading="lazy"/>
    <span style={{color: 'coral', fontWeight: 'bold'}}>Brian's Storage</span>
   </div>
   <div className="header_searchContainer">
    <div className="header_searchBar">
<BsSearch style={{ fontSize: '2em', color: 'coral' }}/>
<input type="text" placeholder="Search in storage" style={{color: '#222', fontWeight: 'bold'}} />
<MdOutlineExpandMore style={{fontSize: '2em', color: 'coral'}}/>
    </div>
   </div>
<div clasName="header_icons">
  <span>
   <BiHelpCircle style={iconStyle}/> 
   <AiFillSetting style={iconStyle}/>
  </span>
<AiFillAppstore style={iconStyle}/>
<RxAvatar style={iconStyle}/>
</div>

    </div>
  );
};

export default Header;
