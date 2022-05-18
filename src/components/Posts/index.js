import React from 'react';
import "./Posts.css";
import {AiOutlineTable} from "react-icons/ai";
import {HiOutlinePlay} from "react-icons/hi";
import {CgBookmark} from "react-icons/cg";
import {RiPriceTag2Line} from "react-icons/ri";
import { useSelector } from 'react-redux';

const Posts = () => {

  const user = useSelector((state) => state.user);

  return (
    <div className='posts-contenedor'>
        <div className='posts-content'>
            <div className='iconos-contenido'>
                <div className='i-content'>
                    <span className='i-c'>
                        <AiOutlineTable className='icon-p'/><a href="#publicaciones" className='p'>PUBLICACIONES</a>
                    </span>
                    <span className='items-c videos'>
                        <HiOutlinePlay className='icon-i-p' /><a href="#videos" className='i-p'>VÍDEOS</a>
                    </span>
                    <span className='items-c guardadas'>
                        <CgBookmark className='icon-i-p' /><a href="#guardadas" className='i-p'>GUARDADAS</a>
                    </span>
                    <span className='items-c etiquetadas'>
                        <RiPriceTag2Line className='icon-i-p' /><a href="#etiquetadas" className='i-p'>ETIQUETADAS</a>
                    </span>
                </div>
            </div>
            <div className='contenido'>
                <div className='content-images'>
                    {user.post.map(item => (
                        <img src={item.img} alt='image1' className='image1' key={item.img} />
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Posts;