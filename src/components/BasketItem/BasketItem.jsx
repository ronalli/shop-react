import './basketItem.css';

const BasketItem = (props) => {
  const { id, name, price, quantity, removeFromBasket } = props;
  return (
    <li className='collection-item'>
      {`${name} x ${quantity} - ${price * quantity} usd`}
      <span className='control-quantity'>
        <button className='material-icons btn'>add</button>
        <button className='material-icons btn'>remove</button>
      </span>
      <span
        className='secondary-content basket-delete'
        onClick={() => removeFromBasket(id)}
      >
        <i className='material-icons'>close</i>
      </span>
    </li>
  );
};

export default BasketItem;
