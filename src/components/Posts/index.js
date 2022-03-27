import React from 'react';
import "./Posts.css";
import {AiOutlineTable} from "react-icons/ai";
// import {VscPlayCircle} from "react-icons/vsc";
import {HiOutlinePlay} from "react-icons/hi";
import {CgBookmark} from "react-icons/cg";
import {RiPriceTag2Line} from "react-icons/ri";

const Posts = () => {
  return (
    <div className='contenedor'>
        <div className='iconos-contenido'>
            <div className='i-content'>
                <span className='i-c'>
                    <AiOutlineTable className='icon-p'/><a href="#publicaciones" className='p'>PUBLICACIONES</a>
                </span>
                <span className='items-c'>
                    <HiOutlinePlay className='icon-i-p' /><a href="#videos" className='i-p'>VIDEOS</a>
                </span>
                <span className='items-c'>
                    <CgBookmark className='icon-i-p' /><a href="#guardadas" className='i-p'>GUARDADAS</a>
                </span>
                <span className='items-c'>
                    <RiPriceTag2Line className='icon-i-p' /><a href="#etiquetadas" className='i-p'>ETIQUETADAS</a>
                </span>
            </div>
        </div>
        <div className='contenido'>Post</div>
    </div>
  )
}
export default Posts;