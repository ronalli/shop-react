import './cart.css';

const Cart = (props) => {
  const { quantity = 0, handleBasketShow } = props;
  return (
    <div className='cart blue darken-3 white-text' onClick={handleBasketShow}>
      <i className='material-icons'>shopping_cart</i>
      <span className='cart-quantity'>{quantity}</span>
    </div>
  );
};

export default Cart;
