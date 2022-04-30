import { useContext } from 'react';
import { ShopContext } from '../../context/context';
import './cart.css';

const Cart = () => {
  const { order, handleBasketShow } = useContext(ShopContext);
  const quantity = order.length || null;
  return (
    <div className='cart blue darken-3 white-text' onClick={handleBasketShow}>
      <i className='material-icons'>shopping_cart</i>
      <span className='cart-quantity'>{quantity}</span>
    </div>
  );
};

export default Cart;
