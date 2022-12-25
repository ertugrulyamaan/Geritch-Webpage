import React from 'react'
import './specialmenu.css'
import menu from '../../assets/menu.png'
import { Menuitem, Subheading } from '../../components'
import { wines, cocktails } from '../../constant/menuData'

const SpecialMenu = () => {
  return (
    <div className='app__special section__padding' id='menu'>
      <div className='app__special-heading'>
        <Subheading title="Menu Thats Fits You Palette"/>
        <h2>Today's Special</h2>
      </div>
      <div className='app__special-container'>
        <div className='app__special-container_wine'>
          <h4>Wine & Beer</h4>
          <div>{wines.map((wine,index) => (
            <Menuitem key={index} title={wine.title} price={wine.price} tags={wine.tags}/>
            ))}</div>
        </div>
        <div className='app__special-container_img'>
          <img src={menu} alt="menu-img" />
        </div>
        <div className='app__special-container_cocktails'>
          <h4>Cocktails</h4>
          <div>{cocktails.map((cocktail,index)=>(
            <Menuitem key={index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
          ))}</div>
        </div>
      </div>
      <button className='custom-button'>View More</button>
    </div>
  )
}

export default SpecialMenu