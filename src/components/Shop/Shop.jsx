import { useEffect, useContext } from 'react';
import { API_KEY, API_URL } from '../../config';
import Preloader from '../../Services/Preloader/Preloader';
import GoodsList from '../GoodsList/GoodsList';
import Cart from '../Cart/Cart';
import BasketList from '../BasketList/BasketList';
import Alert from '../Alert/Alert';
import { ShopContext } from '../../context/context';

const Shop = () => {
  const { setGoods, loading, isBasketShow, nameAlert } =
    useContext(ShopContext);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data && setGoods(data.shop);
      });
    //eslint-disable-next-line
  }, []);

  return (
    <main>
      <Cart />
      {loading ? <Preloader /> : <GoodsList />}
      {isBasketShow ? <BasketList /> : null}
      {nameAlert && <Alert />}
    </main>
  );
};

export default Shop;
