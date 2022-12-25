import React from 'react'
import './navbar.css'
import gericht from '../../assets/gericht.png'

import {BiLockOpen, BiLock} from 'react-icons/bi'
const Navbar = () => {
  const [toggle, setToggle] = React.useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setToggle((prev)=>!prev)
  }

  return (
    <nav className='app__navbar section__padding'>
      <div className='app__navbar-img'>
        <img src={gericht} alt="Geritch-logo" />
      </div>
      <div className='app__navbar-links'>
        <a href='#home'>Home</a>
        <a href='#about'>About</a>
        <a href='#menu'>Menu</a>
        <a href='#awards'>Awards</a>
        <a href='#contact'>Contact</a>
      </div>
      <div className='app__navbar-sign'>
        <a>Login/Register</a>
        <div className='vertical-line'/>
        <a>Book Table</a>
      </div>
      <div className='app__navbar-menu'>
        {toggle 
        ? <BiLockOpen color='#fff' style={{cursor:'pointer'}} size={30} onClick={handleSubmit}/> 
        : <BiLock color='#fff' style={{cursor:'pointer'}} size={30} onClick={handleSubmit}/>}
        {toggle && 
          <ul className='app__navbar-menu_links'>
            <a href='#home'>Home</a>
            <a href='#about'>About</a>
            <a href='#menu'>Menu</a>
            <a href='#awards'>Awards</a>
            <a href='#contact'>Contact</a>
          </ul>
        }
      </div>

    </nav>
  )
}

export default Navbar