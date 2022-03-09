import React from 'react';
// import {AiOutlineMenu} from 'react-icons/ai';
import "../Nav/Nav.css";

const Nav = () => {
  return(
    <div className='nav-container'>
        <nav className='nav-content'>
            {/* <div className='nav-title'><AiOutlineMenu/></div> */}
            <div className='nav-title'>Title</div>
            <div className='nav-search'>
              <input type="text" className="nav-input" placeholder="Search"/>
            </div>
            <div className='nav-icons'>Icons</div>
        </nav>
    </div>
  )
}

export default Nav;