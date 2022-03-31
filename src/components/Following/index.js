import React from 'react';
import "../Following/Following.css";
import {GrClose} from "react-icons/gr";
import "../Following/FollowingCard.css";
import {closeModal} from "../../data/common/commonSlice";
import { useSelector, useDispatch } from 'react-redux';
import {followUnfollow} from "../../data/user/userSlice";

const FollowingCard = (props) => {

    const dispatch = useDispatch();
    const show = true ? "Siguiendo" : "Seguir";

    const handleFollowingClick = () => {
      dispatch(followUnfollow(show));
    }

    return(
    <div className='following-card'>
      <div className='img-card'><img src={props.data.img} alt="img-user" className='img-card-user'/></div>
      <div className='div-names-user'>
        <div className='username-card'>{props.data.username}</div>
        <div className='name-card'>{props.data.name}</div>
      </div>
      <div className='div-btn-following-card'>
        <button className='btn-following-card' onClick={handleFollowingClick}>{show}</button>
        {/* <button className='btn-following-card'>Siguiendo</button> */}
      </div>
    </div>
  )
}

const Following = () => {
  const user = useSelector((state) => state.user);

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
        <div className='modal-content'>
          {user.following.map(item => (
            <FollowingCard data={item} key={item.id}/>
          ))}
        </div>
    </div>
  )
}

export default Following;