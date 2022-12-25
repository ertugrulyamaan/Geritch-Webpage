import React from 'react'
import './header.css'
import welcome from '../../assets/welcome.png'
import { Subheading } from '../../components'

const Header = () => {
  return (
    <div className='app__header section__padding' id="home">
      <div className='app__header-content'>
        <Subheading title="Chase The New Flavour" />
        <h2>The Key to Fine Dining</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam praesentium consequuntur excepturi asperiores cupiditate soluta expedita suscipit voluptas quibusdam at!</p>
        <button type='button' className='custom-button'>Explore Menu</button>
      </div>
      <div className='app__header-img'>
        <img src={welcome} alt="welcome-img" />
      </div>
    </div>
  )
}

export default Header