import React from 'react';
import "../Followers/Followers.css";
import {GrClose} from "react-icons/gr";
import {closeModal} from "../../data/common/commonSlice";
import { useDispatch, useSelector } from 'react-redux';
import {deleteFollower} from "../../data/user/userSlice";


const FollowersCard = (props) => {

  const dispatch = useDispatch();

  const handleDelete = () => {
    const userID = props.data.id;
    dispatch(deleteFollower({id: userID}));
  }

  return(
    <div className='followers-modal-content'>
      <div className='f-modal-user-img'><img src={props.data.img} alt="user-image" className='f-modal-user-image'/></div>
        <div className='f-modal-user-data'>
          <div className='f-modal-user-data-username'>{props.data.username}</div>
          <div className='f-modal-user-data-name'>{props.data.name}</div>
        </div>
        <div className='div-f-modal-btn'><button className='f-modal-btn-eliminar' onClick={handleDelete}>Eliminar</button></div>
    </div>
  )
}

const Followers = () => {

  const user = useSelector((state) => state.user);

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
          {user.followers.map(item => (
            <FollowersCard key={item.id} data={item}/>
          ))}
        </div>
    </div>
  )
}

export default Followers;