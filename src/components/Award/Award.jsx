import React from 'react'
import './award.css'

import {awards} from '../../constant/menuData'
const Award = (props) => {
    const {imgUrl, title,subtitle} = props.award
  return (
    <div className='app__award'>
        <img src={imgUrl} alt="award"/>
        <div className='app__award-content'>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    </div>
  )
}

export default Award