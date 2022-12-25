import React from 'react'
import './chef.css'
import chef from '../../assets/chef.png'
import sign from '../../assets/sign.png'
import { Subheading } from '../../components'
const Chef = () => {
  return (
    <div className='app__chef section__padding'>
      <div className='app__chef-container'>
        <Subheading title="Chef's Word"/>
        <h4>What We Believe In</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quae consequuntur voluptates dolorum, vero hic expedita tempore sapiente nam debitis.</p>
        <h6>Kevin Luo</h6>
        <p>Chef & Founder</p>
        <div className='app__chef-container_img'>
          <img src={sign} alt="sign-img"/>     
        </div>
      </div>
      <div className='app__chef-img'>
        <img src={chef} alt="chef-img" />
      </div>
    </div>
  )
}

export default Chef