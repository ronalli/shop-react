import './basketList.css';
import BasketItem from '../BasketItem/BasketItem';

const BasketList = (props) => {
  const { order, handleBasketShow, removeFromBasket } = props;
  const total = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);
  return (
    <ul className='collection basket-list'>
      <li className='collection-item active'>Корзина</li>
      {order.length ? (
        order.map((el) => {
          return (
            <BasketItem
              key={el.id}
              {...el}
              removeFromBasket={removeFromBasket}
            />
          );
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
