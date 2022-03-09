import React from 'react';
import "../UserDetails/UserDetails.css";
import imgPerfil from "../UserDetails/img/img-perfil.jpg";

const UserDetails = () => {
  return(
    <div className='user-container'>
      <div className='user-img-container'>
        <img src={imgPerfil} alt='img-user' className='perfil-image'/>
      </div>
      <div className='user-date'>
          <div className='user-content-date'>
              <h2>roddmacal</h2>
              <div className='user-configuration'>
                  <div><button className='btn-edit'>Edit Profile</button></div>  
                  <div>Config</div>  
              </div>
          </div>
          <div className='user-count'>
              <div><strong>28</strong> post</div>  
              <div><strong>79</strong> followers</div>  
              <div><strong>939</strong> following</div>  
          </div>
      </div>
    </div>
  )
}

export default UserDetails;