import React from 'react';
import "../UserDetails/UserDetails.css";
import {RiSettings5Fill} from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { changeModal, changeFollowersModal } from '../../data/common/commonSlice';
// import imgPerfil from "../UserDetails/img/img-perfil.jpg";

const UserDetails = (props) => {

  const dispatch = useDispatch();

  const handleModal = () => {
    dispatch(changeModal());
  }

  const handleFollowersModal = () => {
    dispatch(changeFollowersModal());
  }

  return(
    <div className='user-container'>
      <div className='user-img-container'>
        <img src={props.user.img} alt='img-user' className='perfil-image'/>
      </div>
      <div className='user-date'>
          <div className='user-content-date'>
              <h1 className='user-name'>{props.user.name}</h1>
              <div className='user-configuration'>
                  <div><button className='btn-edit'>Editar Perfil</button></div>  
                  <div className='btn-config'><RiSettings5Fill className='boton-config'/></div>
              </div>
          </div>
          <div className='user-count'>
              <div className='d-c'><strong className='count-num'>{props.user.post.length} </strong> publicaciones</div>  
              <div className='div-count' onClick={handleFollowersModal}><strong className='count-num'>{props.user.followers.length}</strong> seguidores</div>  
              <div className='div-count' onClick={handleModal}><strong className='count-num'>{props.user.following.length}</strong> seguidos</div>
          </div>
      </div>
    </div>
  )
}

export default UserDetails;