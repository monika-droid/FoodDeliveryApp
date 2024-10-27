import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext.jsx';
import { Link } from '@mui/material';

const Cart = () => {
  const { cartItem, food_list, removeFromCart, getCartAmountTotal } = useContext(StoreContext);
  
  // Calculate the total amount
  const totalAmount = getCartAmountTotal();

  // If totalAmount is 0 or less, show the message to add items
  if (totalAmount <= 0) {
    return (
      <div className='empty-cart-message'>
        <p>Your cart is empty.</p>
        <Link to='/'>Add Item to Cart</Link>
      </div>
    );
  }

  return (
    <div className='cart'>
      <div className="cartItem">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          const quantity = cartItem[item.name] || 0; // Default to 0 if item is not found
          
          if (quantity > 0) {
            return (
              <div key={item.name}>
                <div className='cart-items-title cart-items-item'>
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{quantity}</p>
                  <p>{item.price * quantity}</p>
                  <p className='remove' onClick={() => removeFromCart(item.name)}>X</p>
                </div>
                <hr />
              </div>
            );
          }
          return null; // Avoid rendering if the item is not in the cart
        })}
      </div>
      <div className='cart-bottom'>
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{totalAmount}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{2}</p>
            </div>
            <div className="cart-total-details">
              <b>Total</b>
              <b>{totalAmount + 2}</b>
            </div>
          </div>
          <button>Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
