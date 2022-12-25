import React, { useRef } from 'react'
import { Subheading } from '../../components'
import {BsInstagram } from 'react-icons/bs'
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
import './gallery.css'

import gallery01 from '../../assets/gallery01.png'
import gallery02 from '../../assets/gallery02.png'
import gallery03 from '../../assets/gallery03.png'
import gallery04 from '../../assets/gallery04.png'


const galleryimages = [gallery01, gallery02, gallery03, gallery04]

const Gallery = () => {
  const scrollRef = useRef(null)
 
  const scroll = (direction) => {
    const {current} = scrollRef

    if (direction === 'left') {
      current.scrollLeft -=300;
    }
    else {
      current.scrollLeft += 300;
    }
  }
 
 
 
 
  return (
    <div className='app__gallery section__padding'>
      <div className='app__gallery-img'>
        <div className='app__gallery-img_content' ref={scrollRef}>
          {galleryimages.map((item,index)=>(
              <div className='app__gallery-img_card' key={index} >
                <img src={item} alt="gallery-img"/>
              </div>
          ))}
        </div>
        <div className='app__gallery-img_icon'>
          <AiOutlineArrowLeft className='gallery-icon' onClick={()=>scroll('left')}/>
          <AiOutlineArrowRight className='gallery-icon' onClick={()=>scroll('right')}/> 
        </div>
      </div>
      <div className='app__gallery-content'>
        <div className='app__gallery-content_instagram'>
          <Subheading  title="Instagram"/>
          <BsInstagram style={{marginLeft:'0.5rem' ,marginBottom:'1rem'}} color='#fff' size={20}/>
        </div>
        <div className='app__gallery-content_main'>
          <h4>Photo Gallery</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat beatae ipsa ducimus similique repudiandae natus facilis magni voluptate?</p>
          <button type='button' style={{fontSize:'20px'}} className='custom-button'>View More</button>
        </div>
      </div>
    </div>
  )
}

export default Gallery