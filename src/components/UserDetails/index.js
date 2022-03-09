import React from 'react';
import "../UserDetails/UserDetails.css";
// import imgPerfil from "../UserDetails/img/img-perfil.jpg";

const UserDetails = (props) => {

  return(
    <div className='user-container'>
      <div className='user-img-container'>
        <img src={props.user.img} alt='img-user' className='perfil-image'/>
      </div>
      <div className='user-date'>
          <div className='user-content-date'>
              <h2>{props.user.name}</h2>
              <div className='user-configuration'>
                  <div><button className='btn-edit'>Edit Profile</button></div>  
                  <div>Config</div>
              </div>
          </div>
          <div className='user-count'>
              <div><strong>{props.user.post.length}</strong> post</div>  
              <div><strong>{props.user.followers.length}</strong> followers</div>  
              <div><strong>{props.user.following.length}</strong> following</div>
          </div>
      </div>
    </div>
  )
}

export default UserDetails;