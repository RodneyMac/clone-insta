import React from 'react';
import "../Following/Following.css";
import {GrClose} from "react-icons/gr";
import "../Following/FollowingCard.css";
import img1 from "./img/img-1.png";
import img2 from "./img/img-2.png";
import img3 from "./img/img-3.png";
import img4 from "./img/img-4.png";
import {closeModal} from "../../data/common/commonSlice";
import { useDispatch } from 'react-redux';

const seguidosPorMi = [
  {
    id: 1,
    username: "johnnyrotten",
    name: "John",
    img: img1,
  },
  {
    id: 2,
    username: "moonkate",
    name: "Kate",
    img: img2
  },
  {
    id: 3,
    username: "paul_90",
    name: "Paul",
    img: img3
  },
  {
    id: 4,
    username: "onlynani",
    name: "Hannah",
    img: img4
  }
]

const FollowingCard = (props) => {
    return(
    <div className='following-card'>
      <div className='img-card'><img src={props.data.img} alt="img-user" className='img-card-user'/></div>
      <div className='div-names-user'>
        <div className='username-card'>{props.data.username}</div>
        <div className='name-card'>{props.data.name}</div>
      </div>
      <div className='div-btn-following-card'>
        <button className='btn-following-card'>Siguiendo</button>
      </div>
    </div>
  )
}

const Following = () => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  }
  return (
    <div className='modal-container'>
        <div className='modal-header'><div className='div-1'></div><h2 className='modal-title'>Siguiendo</h2><div className='div-icon-exit'><GrClose className='icon-exit' onClick={handleCloseModal}/></div></div>
        <div className='modal-items'>
          <div className='modal-items-personas'>Personas</div>
          <div className='modal-items-hashtags'>Hashtags</div>
        </div>
        <div>
          {seguidosPorMi.map(item => (
            <FollowingCard data={item} key={item.id}/>
          ))}
        </div>
    </div>
  )
}

export default Following;