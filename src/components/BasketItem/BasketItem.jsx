import { useContext } from 'react';
import { ShopContext } from '../../context/context';

import './basketItem.css';

const BasketItem = (props) => {
  const { id, name, price, quantity } = props;
  const { removeFromBasket, incQuantity, decQuantity } =
    useContext(ShopContext);
  return (
    <li className='collection-item'>
      {`${name} x ${quantity} - ${price.regularPrice * quantity} usd`}
      <span className='control-quantity'>
        <button className='material-icons btn' onClick={() => incQuantity(id)}>
          add
        </button>
        <button className='material-icons btn' onClick={() => decQuantity(id)}>
          remove
        </button>
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
