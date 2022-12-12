import React from 'react'
import "./Sidebar.css"


const SidebarGallery = (props) => {
  return (
    <div className='img-gallery'>
        <img src={props.img1} alt="" className='gallery-card-img' />
        <img src={props.img2} alt="" className='gallery-card-img' />
        <img src={props.img3} alt="" className='gallery-card-img' />
        <img src={props.img4} alt="" className='gallery-card-img' />
        <img src={props.img5} alt="" className='gallery-card-img' />
        <img src={props.img6} alt="" className='gallery-card-img' />
        <img src={props.img7} alt="" className='gallery-card-img' />
        <img src={props.img8} alt="" className='gallery-card-img' />
        <img src={props.img9} alt="" className='gallery-card-img' />
        <img src={props.img10} alt="" className='gallery-card-img' />
        <img src={props.img11} alt="" className='gallery-card-img' />
        <img src={props.img12} alt="" className='gallery-card-img' />
    </div>
  )
}

export default SidebarGallery