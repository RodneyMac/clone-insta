import React from 'react';
import instaLogo from "./img/insta-logo.png";
import {VscHome} from 'react-icons/vsc';
import {TiLocationArrowOutline} from "react-icons/ti";
import {FiPlusSquare} from "react-icons/fi";
import {MdExplore} from "react-icons/md";
import {AiOutlineHeart} from "react-icons/ai";
import {BiSearch} from "react-icons/bi";
// import imgPerfil from "./img/img-perfil.jpg";
import "../Nav/Nav.css";

const Nav = () => {
  return(
    <div className='nav-container'>
        <nav className='nav-content'>
            <div className='nav-logo'><img src={instaLogo} alt="instaLogo" className='img-logo'/></div>
            <div className='nav-search'>
              <BiSearch className='search-icon'/>
              <input type="text" className="nav-input" placeholder="Busca"/>
            </div>
            <div className='nav-icons'>
                <div className='div-icon'><VscHome className="n-i"/></div>
                <div className='div-icon'><TiLocationArrowOutline className="n-i"/></div>
                <div className='div-icon'><FiPlusSquare className="n-i"/></div>
                <div className='div-icon'><MdExplore className="n-i"/></div>
                <div className='div-icon'><AiOutlineHeart className="n-i"/></div>
                <div className='div-user-circle'>
                  <div className='user-circle div-icon n-i'></div>
                </div>
            </div>
        </nav>
        {/* <hr/> */}
    </div>
  )
}

export default Nav;