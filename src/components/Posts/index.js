import React from 'react';
import "./Posts.css";
import {AiOutlineTable} from "react-icons/ai";
import {HiOutlinePlay} from "react-icons/hi";
import {CgBookmark} from "react-icons/cg";
import {RiPriceTag2Line} from "react-icons/ri";
// import { useSelector } from 'react-redux';
import img1 from "../Posts/img/img1.jpeg";
import img2 from "../Posts/img/img2.jpeg";
import img3 from "../Posts/img/img3.jpeg";

const Posts = () => {

//   const user = useSelector((state) => state.user);

  return (
    <div className='contenedor'>
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
        {/* <div>
            {user.post.map(item => (
                <imageContent key={item.id} data={item}/>
            ))}
        </div> */}
        <div className='contenido'>
            <div className='content-images'>
                <img src={img1} alt='image1' className='image1' />
                <img src={img2} alt='image2' className='image2' />
                <img src={img3} alt='image3' className='image3' />
            </div>
        </div>
    </div>
  )
}

// const imageContent = (props) => {
//     return(
//         <div className='contenido'>
//             <div className='content-images'>
//                 <img src={props.data.img1} alt='image1' className='image1' />
//                 <img src={props.data.img1} alt='image2' className='image2' />
//                 <img src={props.data.img1} alt='image3' className='image3' />
//             </div>
//         </div>
//     )
// }

export default Posts;