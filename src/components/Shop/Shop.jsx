import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../../config';
import Preloader from '../../Services/Preloader/Preloader';
import GoodsList from '../GoodsList/GoodsList';
import Cart from '../Cart/Cart';

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data && setGoods(data.shop);
        setLoading(false);
      });
  }, []);

  const addToBacket = (item) => {
    const itemIndex = order.findIndex((newItem) => newItem.id === item.id);
    if (itemIndex < 0) {
      const newOrder = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newOrder]);
    } else {
      const oldOrder = order.map((el, index) => {
        if (index === itemIndex) {
          return {
            ...el,
            quantity: el.quantity + 1,
          };
        }
        return el;
      });
      setOrder(oldOrder);
    }
  };

  return (
    <main>
      <Cart quantity={order.length || null} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToBacket={addToBacket} />
      )}
    </main>
  );
};

export default Shop;
