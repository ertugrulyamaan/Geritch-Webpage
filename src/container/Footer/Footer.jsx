import React from 'react'
import './footer.css'
import gericht from '../../assets/gericht.png'
import {BsInstagram,BsTwitter, BsFacebook} from 'react-icons/bs'
const Footer = () => {
  return (
    <div className='app__footer section__padding'>
      <div className='app__footer-container'>
        <div className='app__footer-container_contact'>
          <h5>Contact</h5>
          <div className='horizontal-line'/>
          <li>Manhattan street No:43/78</li>
          <li>+1 344-2526</li>
          <li>+1 344-2527</li>
        </div>
        <div className='app__footer-container_geritch'>
          <img src={gericht} alt="gericht-img"/>
          <p>The Best Way To Find Yourself Is To Lose Yourself In The Service Of Others.</p>
        </div>
        <div className='app__footer-container_links'>
          <h5>Links</h5>
          <div className='horizontal-line'/>
          <li>Social Media</li>
          <li>Instagram <BsInstagram/></li>
          <li>Facebook <BsFacebook/> </li>
          <li>Twitter <BsTwitter/></li>
        </div>
      </div>
    </div>
  )
}

export default Footer