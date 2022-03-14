import React from 'react';
import "../Followers/Followers.css";
import {GrClose} from "react-icons/gr";
import image3 from "./img/img-3.png";

const Followers = () => {
  return (
    <div className='followers-modal-container'>
        <div className='followers-modal-header'>
            <div className='div-modal-h-1'></div>
            <div className='div-modal-h-title'>Seguidores</div>
            <div className='div-modal-h-icon'><GrClose className='followers-icon-exit'/></div>
        </div>
        <div className='followers-modal-content'>
            <div className='f-modal-user-img'><img src={image3} alt="image-3" className='f-modal-user-image'/></div>
            <div className='f-modal-user-data'>
                <div className='f-modal-user-data-username'>paul_90</div>
                <div className='f-modal-user-data-name'>Paul</div>
            </div>
            <div className='div-f-modal-btn'><button className='f-modal-btn-eliminar'>Eliminar</button></div>
        </div>
    </div>
  )
}

export default Followers;