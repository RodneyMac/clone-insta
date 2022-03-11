import React from 'react';
import "../Following/Following.css";
import {GrClose} from "react-icons/gr";

const Following = () => {
  return (
    <div className='modal-container'>
        <div className='modal-header'><h2 className='modal-title'>Siguiendo</h2><div className='div-icon-exit'><GrClose className='icon-exit'/></div></div>
        <div className='modal-items'>
          <div className='modal-items-personas'>Personas</div>
          <div className='modal-items-hashtags'>Hashtags</div>
        </div>
    </div>
  )
}

export default Following;