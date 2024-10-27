import React, { useContext } from 'react'
import './DisplayFoodItem.css'
import FoodItem from '../FoodItem/FoodItem';
import { StoreContext } from '../../context/StoreContext.jsx';
const DisplayFoodItem = ({category}) => {
    const {food_list} = useContext(StoreContext);
    if (!food_list) {
      return <div>No food items available</div>;
    }  
    
  return (
    <div className='foodDisplay' id='foodDisplay'>
      <h2>Most Popular Dishes</h2>
      <div className="foodDisplayList">
        {food_list.map((item, index)=>{
          if(category === "All" || category === item.category) 
          return <FoodItem key={index} id={item.name} name={item.name} description={item.description} image={item.image} price={item.price}/>
        })}
      </div>
    </div>
  )
}

export default DisplayFoodItem