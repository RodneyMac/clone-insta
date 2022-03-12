import React from 'react';
import "../Following/Following.css";
import {GrClose} from "react-icons/gr";
import "../Following/FollowingCard.css";
// import img1 from "./img/img-1.png";

const seguidosPorMi = [
  {
    id: 1,
    username: "1",
    name: "John",
    img: "img1"
  },
  {
    id: 2,
    username: "2",
    name: "Kate",
    img: "img2"
  },
  {
    id: 3,
    username: "3",
    name: "Paul",
    img: "img3"
  },
  {
    id: 4,
    username: "3",
    name: "Hannah",
    img: "img4"
  }
]

const FollowingCard = (props) => {
  return(
    <div className='following-card'>
      <div className='img-card'>{props.data.img}</div>
      <div className='name-card'>{props.data.name}{props.data.username}</div>
      {/* <div className='username-card'>{props.data.username}</div> */}
      <div className='div-btn-following-card'>
        <button className='btn-following-card'>Siguiendo</button>
      </div>
    </div>
  )
}

const Following = () => {
  return (
    <div className='modal-container'>
        <div className='modal-header'><h2 className='modal-title'>Siguiendo</h2><div className='div-icon-exit'><GrClose className='icon-exit'/></div></div>
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