import React from 'react'
import './findus.css'
import findus from '../../assets/findus.png'
import Subheading from '../../components/Subheading/Subheading'
const Findus = () => {
  return (
    <div className='app__findus section__padding'>
      <div className='app__findus-container'>
        <Subheading title="Contact"/>
        <h2>Find Us</h2>
        <p>Manhattan street No:43/78 </p>
        <h5>Opening Hours</h5>
        <p>Mon-Fri 8:00 am - 01:00 am</p>
        <p>Sat-Sun 8:00 am - 02:00 am</p>
        <button type='button' className='custom-button'>View More</button>
      </div>
      <div className='app__findus-img'>
        <img src={findus} alt="findus-img" />
      </div>
    </div>
  )
}

export default Findus