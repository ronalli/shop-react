import { useContext } from 'react';
import { ShopContext } from '../../context/context';
import './basketList.css';
import BasketItem from '../BasketItem/BasketItem';

const BasketList = () => {
  const { order, handleBasketShow } = useContext(ShopContext);
  const total = order.reduce((sum, el) => {
    return sum + el.price.regularPrice * el.quantity;
  }, 0);
  return (
    <ul className='collection basket-list'>
      <li className='collection-item active'>Корзина</li>
      {order.length ? (
        order.map((el) => {
          return <BasketItem key={el.id} {...el} />;
        })
      ) : (
        <li className='collection-item'>Корзина пустая</li>
      )}
      <li className='collection-item active'>
        Обшая стоимость<span className='secondary-content'>{total} usd</span>
      </li>
      <span className='basket-close' onClick={handleBasketShow}>
        <i className='material-icons'>close</i>
      </span>
    </ul>
  );
};

export default BasketList;
