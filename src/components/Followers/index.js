import React from 'react';
import "../Followers/Followers.css";
import {GrClose} from "react-icons/gr";
import image1 from "./img/img-1.png";
import image2 from "./img/img-2.png";
import image3 from "./img/img-3.png";
import image4 from "./img/img-4.png";
import {closeModal} from "../../data/common/commonSlice";
import { useDispatch } from 'react-redux';

const seguidores = [
  {
    id: 1,
    username: "johnnyrotten",
    name: "John",
    img: image1,
  },
  {
    id: 2,
    username: "moonkate",
    name: "Kate",
    img: image2,
  },
  {
    id: 3,
    username: "paul_90",
    name: "Paul",
    img: image3,
  },
  {
    id: 4,
    username: "onlynani",
    name: "Hannah",
    img: image4,
  }
]

const FollowersCard = (props) => {
  return(
    <div className='followers-modal-content'>
      <div className='f-modal-user-img'><img src={props.data.img} alt="image-3" className='f-modal-user-image'/></div>
        <div className='f-modal-user-data'>
          <div className='f-modal-user-data-username'>{props.data.username}</div>
          <div className='f-modal-user-data-name'>{props.data.name}</div>
        </div>
        <div className='div-f-modal-btn'><button className='f-modal-btn-eliminar'>Eliminar</button></div>
    </div>
  )
}

const Followers = () => {

const dispatch = useDispatch();

const handleCloseModalFollowers = () => {
  dispatch(closeModal());
}

  return (
    <div className='followers-modal-container'>
        <div className='followers-modal-header'>
            <div className='div-modal-h-1'></div>
            <div className='div-modal-h-title'>Seguidores</div>
            <div className='div-modal-h-icon'><GrClose className='followers-icon-exit' onClick={handleCloseModalFollowers}/></div>
        </div>
        <div>
          {seguidores.map(item => (
            <FollowersCard key={item.id} data={item}/>
          ))}
        </div>
    </div>
  )
}

export default Followers;