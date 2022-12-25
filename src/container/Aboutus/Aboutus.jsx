import React from 'react'
import { Subheading } from '../../components'
import './aboutus.css'
import knife from '../../assets/knife.png'
const Aboutus = () => {
  return (
    <div className='app__aboutus section__padding' id='about'>
      <div className='app__aboutus-about'>
        <Subheading title="About Us"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, laudantium.</p>
      </div>
      <div className='app__aboutus-img'>
        <img src={knife} alt="knife-img" />
      </div>
      <div className='app__aboutus-history'>
        <Subheading title="Our History"/>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, dignissimos.</p>
      </div>
    </div>
  )
}

export default Aboutus