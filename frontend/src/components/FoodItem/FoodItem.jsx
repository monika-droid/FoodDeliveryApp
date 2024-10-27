import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext.jsx';

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItem, addToCart, removeFromCart } = useContext(StoreContext);
  const itemCount = cartItem[id] || 0;

  return (
    <div className='foodItem'>
      <div className="imageContainer">
        <img className='foodImage' src={image} alt={name} />
      </div>
      <div className="itemInfo">
        <div className="ratingandname">
          <p>{name}</p>
        </div>
        <p className='description'>{description}</p>
        <div className='priceandicon'>
          <p className='price'>${price}</p>
          {itemCount === 0 ? (
            <button onClick={() => addToCart(id)}>+</button>
          ) : (
            <button>
              <div className='iconalignment'>
                <span className="material-symbols-outlined" onClick={() => removeFromCart(id)}>remove</span>
                {itemCount}
                <span className="material-symbols-outlined" onClick={() => addToCart(id)}>add</span>
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
