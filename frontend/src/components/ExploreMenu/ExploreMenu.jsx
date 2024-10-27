import React from 'react'
import {menu_list} from '../../assets/assets'
import './ExploreMenu.css';
const ExploreMenu = ({ category, setCategory}) => {

  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Menu</h1>
        <p className='explore-menu-text'></p>
        <div className="explore-menu-list">
            { menu_list.map((item, index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev === item.menu_name?"All": item.menu_name)} key={index} className="explore-menu-listitem" >
                        <img className={category === item.menu_name?"active":"all"} src={item.menu_image} alt={item.menu_name} />
                        <p className='itemName'>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr className='divider'/>
    </div>
  )
}

export default ExploreMenu