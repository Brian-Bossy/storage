import React, { useState} from 'react'
import {GrAdd} from "react-icons/gr";
import "./FileComponent.css";



function getModalStyle() {
 return {
 top: `50%`,
 left: `50%`,
 transform: `translate(-50%, -50%)`,
 };
}






const FileComponent = () => {
  return (
    <div className='file'>
<div className="file_container">
    <GrAdd style={{fontSize: '1em'}} />
    <p style={{color: 'teal'}}>New</p>
    
</div>

    </div>
  )
}

export default FileComponent