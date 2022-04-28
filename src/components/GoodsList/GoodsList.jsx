import './goodsList.css';
import GoodItem from '../GoodItem/GoodItem';

const Goods = ({ goods }) => {
  if (!goods.length) return <h2>Nothing here</h2>;
  return (
    <div className='goods'>
      {goods.map((item) => {
        return <GoodItem key={item.mainId} {...item} />;
      })}
    </div>
  );
};

export default Goods;
