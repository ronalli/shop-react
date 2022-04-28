import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../../config';
import Preloader from '../../Services/Preloader/Preloader';
import GoodsList from '../GoodsList/GoodsList';

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);

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
  return <main>{loading ? <Preloader /> : <GoodsList goods={goods} />}</main>;
};

export default Shop;
