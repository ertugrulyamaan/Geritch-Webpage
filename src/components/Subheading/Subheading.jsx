import React from 'react'
import './subheading.css'
import spoon from '../../assets/spoon.png'
const Subheading = ({title}) => {
  return (
    <div className='app__subheading'>
      <div>{title}</div>
      <img src={spoon} alt="spoon" /> 
    </div>
  )
}

export default Subheading