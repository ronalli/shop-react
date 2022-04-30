import { useState, useEffect, useContext } from 'react';
import { API_KEY, API_URL } from '../../config';
import Preloader from '../../Services/Preloader/Preloader';
import GoodsList from '../GoodsList/GoodsList';
import Cart from '../Cart/Cart';
import BasketList from '../BasketList/BasketList';
import Alert from '../Alert/Alert';
import { ShopContext } from '../../context/context';

const Shop = () => {
  // const [goods, setGoods] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [order, setOrder] = useState([]);
  // const [isBasketShow, setIsBasketShow] = useState(false);
  // const [nameAlert, setNameAlert] = useState('');

  const { setGoods, loading, isBasketShow, nameAlert } =
    useContext(ShopContext);

  // const closeAlert = () => {
  //   setNameAlert('');
  // };

  // const handleBasketShow = () => {
  //   setIsBasketShow(!isBasketShow);
  // };

  // const removeFromBasket = (itemId) => {
  //   let newOrder = order.filter((el) => el.id !== itemId);
  //   setOrder(newOrder);
  // };

  // const incQuantity = (itemId) => {
  //   let newOrder = order.map((el) => {
  //     if (el.id === itemId) {
  //       let newQuantity = el.quantity + 1;
  //       return {
  //         ...el,
  //         quantity: newQuantity,
  //       };
  //     }
  //     return el;
  //   });
  //   setOrder(newOrder);
  // };
  // const decQuantity = (itemId) => {
  //   let newOrder = order.map((el) => {
  //     if (el.id === itemId) {
  //       let newQuantity = el.quantity - 1;
  //       return {
  //         ...el,
  //         quantity: el.quantity > 0 ? newQuantity : 0,
  //       };
  //     }
  //     return el;
  //   });
  //   setOrder(newOrder);
  // };

  // const addToBacket = (item) => {
  //   const itemIndex = order.findIndex((newItem) => newItem.id === item.id);
  //   if (itemIndex < 0) {
  //     const newOrder = {
  //       ...item,
  //       quantity: 1,
  //     };
  //     setOrder([...order, newOrder]);
  //   } else {
  //     const oldOrder = order.map((el, index) => {
  //       if (index === itemIndex) {
  //         return {
  //           ...el,
  //           quantity: el.quantity + 1,
  //         };
  //       }
  //       return el;
  //     });
  //     setOrder(oldOrder);
  //   }
  //   setNameAlert(item.name);
  // };

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
