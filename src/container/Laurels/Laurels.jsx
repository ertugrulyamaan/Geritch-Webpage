import React from 'react'
import './laurels.css'

import laurels from '../../assets/laurels.png'
import { Subheading } from '../../components'
import { Award } from '../../components'
import {awards} from '../../constant/menuData'

const Laurels = () => {
  return (
    <div className='app__laurels section__padding'>
      <div className='app__laurels-img'>
        <img src={laurels} alt="laurels-img" />
      </div>
      <div className='app__laurels-container'>
        <div className='app__laurels-container_header'>
          <Subheading title="Awards & Recognition" />
          <h4>Our laurels</h4>
        </div>
        <div className='app__laurels-container_main'>
            {awards.map((award,index)=>(<Award award={award} key={index}/>))}
        </div>
      </div>
    </div>
  )
}

export default Laurels