import { useContext } from 'react';
import { ShopContext } from '../../context/context';

import './goodsList.css';
import GoodItem from '../GoodItem/GoodItem';

const GoodsList = () => {
  const { goods } = useContext(ShopContext);
  if (!goods.length) return <h2>Nothing here</h2>;
  return (
    <div className='goods'>
      {goods.map((item) => {
        return <GoodItem key={item.mainId} {...item} />;
      })}
    </div>
  );
};

export default GoodsList;
