import React from 'react'
import './menuitem.css'
const Menuitem = (props) => {
  return (
    <div className='app__menuitem'>
      <div className='app__menuitem-name'>
        <h5>{props.title}</h5>
        <p>{props.tags}</p>
      </div>
      <div className='app__menuitem-price'>
        <div>{props.price}</div>
        <div className='horizontal-line'/>
      </div>
    </div>
  )
}

export default Menuitem